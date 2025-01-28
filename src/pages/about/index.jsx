import React from "react";
import PageHeaderContent from "../../components/header";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { FaReact,FaUserAlt } from "react-icons/fa";
import { AiOutlineRobot, AiOutlineBarChart } from "react-icons/ai";
import { MdDataUsage } from "react-icons/md";
import { IoIosAnalytics } from "react-icons/io"; 

import './styles.scss'

 

const aboutContent = `I am a MERN Stack Developer with 2 years of professional experience, 
specializing in building scalable and efficient web applications.
 Alongside my expertise in full-stack development,
  I hold a postgraduate degree in Big Data Analytics and Artificial Intelligence,
   which has fueled my passion for data-driven solutions and AI-powered applications. 

With a solid foundation in programming and a continuous learning mindset,
 I am eager to bridge the gap between web development and advanced data technologies.
  I strive to deliver innovative, high-quality solutions that not only meet business objectives
   but also push the boundaries of what's possible with modern technology.`;


const personalInfo = [
  { label: "Name", value: "Suprim Thapa" },
  { label: "Age", value: "27" },
  { label: "Address", value: "Barrie, ON" },
  { label: "Email", value: "suprimthapa11@gmail.com" },
  { label: "Contact No", value: "7058176797" },
];

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<FaUserAlt size={39} />}
      />

      {/* About Content Animation */}
      <div className="about_content">
        <div className="about_content_personalWrapper">
        <Animate
          play
          duration={1.5}
          start={{ opacity: 0, transform: "translateX(-100px)" }} // Slide in from left
          end={{ opacity: 1, transform: "translateX(0)" }} // Settle into position
        >
          <h3>Full Stack Developer | AI & Big Data Specialist</h3>
          <p>{aboutContent}</p>
        </Animate>

        {/* Personal Information Animation */}
        <Animate
          play
          duration={1.5}
          delay={0.5} // Delay to create staggered animation
          start={{ opacity: 0, transform: "translateY(50px)" }} // Slide in from bottom
          end={{ opacity: 1, transform: "translateY(0)" }} // Settle into position
        >
          <h3 personalInformationHeaderText >Personal Information</h3>
          <ul>
            {personalInfo.map((info, index) => (
              <Animate
                key={index}
                play
                duration={1.5}
                delay={index * 0.3} // Delay for staggered items
                start={{ opacity: 0, transform: "translateX(50px)" }} // Slide in from right
                end={{ opacity: 1, transform: "translateX(0)" }} // Settle into position
              >
                <li>
                  <strong>{info.label}:</strong> {info.value}
                </li>
              </Animate>
            ))}
          </ul>
        </Animate>
        </div>
        <div className="about_content_serviceWrapper">
        <div className="about_content_serviceWrapper_innerContent">
            <div><FaReact size={60}color="var(--secondary-color)"/></div>
            <div><AiOutlineRobot size={60}color="var(--secondary-color)"/></div>
            <div><AiOutlineBarChart size={60}color="var(--secondary-color)"/></div>
            <div><IoIosAnalytics size={60}color="var(--secondary-color)"/></div>
        </div>
        </div>

       
      </div>
    </section>
  );
};

export default About;
