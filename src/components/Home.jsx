import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/about-background-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {

  const handleClick = () => {
    window.open('https://www.ktm.com/en-np/find-a-dealer.html')
  }
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="img" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">2024 KTM 450 RALLY REPLICA </h1>
          <p className="primary-text">
          High-Performance Cross-Country Racing Motorcycle. Crafted with input from successful KTM racers and a history of rally victories. Top-Tier READY TO RACE Rally Bike.          </p>
          <button onClick={handleClick} className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
