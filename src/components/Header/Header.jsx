import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { PropTypes } from 'prop-types';

import IsLoggedContext from '../../contexts/IsLoggedContext';

import './Header.css';
import logoIcon from '../../images/logo.svg';
import burgerIcon from '../../images/burger.svg';
import IsMenuOpenContext from '../../contexts/IsMenuOpenContext';
import ProfileButton from '../ProfileButton/ProfileButton';
import useWindowDimensions from '../../hooks/getWindowDimensions';

const links = {
  '/movies': 'Фильмы',
  '/saved-movies': 'Сохраненные фильмы',
};

const Header = ({ isColored }) => {
  const location = useLocation();

  const { setIsMenuOpen } = useContext(IsMenuOpenContext);
  const { width } = useWindowDimensions();
  const { isLogged } = useContext(IsLoggedContext);

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
            {Object.entries(links).map(([link, name]) => (
              <Link
                key={name}
                className={`header__link hoverable ${location.pathname === link ? 'header__link_active' : ''}`}
                to={link}
              >{name}</Link>
            ))}
            {/* <Link className="header__link hoverable" to={'/saved-movies'}>Сохранённые фильмы</Link> */}
          </nav>
        </div>

        <div className="header__right">
          {width > 768 ? (
            isLogged ? (
              <ProfileButton isColored={isColored} />
            ) : (
              <nav className="header__nav header__nav_extended">
                <Link className='header__link header__link_small hoverable' to='/signup'>Регистрация</Link>
                <Link className='header__link header__link_small header__link_accent hoverable' to='/signin'>Войти</Link>
              </nav>
            )

          ) : (
            <button className="header__burger hoverable" onClick={() => setIsMenuOpen(true)}>
              <img src={burgerIcon} alt="Бургер-меню, кнопка" />
            </button>

          )}

        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isColored: PropTypes.bool,
};

export default Header;