import { Link } from 'react-router-dom';

import './ProfileButton.css';

const ProfileButton = () => {
  return (
    <Link to='/profile' className="profile-button">
      {/* <div className="profile-button"> */}
        <p className="profile-button__text">Аккаунт</p>
        <div className="profile-button__icon"></div>
      {/* </div> */}
    </Link>
  );
};

export default ProfileButton;