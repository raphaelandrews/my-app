import './style.css'
import photo from '../../assets/img/foto-raphael.png'
import react from '../../assets/img/react-icon.svg'
import ts from '../../assets/img/ts-icon.svg'
import js from '../../assets/img/js-icon.svg'
import css from '../../assets/img/css-icon.svg'

const About = () => {
  return (
    <section className='about'>
      <div className="container">
        <div className="about__subtitle">My Intro</div>
        <h2 className="about__title">About Me</h2>
        <div className='row'>
          <div className="col">
            <div className='about__img'>
              <img src={photo} alt="Raphael Andrews" title="Raphael Andrews" />
            </div>
          </div>
          <div className='col'>
            <p className="about__text">
              My name is Raphael Andrews and I'm currently studying Technology in
              Internet Systems and have some other certifications.
            </p>
            <p className="about__text">
              I like both technology and design, so I have some abilities in
              design tools. Also I like a little bit of Dota, Jinjer and
              Notion.
            </p>
            <p className="about__text">
              Below you can check my projects, certifications and the technologies
              I work with.
            </p>

            <div className='about__skills'>Main Skills</div>
            <div className='about__techs'>
              <div className='about__tech'>
                <img src={react} alt="React Logo" title='React Logo' className='tech__logo' />
              </div>
              <div className='about__tech'>
                <img src={ts} alt="React Logo" title='TS Logo' className='tech__logo' />
              </div>
              <div className='about__tech'>
                <img src={js} alt="React Logo" title='JS Logo' className='tech__logo' />
              </div>
              <div className='about__tech'>
                <img src={css} alt="React Logo" title='CSS Logo' className='tech__logo' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About