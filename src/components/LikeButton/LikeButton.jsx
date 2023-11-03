import { PropTypes } from 'prop-types';

import './LikeButton.css';

import like from '../../images/like.svg';
import likeActive from '../../images/like_active.svg';
import likeDelete from '../../images/like_delete.svg';
import { useState } from 'react';

const LikeButton = ({ isLiked, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className='like-button hoverable'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {isLiked ? (
        isHovered ? (
          <img src={likeDelete} alt="like button" />

        ) : (
          <img src={likeActive} alt="like button" />
        )

      ) : (
        <img src={like} alt="like button" />
      )}
    </button>
  );
};

LikeButton.propTypes = {
  isLiked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default LikeButton;