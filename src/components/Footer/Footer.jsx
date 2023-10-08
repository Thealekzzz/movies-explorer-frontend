import './Footer.css';

const Footer = () => {
  return (
    <footer className='section footer'>
      <div className="container">
        <p className="footer__text">Учебный проект Яндекс.Практикум &#10005;&nbsp;BeatFilm. &#10005;&nbsp;<a href='https://t.me/kznv_alex' className='hoverable'>Алексей Кузнецов</a></p>

        <div className="footer__bottom">
          <div className="footer__copyright">© 2023</div>

          <ul className="footer__links">
            <li className="footer__link hoverable">
              <a href="#">Яндекс.Практикум</a>
            </li>
            <li className="footer__link hoverable">
              <a href="#">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;