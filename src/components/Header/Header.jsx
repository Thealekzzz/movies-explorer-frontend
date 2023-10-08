import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PropTypes } from 'prop-types';

import IsLoggedContext from '../../contexts/IsLoggedContext';

import './Header.css';
import logoIcon from '../../images/logo.svg';
import burgerIcon from '../../images/burger.svg';

const Header = ({ isColored }) => {
  const isLogged = useContext(IsLoggedContext);

  return (
    <header
      className={`header ${isColored ? 'header_colored' : ''}`}
    >
      <div className="container header__container container_justify_sides">
        <div className="header__left">
          <Link to={'/'} className='hoverable'>
            <img src={logoIcon} alt="Логотип" className="header__logo" />
          </Link>
          <nav className="header__nav">
            <Link className="header__link hoverable" to={'/movies'}>Фильмы</Link>
            <Link className="header__link hoverable" to={'/saved-movies'}>Сохранённые фильмы</Link>
          </nav>
        </div>

        <div className="header__right">
          {isLogged ? (
            <Link to='/profile'>
              <div className="header__profile">
                <p className="header__profile-text">Аккаунт</p>
                <div className="header__profile-icon"></div>
              </div>
            </Link>
          ) : (
            <nav className="header__nav header__nav_extended">
              <Link className='header__link header__link_small hoverable' to='/signup'>Регистрация</Link>
              <Link className='header__link header__link_small header__link_accent hoverable' to='/signin'>Войти</Link>
            </nav>
          )}

          <div className="header__burger hoverable">
            <img src={burgerIcon} alt="Бургер-меню, кнопка" />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isColored: PropTypes.bool,
};

export default Header;