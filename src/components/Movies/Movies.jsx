import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const Movies = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
};

export default Movies;