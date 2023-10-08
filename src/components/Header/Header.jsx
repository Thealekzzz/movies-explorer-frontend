import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PropTypes } from 'prop-types';

import IsLoggedContext from '../../contexts/IsLoggedContext';

import './Header.css';
import logoIcon from '../../images/logo.svg';
import burgerIcon from '../../images/burger.svg';
import IsMenuOpenContext from '../../contexts/IsMenuOpenContext';
import ProfileButton from '../ProfileButton/ProfileButton';
import useWindowDimensions from '../../hooks/getWindowDimensions';

const Header = ({ isColored }) => {
  const { setIsMenuOpen } = useContext(IsMenuOpenContext);
  const { width } = useWindowDimensions();
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
          {width > 768 ? (
            isLogged ? (
              <ProfileButton />
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