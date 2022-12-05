import './style.css';
import photo from "../../assets/img/foto-raphael.png";

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero__container'>
                <a href="#home"
                    aria-label="Back to home"
                    className='nav__logo'
                >
                    <div className="about__border">

                        <div className="about__perfil">
                            <img src={photo} alt="Andrews Logo" title="Andrews Logo"></img>
                        </div>
                    </div>
                    <div className="nav__name">
                        <div className="nav__title">Raphael Andrews</div>
                        <span className="nav__slash">|</span>
                        <div className="nav__subtitle">Web Developer</div>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Hero;