/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { getMovies } from "../../utils/MoviesApi";
import { propertiesToFilterBy } from "../../consts/other";
import useWindowDimensions from "../../hooks/getWindowDimensions";
import { getCardsNumberByWidth } from "../../utils/other";

const Movies = () => {
  const { width } = useWindowDimensions();

  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shownMovies, setShownMovies] = useState([]);

  const [isMoreAvaliable, setIsMoreAvaliable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const cardsNumber = getCardsNumberByWidth(width);
  const filteredMoviesNumber = filteredMovies.length;
  const shownMoviesNumber = shownMovies.length;

  async function handleSubmit(searchValue, shortFilmsOnly) {
    setIsLoading(true);
    let movies = allMovies;

    // Получение всех фильмов
    if (allMovies.length === 0) {
      try {
        movies = await getMovies();
        setAllMovies(movies);

      } catch (err) {
        console.error("Ошибка при загрузке фильмов");
      }
    }

    // Фильтрация фильмов
    const filtered = movies.filter((movie) => (
      propertiesToFilterBy.some((property) => movie[property].toLowerCase().includes(searchValue.toLowerCase()))
      && (shortFilmsOnly && movie.duration <= 40 || !shortFilmsOnly)
    ));

    setFilteredMovies(filtered);
    setShownMovies(filtered.slice(0, cardsNumber.initial));
    setIsLoading(false);
  }

  function handleMoreButtonClick() {
    setShownMovies((prev) => (
      [...prev, ...filteredMovies.slice(shownMoviesNumber, shownMoviesNumber + cardsNumber.new)]
    ));

    if (shownMoviesNumber >= filteredMoviesNumber) {
      setIsMoreAvaliable(false);
    }
  }

  useEffect(() => {
    if (shownMoviesNumber >= filteredMoviesNumber) {
      setIsMoreAvaliable(false);

    } else {
      setIsMoreAvaliable(true);
    }
  }, [shownMoviesNumber, filteredMoviesNumber]);


  return (
    <>
      <Header />
      <main>
        <SearchForm handleSubmit={handleSubmit} />
        <MoviesCardList
          isLoading={isLoading}
          isMoreAvaliable={isMoreAvaliable}
          movies={shownMovies}
          onMoreButtonClick={handleMoreButtonClick}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;