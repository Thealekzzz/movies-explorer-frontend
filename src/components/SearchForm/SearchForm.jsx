import './SearchForm.css';

import searchIcon from '../../images/search.svg';
import Toggle from '../Toggle/Toggle';
import { useState } from 'react';
import useWindowDimensions from '../../hooks/getWindowDimensions';
import Divider from '../Divider/Divider';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const SearchForm = () => {
  const { width } = useWindowDimensions();
  const { values, isValid, handleChange, handleBlur } = useFormAndValidation();
  
  const [shortFilmsOnly, setShortFilmsOnly] = useState(false);

  function handleToggleChange() {
    setShortFilmsOnly((prev) => !prev);
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__input-wrapper">
          <img className='search__icon' src={searchIcon} alt="Поиск, иконка" />
          <input
            required
            name='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            className="search__input"
            placeholder='Фильм'
          />
          <button className="search__button hoverable" disabled={!isValid}>Найти</button>
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

export default SearchForm;