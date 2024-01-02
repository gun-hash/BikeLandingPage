import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div id="testimonials" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Riding the 2024 KTM 450 RALLY REPLICA is like dancing through dirt and
          conquering trails effortlessly.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          The 2024 KTM 450 RALLY REPLICA is a total game-changer! It's not just
          a bike; it's like having a trusty sidekick on the trails. The way it
          moves through rough terrain is pure magic. KTM nailed it with a mix of
          power, style, and a serious passion for off-road fun. Love it!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
