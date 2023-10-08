import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section__title-wrapper">
          <h2 className="section__title">О проекте</h2>
        </div>

        <div className="about-project__info-block">
          <div className="about-project__info-block-item">
            <h3 className="about-project__info-header">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__info-text">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>

          </div>
          <div className="about-project__info-block-item">
            <h3 className="about-project__info-header">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__info-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>

          </div>
        </div>

        <div className="about-project__timing-block">
          <div className="about-project__timing about-project__timing_colored">1 неделя</div>
          <div className="about-project__timing">4 недели</div>
          <p className="about-project__timing-label">Back-end</p>
          <p className="about-project__timing-label">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;