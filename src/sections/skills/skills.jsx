import { useState } from "react";

import SkillsPlayground from "../../components/skills-playground/skills-playground";
import SkillsSvg from "../../components/skills-svg/skills-svg";
import "./skills.scss";

const Skills = () => {
  const [icon, setIcon] = useState("");

  const onHover = () => {
    const plant = document.getElementsByClassName("plant");
    plant[0].setAttribute("class", "plant plant-in");
  };
  const onHoverOut = () => {
    const plant = document.getElementsByClassName("plant");
    plant[0].setAttribute("class", "plant plant-out");
  };

  const handleIcon = (e) => {
    const icon = e.alt;
    setIcon(icon);
    const skillDesc = document.getElementsByClassName("skill-desc");
    skillDesc[0].setAttribute("class", "skill-desc");
    setTimeout(() => {
      skillDesc[0].setAttribute("class", "skill-desc skill-desc-animation");
    }, 100);
  };

  return (
    <div
      id="Skills"
      className="skills container section"
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
    >
      <div className="skills-desc">
        <p className="section-title">Skills</p>
        <h2>Skills</h2>
        <SkillsPlayground handleIcon={handleIcon} />
      </div>
      <SkillsSvg icon={icon} />
    </div>
  );
};

export default Skills;
