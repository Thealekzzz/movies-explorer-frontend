import './MovieCard.css';

import { PropTypes } from 'prop-types';
import LikeButton from '../LikeButton/LikeButton';
import Divider from '../Divider/Divider';
import { getTimeByDuration } from '../../utils/other';

const MovieCard = ({ movie }) => {
  const { image, nameRU, duration, isLiked } = movie;
  const [hours, minutes] = getTimeByDuration(duration);

  return (
    <div className="card">
      <div
        className="card__image"
        style={{
          background: `center / cover url(https://api.nomoreparties.co${image.url})`,
        }}>
      </div>

      <div className="card__title-wrapper">
        <p className="card__title">{nameRU}</p>
        <LikeButton isLiked={isLiked} />
      </div>

      <Divider type={'horizontal'} />

      <p className="card__duration">{hours ? `${hours}ч` : ''} {minutes ? `${minutes}м` : ''}</p>

    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;