import './MovieCard.css';

import { PropTypes } from 'prop-types';
import LikeButton from '../LikeButton/LikeButton';
import Divider from '../Divider/Divider';

const MovieCard = ({ movie }) => {
  const { image, title, duration, isLiked } = movie;

  return (
    <div className="card">
      <div
        className="card__image"
        style={{
          background: `center / cover url(${image})`,
        }}>
      </div>

      <div className="card__title-wrapper">
        <p className="card__title">{title}</p>
        <LikeButton isLiked={isLiked} />
      </div>

      <Divider type={'horizontal'} />

      <p className="card__duration">{duration}</p>

    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;