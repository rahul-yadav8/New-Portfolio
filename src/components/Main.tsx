import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require("../assets/images/newProfile.jpeg")} alt="Profile pic of Rahul yadav" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rahul-yadav8" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/rahul-yadav-36bb27219/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:rahulyadav050597@gmail.com" target="_blank" rel="noreferrer">
              <EmailIcon />
            </a>
          </div>
          <h1>Rahul Yadav</h1>

          <p>
            2+ Year Commercial Experience | Frontend and Mobile Developer <br /> Next JS / React Js / React
            Native / Expo | Web + iOS + Android
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ahm3d19" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/usama-ahmed-989303264" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:ahmed.ua368@gmail.com" target="_blank" rel="noreferrer">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
