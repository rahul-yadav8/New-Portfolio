import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Next JS",
  "React JS",
  "React Native",
  "TypeScript / JavaScript",
  "HTML5, CSS3, SASS",
  "Vercel",
  "Tailwind / NativeWind",
  "Material UI",
  "Expo (EAS, OTA Updates)",
  "Redux / Redux-Thunk",
  "React Hooks",
  "Figma",
  "Xcode  / Android Studio / VS Code",
];

const labelsSecond = [
  "MongoDB",
  "Express.js",
  "Node.js",
  "Postman",
  "Firebase (Auth, Firestore)",
  "RESTful & GraphQL APIs",
];

function Skills() {
  return (
    <div className="container" id="skills">
      <div className="skills-container">
        <h1>Skill Set</h1>

        <div className="skills-grid">
          {/* Frontend & Mobile Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend & Mobile Development</h3>
            <p>
              I design and build high-performance web and mobile applications for iOS, Android, and the web
              using React Native, ReactJS, Next.js, and Expo. I focus on creating responsive, user-friendly
              interfaces with clean, reusable components while optimizing performance and scalability across
              platforms.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
            <h3>Backend Development (Node.js)</h3>
            <p>
              I build secure, scalable backend systems using Node.js, Express, and REST APIs. My experience
              includes designing authentication systems, handling databases, integrating third-party services,
              and optimizing server performance to support modern web and mobile applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
