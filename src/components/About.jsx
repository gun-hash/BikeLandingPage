import React, { useState } from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Modal from './Modal';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    window.open('https://www.ktm.com/en-np/find-a-dealer.html')
  };

  const handleVideoButton = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Precision and Power: Racing Spirit</h1>
        <p className="primary-text">
          Purpose-built and expertly engineered, the 2024 KTM 450 RALLY REPLICA
          is ready to take on the world's toughest multi-stage cross-country
          races.
        </p>
        <p className="primary-text">
          Drawing on the experience of multiple victories in the Rally arena,
          the 2024 KTM 450 RALLY REPLICA remains the most READY TO RACE Rally
          bike on the market.
        </p>
        <div className="about-buttons-container">
          <button onClick={handleButtonClick} className="secondary-button">
            Learn More
          </button>
          <button onClick={handleVideoButton} className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default About;
