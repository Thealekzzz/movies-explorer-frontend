import './Techs.css';

const Techs = () => {
  return (
    <section className="section section_padding_small section_bg_lighter techs">
      <div className="container">
        <div className="section__title-wrapper">
          <h2 className="section__title">Технологии</h2>
        </div>

        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

        <ul className="techs__tech-list">
          <li className="techs__tech">HTML</li>
          <li className="techs__tech">CSS</li>
          <li className="techs__tech">JS</li>
          <li className="techs__tech">React</li>
          <li className="techs__tech">Git</li>
          <li className="techs__tech">Express.js</li>
          <li className="techs__tech">MongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;