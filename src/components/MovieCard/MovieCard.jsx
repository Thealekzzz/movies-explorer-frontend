import './MovieCard.css';

import { PropTypes } from 'prop-types';
import LikeButton from '../LikeButton/LikeButton';
import Divider from '../Divider/Divider';
import { getTimeByDuration } from '../../utils/other';

const MovieCard = ({ movie, onLikeClick }) => {
  const { image, nameRU, duration, isLiked, trailerLink } = movie;
  const [hours, minutes] = getTimeByDuration(duration);

  function handleLikeClick() {
    onLikeClick(movie);
  }

  return (
    <div className="card">
      <a href={trailerLink} target='_blank' rel='noreferrer'>
        <div
          className="card__image"
          style={{
            background: `center / cover url(${image.url ? `https://api.nomoreparties.co/${image.url}` : image})`,
          }}>
        </div>
      </a>

      <div className="card__title-wrapper">
        <p className="card__title">{nameRU}</p>
        <LikeButton isLiked={isLiked} onClick={handleLikeClick} />
      </div>

      <Divider type={'horizontal'} />

      <p className="card__duration">{hours ? `${hours}ч` : ''} {minutes ? `${minutes}м` : ''}</p>

    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  onLikeClick: PropTypes.func,
};

export default MovieCard;