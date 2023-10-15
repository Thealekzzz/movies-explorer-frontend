import './MoviesCardList.css';
import { PropTypes } from 'prop-types';

import MovieCard from "../MovieCard/MovieCard";
import PreLoader from '../PreLoader/PreLoader';
import NoData from '../NoData/NoData';


const MoviesCardList = ({ isLoading, isMoreAvaliable, movies, onMoreButtonClick, noDataTitle }) => {
  return isLoading ? (
    <div className="loader">
      <PreLoader />
    </div>
  ) : (
    <section className="cards">
      {movies.length ? (
        <ul className="cards__list">
          {movies.map((movie) => (
            <li key={movie.id} className='cards__item'>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        <NoData title={noDataTitle} />
      )}

      

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
  noDataTitle: PropTypes.string,
};

export default MoviesCardList;