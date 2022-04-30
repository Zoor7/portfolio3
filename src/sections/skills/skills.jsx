import { useState } from "react";

import SkillsPlayground from "../../components/skills-playground/skills-playground";
import "./skills.scss";

const Skills = () => {
  const [icon, setIcon] = useState("Click skills to show name");

  const handleIcon = (e) => {
    const icon = e.alt;
    setIcon(icon);
  };

  return (
    <div id="Skills" className="skills container section">
      <div className="skills-desc">
        <p className="section-title">Skills</p>
        <h2>Skills</h2>
      </div>
      <div className="skill-play">
        <SkillsPlayground handleIcon={handleIcon} />
      </div>
      <div className="skill-name">{icon}</div>
    </div>
  );
};

export default Skills;
