import './style.css';
import photo from "../../assets/img/foto-raphael.png";

const Hero = () => {
    return (
        <section className="content__box hero">
            <div className='hero__logo'>
                <div>
                    <div className="hero__border">
                        <img src={photo} alt="Andrews Logo" title="Andrews Logo" className="hero__perfil" />
                    </div>
                </div>
                <div className="hero__name">
                    <h1 className="hero__title">Raphael Andrews</h1>
                    <h2 className="hero__subtitle">Web Developer</h2>
                </div>
            </div>
            <p className="hero__text">
                &#x1F44B; Hello, I'm Raphael and I like to build things on the internet.
            </p>

            <a download href="../../assets/pdf/cv-raphael-andrews.pdf" className='hero__btn'>&#x1F4D1; Download CV</a>
            <a href="mailto:raphaelandrews95@gmail.com" target="_blank" className='hero__btn'>&#x1F4EB; Contact</a>
        </section>
    );
}

export default Hero;