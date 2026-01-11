import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="Experience">
      <div className="items-container">
        <h1>Industry Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="June 2024 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend & Mobile Development</h3>
            <h4 className="vertical-timeline-element-subtitle">DTSkill.ai</h4>
            <p>
              <li className="timeline-item">
                Delivered 5+ contract projects (React Native / Next.js / React js) for clients in AI, Employee
                management system for company, vista ai etc.
              </li>
              <li className="timeline-item">
                Migrated legacy web apps to Next.js, improving performance by 35%
              </li>
              <li className="timeline-item">
                Collaborating with Senior Team Members & Designers in creating secure and reliable software
                solutions
              </li>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2023 - Oct 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer Trainee / Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Digikull Pvt. Limited</h4>

            <ul>
              <li className="timeline-item">
                Worked as a Frontend Developer Trainee, contributing to the development and deployment of
                multiple web and mobile applications using React Native and Expo.
              </li>

              <li className="timeline-item">
                Developed reusable UI components and implemented responsive designs for iOS and Android
                platforms.
              </li>
              <li className="timeline-item">
                Collaborated with senior developers, designers, and stakeholders to convert requirements into
                functional and user-friendly interfaces.
              </li>
              <li className="timeline-item">
                Gained hands-on experience working with modern development tools such as VS Code, Android
                Studio, and Xcode while following team coding standards.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
