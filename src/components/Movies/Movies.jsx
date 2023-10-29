import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { getMovies } from "../../utils/MoviesApi";
import { propertiesToFilterBy } from "../../consts/other";
import useWindowDimensions from "../../hooks/getWindowDimensions";
import { getCardsNumberByWidth } from "../../utils/other";
import { nothingFound, typeKeywords } from "../../consts/errors";
import { getSavedMovies, likeMovie, unlikeMovie } from "../../utils/MainApi";

const Movies = () => {
  const { width } = useWindowDimensions();

  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredShortMovies, setFilteredShortMovies] = useState([]);
  const [shownMovies, setShownMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [isMoreAvaliable, setIsMoreAvaliable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const [shortFilmsOnly, setShortFilmsOnly] = useState(false);

  const cardsNumber = getCardsNumberByWidth(width);
  const filteredMoviesNumber = filteredMovies.length;
  const shownMoviesNumber = shownMovies.length;

  function proccessMovieLikes(movies, savedMovies) {
    return movies.map((movie) => {
      if (savedMovies.find((m) => m.movieId === movie.id)) {
        movie.isLiked = true;
      } else {
        movie.isLiked = false;
      }

      return movie;
    });
  }

  async function loadMovies() {
    try {
      const movies = await getMovies();

      const proccessedMovies = proccessMovieLikes(movies, savedMovies);

      setAllMovies(proccessedMovies);

      return proccessedMovies;

    } catch (err) {
      console.error("Ошибка при загрузке фильмов");
    }

  }

  async function handleSubmit(searchValue, shortFilmsOnly) {
    setIsLoading(true);
    let movies = allMovies;

    // Получение всех фильмов
    if (allMovies.length === 0) {
      movies = await loadMovies();
      setAllMovies(movies);
    }

    // Фильтрация фильмов
    const filtered = movies.filter((movie) => (
      propertiesToFilterBy.some((property) => movie[property].toLowerCase().includes(searchValue.toLowerCase()))
    ));

    const filteredShort = filtered.filter((movie) => (
      shortFilmsOnly && movie.duration <= 40
    ));

    // Сохранение запроса и результатов в LS
    const payload = { searchValue, shortFilmsOnly, filteredMovies: filtered };
    localStorage.setItem('previousSearch', JSON.stringify(payload));

    setFilteredMovies(filtered);
    setFilteredShortMovies(filteredShort);
    setShownMovies((shortFilmsOnly ? filteredShort : filtered).slice(0, cardsNumber.initial));
    setIsLoading(false);
  }

  function handleMoreButtonClick() {
    setShownMovies((prev) => (
      [...prev, ...(shortFilmsOnly ? filteredShortMovies : filteredMovies).slice(shownMoviesNumber, shownMoviesNumber + cardsNumber.new)]
    ));

    if (shortFilmsOnly && (shownMoviesNumber >= filteredShortMovies) || !shortFilmsOnly && (shownMoviesNumber >= filteredMoviesNumber)) {
      setIsMoreAvaliable(false);
    }
  }

  function handleLikeClick(movie) {
    if (movie.isLiked) {
      unlikeMovie(movie.id)
        .then((movie) => {
          const unlikedMovieId = movie.movieId;

          setShownMovies(shownMovies.map((movie) => movie.id === unlikedMovieId ? { ...movie, isLiked: false } : movie));
        })
        .catch((err) => {
          console.error(err);
        });

    } else {
      likeMovie(movie)
        .then((movie) => {
          const likedMovieId = movie.movieId;

          setShownMovies(shownMovies.map((movie) => movie.id === likedMovieId ? { ...movie, isLiked: true } : movie));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  useEffect(() => {
    if (shortFilmsOnly && (shownMoviesNumber >= filteredShortMovies.length) || !shortFilmsOnly && (shownMoviesNumber >= filteredMoviesNumber)) {
      setIsMoreAvaliable(false);

    } else {
      setIsMoreAvaliable(true);
    }
  }, [shownMoviesNumber, filteredMoviesNumber]);

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem('previousSearch'));

    if (ls) {
      const { searchValue, shortFilmsOnly, filteredMovies } = ls;

      // Получение сохраненных фильмов
      getSavedMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies);

          const proccessedMovies = proccessMovieLikes(filteredMovies, savedMovies);

          const filteredShort = proccessedMovies.filter((movie) => (
            shortFilmsOnly && movie.duration <= 40
          ));

          setSearchValue(searchValue);
          setShortFilmsOnly(shortFilmsOnly);
          setFilteredMovies(proccessedMovies);
          setFilteredShortMovies(filteredShort);
          setShownMovies((shortFilmsOnly ? filteredShort : proccessedMovies).slice(0, cardsNumber.initial));

        })
        .catch(() => {
          console.error("Ошибка при получении сохраненных фильмов");
        });
    }
  }, []);

  useEffect(() => {
    setShownMovies((shortFilmsOnly ? filteredShortMovies : filteredMovies).slice(0, cardsNumber.initial));
    
  }, [shortFilmsOnly]);

  return (
    <>
      <Header />
      <main>
        <SearchForm
          handleSubmit={handleSubmit}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          shortFilmsOnly={shortFilmsOnly}
          setShortFilmsOnly={setShortFilmsOnly}
        />
        <MoviesCardList
          isLoading={isLoading}
          isMoreAvaliable={isMoreAvaliable}
          movies={shownMovies}
          onMoreButtonClick={handleMoreButtonClick}
          noDataTitle={filteredMoviesNumber === 0 && searchValue !== '' ? nothingFound : typeKeywords}
          onLikeClick={handleLikeClick}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;