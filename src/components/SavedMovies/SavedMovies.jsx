import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { propertiesToFilterBy } from "../../consts/other";
import { getSavedMovies, unlikeMovie } from "../../utils/MainApi";
import { noSavedMovies, nothingFound } from "../../consts/errors";

const SavedMovies = () => {
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
      propertiesToFilterBy.some((property) => movie[property].toLowerCase().includes(searchValue.toLowerCase()))
      && (shortFilmsOnly && movie.duration <= 40 || !shortFilmsOnly)
    ));

    setFilteredMovies(filtered);
    setIsLoading(false);
  }

  async function handleLikeClick(movie) {
    unlikeMovie(movie.movieId)
    .then((movie) => {
      const unlikedMovieId = movie.movieId;

      setFilteredMovies(filteredMovies.filter((movie) => movie.movieId !== unlikedMovieId));
      setAllMovies(allMovies.filter((movie) => movie.movieId !== unlikedMovieId));

    })
    .catch(() => {
      console.error("Ошибка при дислайке");
    })
  }

  useEffect(() => {
    // Получение сохраненных фильмов
    getSavedMovies()
      .then((movies) => {

        const proccessedMovies = movies.map((movie) => {
          movie.isLiked = true;
          return movie;
        })

        setAllMovies(proccessedMovies);
        setFilteredMovies(proccessedMovies);

        console.log(proccessedMovies);

        // const proccessedMovies = proccessMovieLikes(filteredMovies, movies);

        // // setSearchValue(searchValue);
        // // setShortFilmsOnly(shortFilmsOnly);
        // setAllMovies(proccessedMovies);
        // setFilteredMovies(proccessedMovies);

      })
      .catch(() => {
        console.error("Ошибка при лайке");
      });
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
          noDataTitle={filteredMovies.length === 0 && searchValue !== '' ? nothingFound : noSavedMovies}
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;


// Починить лайки в сохраненных фильмах
// Обновлять лайки в фильмах в стейте когда убираю лайк