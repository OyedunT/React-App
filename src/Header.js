import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="sub-container1">
        <img className="imgs" src={require("./images/facebook.png")} alt="" />
        <img className="imgs1" src={require("./images/twitter.png")} alt="" />
        <img className="imgs2" src={require("./images/linkedin.png")} alt="" />
      </div>
      <div className="sub-container2">
        <h1 className="study">
          Study to <br /> become a <br></br> global talent
        </h1>
        <h6 className="tech">
          Learn new tech skills using a world-class curriculum from top<br></br>{" "}
          industry experts in an accredited institution.
        </h6>
        <button className="btn btn-primary btn-lg">
          <span className="start">Start Now</span>
          <span className="arrow-icon">→</span>
        </button>
      </div>
      <div className="sub-container3">
        <img
          className="imgs3"
          src={require("./images/bg-header-sqi-1.png")}
          alt=""
        />
      </div>
      <div className="widget-container">
        <div
          class="btn_popup"
          style={{ left: "30px", right: "unset", bottom: "30px;" }}
        >
          <div
            class="btn_popup_txt"
            style={{ display: "block", right: "unset", width: "180px" }}
          >
            <span>
              Need Help? <strong>Chat with us</strong>
            </span>
          </div>
          <div
            class="btn_popup_icon"
            style={{ background: "rgb(45, 183, 66)" }}
          ></div>
        </div>
      </div>
      <div
        class="popup_chat_box"
        
      >
        <img
          className="img4"
          src={require("./images/whatapp.png")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
