import './Portfolio.css';

import arrowIcon from '../../images/arrow.svg';

const Portfolio = () => {
  return (
    <section className='section portfolio'>
      <div className="container portfolio__container">
        <h2 className="section__small-title">Портфолио</h2>

        <ul className="portfolio__links">
          <li className="portfolio__link-item">
            <a href="#" className="portfolio__link hoverable">
              <span className="portfolio__link-name">Статичный сайт</span>
              <img className="portfolio__link-image" src={arrowIcon} alt="Перейти, ссылка" />
            </a>
          </li>
          <li className="portfolio__link-item">
            <a href="#" className="portfolio__link hoverable">
              <span className="portfolio__link-name">Адаптивный сайт</span>
              <img className="portfolio__link-image" src={arrowIcon} alt="Перейти, ссылка" />
            </a>
          </li>
          <li className="portfolio__link-item">
            <a href="#" className="portfolio__link hoverable">
              <span className="portfolio__link-name">Одностраничное приложение</span>
              <img className="portfolio__link-image" src={arrowIcon} alt="Перейти, ссылка" />
            </a>
          </li>
        </ul>
      </div>

    </section>
  );
};

export default Portfolio;