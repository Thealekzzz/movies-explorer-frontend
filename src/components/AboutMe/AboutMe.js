import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="section about-me">
      {/* Задать контейнеру padding 14px по бокам */}
      <div className="container about-me__container"> 
        <div className="section__title-wrapper">
          <h2 className="section__title">Студент</h2>
        </div>

        <div className="about-me__info">
          <div className="about-me__text-block">
            <h3 className="about-me__title">Алексей</h3>
            <p className="about-me__subtitle">Фулл-стек разработчик, 22 года</p>
            <p className="about-me__text">
              Родился и живу в Санкт-Петербурге. Учился на инженера в Университете ИТМО, но на втором курсе заинетерсовался фронтенд разработкой. Сделал множество проектов для портфолио и автоматизации личных задач. С осени 2022 являюсь фулл-стек разработчиком сервиса для автомазизации вычислений в сельском хозяйстве.
            </p>

            <a href="https://github.com/Thealekzzz" className="about-me__link hoverable">Github</a>
          </div>

          <img src="https://sun9-43.userapi.com/impg/hjHDCtiz252auBYaPuJOqIH7Jv5gH3viG_vpdw/_IfKIStIVes.jpg?size=960x1280&quality=95&sign=468aad0ec23325aeb0087122cb78c7c5&type=album" alt="Фото студента на фоне Московского государственного университета" className="about-me__image" />
        </div>


      </div>
    </section>
  );
};

export default AboutMe;