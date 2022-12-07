import './style.css';
import statsCard from "../../assets/img/stats-preview-card.png";
import nftCard from "../../assets/img/nft-card.png";
import interactiveRating from "../../assets/img/interactive-rating.png";
import cardComponent from "../../assets/img/profile-card-component.png";
import orderSummary from "../../assets/img/order-summary.png";
import qrCode from "../../assets/img/qr-code.png";

import Hero from '../Hero/Hero';

const Content = () => {
    return (
        <div className='content__container'>
            <div className="content__gallery">
                <div className="content__box" id='box-1'>
                <Hero />
                </div>
                <div className="content__box">
                    <img src={statsCard} alt="img.jpg" className='box__img' />
                </div>
                <div className="content__box">
                    <img src={nftCard} alt="img.jpg" className='box__img' />
                </div>
                <div className="content__box">
                    <img src={interactiveRating} alt="img.jpg" className='box__img' />
                </div>
                <div className="content__box">
                    <img src={cardComponent} alt="img.jpg" className='box__img' />
                </div>
                <div className="content__box">
                    <img src={orderSummary} alt="img.jpg" className='box__img' />
                </div>
                <div className="content__box">
                    <img src={qrCode} alt="img.jpg" className='box__img' />
                    <div className="content__overlay">
                        <div className="content__details">
                            <h3 className="content__title">
                                <a href="#">Your content__Title</a>
                            </h3>
                            <span className="content__category">
                                <a href="#">content__Category</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;