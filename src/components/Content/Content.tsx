import './style.css';


import Hero from '../Hero/Hero';
import Social from '../Social/Social';
import Projects from '../Projects/Projects';

const Content = () => {
    return (
        <div className='content__container'>
            <div className="content__grid">
            <Hero />
            <Social />
            <Projects />
            <div className="content__box">
                
            </div>
            <div className="content__box">
                
            </div>
            <div className="content__box">
                
            </div>
            <div className="content__box">
                
            </div>
            <div className="content__box">
                
            </div>
            <div className="content__box">
                
            </div>
            </div>
        </div>
    )
}

export default Content;