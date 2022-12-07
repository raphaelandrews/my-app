import './style.css';
import photo from "../../assets/img/foto-raphael.png";

const Hero = () => {
    return (
        <section className="hero">
            <div className='hero__logo'>
                <div>
                    <div className="hero__border">
                        <img src={photo} alt="Andrews Logo" title="Andrews Logo" className="hero__perfil" />
                    </div>
                </div>
                <div className="hero__name">
                    <div className="hero__title">Andrews</div>
                    <div className="hero__subtitle">Developer</div>
                </div>
            </div>
            <p className="hero__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur natus neque doloribus
            </p>

            <div className='hero__btns'>
                <a href="" className='hero__btn'>Info</a>
                <a href="" className='hero__btn'>Download CV</a>
                <a href="" className='hero__btn'>Contact</a>
            </div>
        </section>
    );
}

export default Hero;