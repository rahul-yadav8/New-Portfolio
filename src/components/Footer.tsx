import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/rahul-yadav8" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/rahul-yadav-36bb27219/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a href="mailto:ahmed.ua368@gmail.com" target="_blank" rel="noreferrer">
          <EmailIcon />
        </a>
      </div>
      <p>
        A portfolio designed & built by{" "}
        <a href="https://github.com/ahm3d19" target="_blank" rel="noreferrer">
          Usama Ahmed
        </a>{" "}
      </p>
    </footer>
  );
}

export default Footer;
