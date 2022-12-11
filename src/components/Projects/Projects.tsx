import { useState } from 'react';
import './style.css';

import statsCard from "../../assets/img/stats-preview-card.png";
import nftCard from "../../assets/img/nft-card.png";
import interactiveRating from "../../assets/img/interactive-rating.png";
import cardComponent from "../../assets/img/profile-card-component.png";
import orderSummary from "../../assets/img/order-summary.png";
import qrCode from "../../assets/img/qr-code.png";

const Projects = () => {
  const [isFileOne, setIsFileOne] = useState(false);
  const [isFileTwo, setIsFileTwo] = useState(false);
  const [isFileThree, setIsFileThree] = useState(false);
  const [isFileFour, setIsFileFour] = useState(false);
  const [isFileFive, setIsFileFive] = useState(false);
  const [isFileSix, setIsFileSix] = useState(false);

  const handleFileOne = () => {
    setIsFileOne((current) => !current);
  };

  const handleFileTwo = () => {
    setIsFileTwo((current) => !current);
  };

  const handleFileThree = () => {
    setIsFileThree((current) => !current);
  };

  const handleFileFour = () => {
    setIsFileFour((current) => !current);
  };

  const handleFileFive = () => {
    setIsFileFive((current) => !current);
  };

  const handleFileSix = () => {
    setIsFileSix((current) => !current);
  };

  return (
    <section className='content__box projects'>
      <h2>Projects</h2>
      <p className='projects__text' onClick={(e) => handleFileOne()}>Stats Preview Card <i className='bx bx-message-square-add' ></i></p>
      {isFileOne && (
        <img src={statsCard} alt="img.jpg" className='box__img' />
      )}
      <p className='projects__text' onClick={(e) => handleFileTwo()}>NFT Card <i className='bx bx-message-square-add' ></i></p>
      {isFileTwo && (
        <img src={nftCard} alt="img.jpg" className='box__img' />
      )}
      <p className='projects__text' onClick={(e) => handleFileThree()}>Interactive Rating <i className='bx bx-message-square-add' ></i></p>
      {isFileThree && (
        <img src={interactiveRating} alt="img.jpg" className='box__img' />
      )}
      <p className='projects__text' onClick={(e) => handleFileFour()}>Profile Card Component <i className='bx bx-message-square-add' ></i></p>
      {isFileFour && (
        <img src={cardComponent} alt="img.jpg" className='box__img' />
      )}
      <p className='projects__text' onClick={(e) => handleFileFive()}>Order Summary <i className='bx bx-message-square-add' ></i></p>
      {isFileFive && (
        <img src={orderSummary} alt="img.jpg" className='box__img' />
      )}
      <p className='projects__text' onClick={(e) => handleFileSix()}>QR Code <i className='bx bx-message-square-add' ></i></p>
      {isFileSix && (
        <img src={qrCode} alt="img.jpg" className='box__img' />
      )}
    </section>
  );
}

export default Projects;