import { PropTypes } from 'prop-types';

import './LikeButton.css';

import like from '../../images/like.svg';
import likeActive from '../../images/like_active.svg';
import likeDelete from '../../images/like_delete.svg';
import { useState } from 'react';

const LikeButton = ({ isLiked }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='like-button hoverable'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
    </div>
  );
};

LikeButton.propTypes = {
  isLiked: PropTypes.bool,
};

export default LikeButton;