import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import IsMenuOpenContext from '../../contexts/IsMenuOpenContext';
import ProfileButton from '../ProfileButton/ProfileButton';

import closeIcon from '../../images/close.svg';

import './Menu.css';
import IsLoggedContext from '../../contexts/IsLoggedContext';

const links = {
  '/': 'Главная',
  '/movies': 'Фильмы',
  '/saved-movies': 'Сохраненные фильмы',
};

const Menu = () => {
  const location = useLocation();
  const { isMenuOpen, setIsMenuOpen } = useContext(IsMenuOpenContext);
  const { isLogged } = useContext(IsLoggedContext);
  const { width } = useWindowDimensions();

  const currentURL = location.pathname;

  function handleLinkClick() {
    setIsMenuOpen(false);
  }

  return width <= 768 ? (
    <section className={`menu ${isMenuOpen ? '' : 'menu_hidden'}`}>
      <div className="menu__inner">
        <img src={closeIcon} alt="Закрыть меню, кнопка" className="menu__close hoverable" onClick={() => { setIsMenuOpen(false) }} />

        <nav className="menu__links">
          {Object.entries(links).map(([url, name], i) => (
            <Link
              to={isLogged  ? url : '/signin'}
              key={i}
              className={`menu__link hoverable ${currentURL === url ? 'menu__link_active' : ''}`}
              onClick={handleLinkClick}
            >{name}</Link>
          ))}
        </nav>

        <nav className="menu__bottom" onClick={handleLinkClick}>
          {isLogged ? (
            <ProfileButton />

          ) : (
            <>
              <Link className='header__link header__link_small header__link_accent hoverable' to='/signin'>Войти</Link>
              <Link className='header__link header__link_small hoverable' to='/signup'>Регистрация</Link>
            </>
          )}
        </nav>

      </div>
    </section>
  ) : (
    <></>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default Menu;