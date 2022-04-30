import { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./skills-playground.scss";

const SkillsPlayground = ({ handleIcon }) => {
  const [role, setRole] = useState("Frontend");
  const { width } = useWindowSize();

  const handleArrow = (arrow) => {
    const scrollDiv = document.getElementsByClassName("avatar-filter")[0];
    if (arrow === ">") {
      scrollDiv.scrollLeft += 150;
    }
    if (arrow === "<") {
      scrollDiv.scrollLeft -= 150;
    }
  };
  const isActive = (e) => {
    if (e === role) return "active";
    return "";
  };
  const handleRole = (e) => {
    setRole(e.innerText);
  };

  return (
    <div className="avatar">
      <div className="avatar-filter">
        {width < 600 && <span onClick={() => handleArrow("<")}>{"<"}</span>}

        <p
          className={isActive("Frontend")}
          onClick={(e) => handleRole(e.target)}
        >
          Frontend
        </p>
        <p
          className={isActive("Backend")}
          onClick={(e) => handleRole(e.target)}
        >
          Backend
        </p>
        <p className={isActive("Tools")} onClick={(e) => handleRole(e.target)}>
          Tools
        </p>
        <p
          className={isActive("Learning")}
          onClick={(e) => handleRole(e.target)}
        >
          Learning
        </p>
        {width < 600 && <span onClick={() => handleArrow(">")}>{">"}</span>}
      </div>
      {role === "Frontend" && (
        <div className="avatar-images">
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="Javascript"
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            alt="Sass"
          />
        </div>
      )}
      {role === "Backend" && (
        <div className="avatar-images">
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
            alt="MongoDB"
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="Express.js"
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt="PostgresSQL"
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            alt="Java"
          />
        </div>
      )}
      {role === "Tools" && (
        <div className="avatar-images">
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="Github"
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="Figma"
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="Visual Studio Code"
          />
        </div>
      )}
      {role === "Learning" && (
        <div className="avatar-images">
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            alt="Docker"
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
            alt="Jest, etc..."
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://www.svgrepo.com/show/306098/githubactions.svg"
            alt="Github actions"
          />
          <img
            onClick={(e) => handleIcon(e.target)}
            src="https://www.svgrepo.com/show/339568/systems-devops-cicd-pipeline.svg"
            alt="CI/CD"
          />
        </div>
      )}
    </div>
  );
};

export default SkillsPlayground;
