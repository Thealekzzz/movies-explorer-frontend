import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { FIELDS_TO_FILTER_BY } from "../../consts/other";
import { unlikeMovie } from "../../utils/MainApi";
import { NO_SAVED_MOVIES, NOTHING_FOUND } from "../../consts/errors";
import savedMoviesContext from "../../contexts/savedMoviesContext";

const SavedMovies = () => {
  const { savedMovies, setSavedMovies } = useContext(savedMoviesContext);

  const [searchValue, setSearchValue] = useState('');
  const [shortFilmsOnly, setShortFilmsOnly] = useState(false);

  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  // function proccessMovieLikes(movies, savedMovies) {
  //   return movies.map((movie) => {
  //     if (savedMovies.find((m) => m.movieId === movie.id)) {
  //       movie.isLiked = true;
  //     } else {
  //       movie.isLiked = false;
  //     }

  //     return movie;
  //   });
  // }

  async function handleSubmit(searchValue, shortFilmsOnly) {
    setIsLoading(true);

    // Фильтрация фильмов
    const filtered = allMovies.filter((movie) => (
      FIELDS_TO_FILTER_BY.some((property) => movie[property].toLowerCase().includes(searchValue.toLowerCase()))
      && (shortFilmsOnly && movie.duration <= 40 || !shortFilmsOnly)
    ));

    setFilteredMovies(filtered);
    setIsLoading(false);
  }

  async function handleLikeClick(movie) {
    unlikeMovie(movie.movieId)
    .then((movie) => {
      const unlikedMovieId = movie.movieId;

      setSavedMovies(allMovies.filter((movie) => movie.movieId !== unlikedMovieId));
      setFilteredMovies(filteredMovies.filter((movie) => movie.movieId !== unlikedMovieId));
      setAllMovies(allMovies.filter((movie) => movie.movieId !== unlikedMovieId));

    })
    .catch(() => {
      console.error("Ошибка при дислайке");
    })
  }

  useEffect(() => {
    const proccessedMovies = savedMovies.map((movie) => {
      movie.isLiked = true;
      return movie;
    })

    setAllMovies(proccessedMovies);
    setFilteredMovies(proccessedMovies);

    console.log(proccessedMovies);

  }, []);

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
          movies={filteredMovies}
          onLikeClick={handleLikeClick}
          noDataTitle={filteredMovies.length === 0 && searchValue !== '' ? NOTHING_FOUND : NO_SAVED_MOVIES}
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;


// Починить лайки в сохраненных фильмах
// Обновлять лайки в фильмах в стейте когда убираю лайк