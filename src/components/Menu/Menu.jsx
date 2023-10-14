import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import useWindowDimensions from '../../hooks/getWindowDimensions';
import IsMenuOpenContext from '../../contexts/IsMenuOpenContext';
import ProfileButton from '../ProfileButton/ProfileButton';

import closeIcon from '../../images/close.svg';

import './Menu.css';

const links = {
  '/': 'Главная',
  '/movies': 'Фильмы',
  '/saved-movies': 'Сохраненные фильмы',
};

const Menu = () => {
  const location = useLocation();
  const { isMenuOpen, setIsMenuOpen } = useContext(IsMenuOpenContext);
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
              to={url}
              key={i}
              className={`menu__link hoverable ${currentURL === url ? 'menu__link_active' : ''}`}
              onClick={handleLinkClick}
            >{name}</Link>
          ))}
        </nav>

        <div className="menu__bottom" onClick={handleLinkClick}>
          <ProfileButton />
        </div>

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