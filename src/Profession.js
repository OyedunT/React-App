import React from "react";

const Profession = () => {
  return (
    <div className="prof-container">
      <div className="sub_prof">
        <h1 className="prof">Our Top Courses</h1>
        <span className="prof_1">
          Take a look at some of our popular courses
        </span>
        <a href="#" className="prof_2">
          View all Courses
        </a>
      </div>
      <div className="prof_3">
        <div className="p-card4">
          <img
            src={require("./images/software-engineering.webp")}
            class="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title1">Software Engineering</h5>
            <p className="card-text">
              Software Engineering is one of the most in-demand jobs across the
              globe today. Software Engineers are also known as programmers,
              developers or coders. They are the ones behind all the apps and
              software you use today either on your phone or computer within
              your browser. Software such as banking apps, booking apps, mailing
              apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps
              (e.g Twitter, Facebook) and many more are created by software
              engineers.
            </p>
            <a href="#" className="learn1">
              Learn More
            </a>
          </div>
        </div>
        </div>
      <div className="prof_4">
        <div className="p-card4">
          <img
            src={require("./images/product.jpg")}
            class="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title1">UI/UX – Product Design</h5>
            <p className="card-text">
              More than ever before individuals and businesses are relying on
              digital products and services. From online meeting tools to
              finance, from e-commerce platforms to healthcare and food apps.
              Making an intuitive digital product design is even more import at
              this time as it determines the overall experience of the users.
              Here, you’ll build your product design skillset from the bottom up
              with lessons, mentorship sessions, and career advice from our
              design professionals.
            </p>
            <a href="#" className="learn1">
              Learn More
            </a>
          </div>
        </div>
        </div>
      <div className="prof_5">
        <div className="p-card4">
          <img
            src={require("./images/DATA-SQI.jpg")}
            class="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title1">Data Science & Analysis</h5>
            <p className="card-text">
              Data Science & Analysis The eruption of data is transforming
              indiviuals and businesses. Companies either big or small are now
              expecting their business decisions to be based on data-led
              insight. Data specialists have a tremendous impact on business
              strategies and marketing tactics because everyone now depends on
              data to formulate improved strategies for the future of their
              companies.
            </p>
            <a href="#" className="learn1">
              Learn More
            </a>
          </div>
        </div>
        </div>
      <div className="prof_6">
        <div className="p-card4">
          <img
            src={require("./images/digital-literacy.jpg")}
            class="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title1">Digital Literacy</h5>
            <p className="card-text">
              This course is designed to prepare you for success in a modern
              world full of computers—not only the traditional computers such as
              desktop and notebook PCs but also computers that you interact with
              in other places too, like your bank’s ATM or your employer’s
              computerized cash register. In this course, you will learn about
              the technologies that drive our computerized society, including
              the Internet and local area networks (LANs). Taking this course
              will help you become a digitally literate person—that is, someone
              who understands how computer technology fits into our modern
              society and knows how to navigate a variety of computing
              environments.
            </p>
            <a href="#" className="learn1">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profession;
