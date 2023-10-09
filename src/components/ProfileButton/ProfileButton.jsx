import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import './ProfileButton.css';

const ProfileButton = ({ isColored }) => {
  return (
    <Link to='/profile' className="profile-button">
      {/* <div className="profile-button"> */}
        <p className="profile-button__text">Аккаунт</p>
        <div className={`profile-button__icon ${isColored ? 'profile-button__icon_colored' : ''}`}></div>
      {/* </div> */}
    </Link>
  );
};

ProfileButton.propTypes = {
  isColored: PropTypes.bool,
};

export default ProfileButton;