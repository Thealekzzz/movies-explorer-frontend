// import promoImage from '../../images/promo.svg';
import './Promo.css';

const Promo = () => {
  return (
    <div className="promo">
      <div className="container promo__container">
        <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
        {/* <img src={promoImage} alt="" className="promo__image" /> */}
      </div>
    </div>
  );
};

export default Promo;