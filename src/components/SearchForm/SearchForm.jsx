import { useState } from 'react';
import { PropTypes } from 'prop-types';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { EMPTY_SEARCH_INPUT } from '../../consts/errors';

import Toggle from '../Toggle/Toggle';
import Divider from '../Divider/Divider';

import searchIcon from '../../images/search.svg';
import './SearchForm.css';

const SearchForm = ({
  handleSubmit,
  searchValue,
  setSearchValue,
  shortFilmsOnly,
  setShortFilmsOnly,
}) => {
  const { width } = useWindowDimensions();

  const [isErrorVisible, setIsErrorVisible] = useState(false);

  function handleToggleChange() {
    setShortFilmsOnly((prev) => !prev);
  }

  function onSubmit(evt) {
    evt.preventDefault();

    if (!searchValue) {
      setIsErrorVisible(true);
      return;
    }

    setIsErrorVisible(false);
    handleSubmit(searchValue, shortFilmsOnly);
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__input-wrapper" onSubmit={onSubmit}>
          <img className='search__icon' src={searchIcon} alt="Поиск, иконка" />
          <input
            autoComplete='none'
            name='name'
            value={searchValue}
            onChange={(evt) => setSearchValue(evt.target.value)}
            type="text"
            className="search__input"
            placeholder='Фильм'
          />
          <button className="search__button hoverable">Найти</button>
          <p className={`search__error ${isErrorVisible ? '' : 'search__error_hidden'}`}>{EMPTY_SEARCH_INPUT}</p>
        </form>

        {width > 700 && (<>
          <Divider type={"vertical"} height={40} />

          <div className="search__toggle-wrapper">
            <Toggle active={shortFilmsOnly} onChange={handleToggleChange} />
            <span>Короткометражки</span>
          </div>
        </>)}

      </div>



      {width <= 700 && (
        <div className="search__toggle-wrapper search__toggle-wrapper_center">
          <Toggle active={shortFilmsOnly} onChange={handleToggleChange} />
          <span>Короткометражки</span>
        </div>
      )}

      <Divider type='horizontal' />

    </section>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  shortFilmsOnly: PropTypes.bool,
  setShortFilmsOnly: PropTypes.func,
};

export default SearchForm;