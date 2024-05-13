import React from "react";

const Programmes = () => {
  return (
    <div className="program-container">
      <span className="change">Start here. Change the world.</span>
      <div className="P-container">
        <div className="p-card1">
          <img
            src={require("./images/college1.jpg")}
            className="card-img-top grayscale"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">National Innovative Diploma (NID)</h4>
            <p className="card-text">
              The National Innovation Diploma (NID) <br />
              offered at SQI College of ICT is a 2 year
              <br /> approved academic program of the National
              <br /> Board for Technical Education (NBTE).
            </p>
            <a href="#" className="learn">
              Learn More
            </a>
          </div>
        </div>
        <div className="p-card2">
          <img
            src={require("./images/prof.jpg")}
            className="card-img-top grayscale"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">
              Professional Diploma
              <br />
              Certificate
            </h4>
            <p className="card-text">
              The Professional Certificate Program is 1 year
              <br />
              practical training with wide range of edge-
              <br />
              cutting IT certification courses offered in SQI
              <br />
              College of ICT to people who want to <br />
              advance their career.
            </p>
            <a href="#" className="learn">
              Learn More
            </a>
          </div>
        </div>
        <div className="p-card3">
          <img
            src={require("./images/certificate.jpg")}
            className="card-img-top grayscale"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">Certificate Program</h4>
            <p className="card-text">
              The Certificate Program is a short-term <br />
              training, 2 weeks to 6 months with a wide
              <br /> range of edge-cutting IT certification courses <br />
              offered in SQI College of ICT to people who <br /> want to advance
              their careers.
            </p>
            <a href="#" className="learn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
