import './style.css';
import statsCard from "../../assets/img/stats-preview-card.png";
import nftCard from "../../assets/img/nft-card.png";
import interactiveRating from "../../assets/img/interactive-rating.png";
import cardComponent from "../../assets/img/profile-card-component.png";
import orderSummary from "../../assets/img/order-summary.png";
import qrCode from "../../assets/img/qr-code.png";

const Projects = () => {
    return (
      <section className='content__box projects'>
        <h2>Projects</h2>
        <img src={statsCard} alt="img.jpg" className='box__img' />
        <img src={nftCard} alt="img.jpg" className='box__img' />
        <img src={interactiveRating} alt="img.jpg" className='box__img' />
        <img src={cardComponent} alt="img.jpg" className='box__img' />
        <img src={orderSummary} alt="img.jpg" className='box__img' />
        <img src={qrCode} alt="img.jpg" className='box__img' />
      </section>
    );
  }
  
  export default Projects;