import React from 'react';
import PageHeaderContent from '../../components/header';
import { BsInfoCircleFill } from 'react-icons/bs';
import './styles.scss';
import { GiSkills } from "react-icons/gi";

const sections = [
  {
    title: "Software Development",
    skills: [
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Node.js", level: 85 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 85 },

    ],
  },
  {
    title: "Big Data Analytics",
    skills: [
      { name: "Hadoop", level: 70 },
      { name: "PowerBI", level: 80 },
      { name: "Tableau", level: 85 },
      { name: "Excel", level: 80 },
      { name: "Vm's", level: 80 },

    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 78 },
      { name: "OpenAI API", level: 85 },
      { name: "Keras", level: 75 },
      {name:"scikit-learn", level :80},
      
    ],
  },
];

const Skills = () => {
  return (
    <section id="Skills" className="Skills">
      <div className="page-header">
        <PageHeaderContent headerText="Skills" icon={<GiSkills size={39} />} />
      </div>
      <div className="skills-sections">
        {sections.map((section, index) => (
          <div key={index} className="skills-category">
            <h2>{section.title}</h2>
            <div className="skills-list">
              {section.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-card">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ width: `${skill.level}%` }} />
                  </div>
                  <div className="skill-level">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
