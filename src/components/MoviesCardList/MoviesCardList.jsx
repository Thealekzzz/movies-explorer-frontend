import './MoviesCardList.css';
import { PropTypes } from 'prop-types';

import MovieCard from "../MovieCard/MovieCard";
import PreLoader from '../PreLoader/PreLoader';


const MoviesCardList = ({ isLoading, isMoreAvaliable, movies, onMoreButtonClick }) => {
  return isLoading ? (
    <div className="loader">
      <PreLoader />
    </div>
  ) : (
    <section className="cards">
      <ul className="cards__list">
        {movies.map((movie) => (
          <li key={movie.id} className='cards__item'>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
      
      {isMoreAvaliable && (
        <button className="cards__more-button hoverable" onClick={onMoreButtonClick}>Ещё</button>
      )}
    </section>
  );
};

MoviesCardList.propTypes = {
  isLoading: PropTypes.bool,
  isMoreAvaliable: PropTypes.bool,
  movies: PropTypes.array,
  onMoreButtonClick: PropTypes.func,
};

export default MoviesCardList;