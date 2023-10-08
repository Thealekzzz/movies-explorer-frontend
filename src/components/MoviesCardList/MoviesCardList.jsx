import './MoviesCardList.css';
import { PropTypes } from 'prop-types';

import MovieCard from "../MovieCard/MovieCard";
import PreLoader from '../PreLoader/PreLoader';

const movies = [
  {
    id: 1,
    image: 'https://sun9-80.userapi.com/impf/c849324/v849324257/99bfb/hlBj5yceloc.jpg?size=2560x1440&quality=96&sign=77a28ead2a65dbe16a8512aca06fd449&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 2,
    image: 'https://sun9-80.userapi.com/impf/c849324/v849324257/99bfb/hlBj5yceloc.jpg?size=2560x1440&quality=96&sign=77a28ead2a65dbe16a8512aca06fd449&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 3,
    image: 'https://sun9-80.userapi.com/impf/c849324/v849324257/99bfb/hlBj5yceloc.jpg?size=2560x1440&quality=96&sign=77a28ead2a65dbe16a8512aca06fd449&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 4,
    image: 'https://sun9-80.userapi.com/impf/c849324/v849324257/99bfb/hlBj5yceloc.jpg?size=2560x1440&quality=96&sign=77a28ead2a65dbe16a8512aca06fd449&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 5,
    image: 'https://sun9-80.userapi.com/impf/c849324/v849324257/99bfb/hlBj5yceloc.jpg?size=2560x1440&quality=96&sign=77a28ead2a65dbe16a8512aca06fd449&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 6,
    image: 'https://sun9-80.userapi.com/impf/c849324/v849324257/99bfb/hlBj5yceloc.jpg?size=2560x1440&quality=96&sign=77a28ead2a65dbe16a8512aca06fd449&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 7,
    image: 'https://sun9-80.userapi.com/impf/c849324/v849324257/99bfb/hlBj5yceloc.jpg?size=2560x1440&quality=96&sign=77a28ead2a65dbe16a8512aca06fd449&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 8,
    image: 'https://sun9-80.userapi.com/impf/c849324/v849324257/99bfb/hlBj5yceloc.jpg?size=2560x1440&quality=96&sign=77a28ead2a65dbe16a8512aca06fd449&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 9,
    image: 'https://sun9-80.userapi.com/impf/c849324/v849324257/99bfb/hlBj5yceloc.jpg?size=2560x1440&quality=96&sign=77a28ead2a65dbe16a8512aca06fd449&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
];

const MoviesCardList = ({ isLoading }) => {
  return isLoading ? (
    <div className="loader">
      <PreLoader />
    </div>
  ) : (
    <div className="cards">
      <div className="cards__list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <button className="cards__more-button hoverable">Ещё</button>
    </div>
  );
};

MoviesCardList.propTypes = {
  isLoading: PropTypes.bool,
};

export default MoviesCardList;