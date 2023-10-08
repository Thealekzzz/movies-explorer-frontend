import './MoviesCardList.css';
import { PropTypes } from 'prop-types';

import MovieCard from "../MovieCard/MovieCard";
import PreLoader from '../PreLoader/PreLoader';

const movies = [
  {
    id: 1,
    image: 'https://sun9-43.userapi.com/impg/hjHDCtiz252auBYaPuJOqIH7Jv5gH3viG_vpdw/_IfKIStIVes.jpg?size=960x1280&quality=95&sign=468aad0ec23325aeb0087122cb78c7c5&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 2,
    image: 'https://sun9-43.userapi.com/impg/hjHDCtiz252auBYaPuJOqIH7Jv5gH3viG_vpdw/_IfKIStIVes.jpg?size=960x1280&quality=95&sign=468aad0ec23325aeb0087122cb78c7c5&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 3,
    image: 'https://sun9-43.userapi.com/impg/hjHDCtiz252auBYaPuJOqIH7Jv5gH3viG_vpdw/_IfKIStIVes.jpg?size=960x1280&quality=95&sign=468aad0ec23325aeb0087122cb78c7c5&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 4,
    image: 'https://sun9-43.userapi.com/impg/hjHDCtiz252auBYaPuJOqIH7Jv5gH3viG_vpdw/_IfKIStIVes.jpg?size=960x1280&quality=95&sign=468aad0ec23325aeb0087122cb78c7c5&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 5,
    image: 'https://sun9-43.userapi.com/impg/hjHDCtiz252auBYaPuJOqIH7Jv5gH3viG_vpdw/_IfKIStIVes.jpg?size=960x1280&quality=95&sign=468aad0ec23325aeb0087122cb78c7c5&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 6,
    image: 'https://sun9-43.userapi.com/impg/hjHDCtiz252auBYaPuJOqIH7Jv5gH3viG_vpdw/_IfKIStIVes.jpg?size=960x1280&quality=95&sign=468aad0ec23325aeb0087122cb78c7c5&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 7,
    image: 'https://sun9-43.userapi.com/impg/hjHDCtiz252auBYaPuJOqIH7Jv5gH3viG_vpdw/_IfKIStIVes.jpg?size=960x1280&quality=95&sign=468aad0ec23325aeb0087122cb78c7c5&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 8,
    image: 'https://sun9-43.userapi.com/impg/hjHDCtiz252auBYaPuJOqIH7Jv5gH3viG_vpdw/_IfKIStIVes.jpg?size=960x1280&quality=95&sign=468aad0ec23325aeb0087122cb78c7c5&type=album',
    title: 'Название 1',
    duration: '1:42',
  },
  {
    id: 9,
    image: 'https://sun9-43.userapi.com/impg/hjHDCtiz252auBYaPuJOqIH7Jv5gH3viG_vpdw/_IfKIStIVes.jpg?size=960x1280&quality=95&sign=468aad0ec23325aeb0087122cb78c7c5&type=album',
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