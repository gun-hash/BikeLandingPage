import React from "react";
import EMS from "../assets/ems.png";
import Transmission from "../assets/transmission.png";
import CylinderHead from "../assets/cylinderhead.png";

const Offer = () => {
  const workInfoData = [
    {
      image: EMS,
      title: "EMS",
      text: "The state-of-the-art Keihin engine management system (EMS) features a 44 mm throttle body, for instant response and consistent performance due to its unique injector position.",
    },
    {
      image: Transmission,
      title: "Transmission",
      text: "The transmission has the exact same ratios as the Dakar Rally championship winning machines of the Red Bull KTM Factory Racing team.",
    },
    {
      image: CylinderHead,
      title: "Cylinder Head",
      text: "The single overhead camshaft (SOHC) head was constructed from premium-quality materials, using precise manufacturing and tolerances to deliver leading performance for longer periods.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Offer</p>
        <h1 className="primary-heading">What It Offers</h1>
        <p className="primary-text">
          The 2024 KTM 450 RALLY REPLICA remains the most READY TO RACE Rally
          bike on the market.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
