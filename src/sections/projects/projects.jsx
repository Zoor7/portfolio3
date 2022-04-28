import BtnMoreProjectsSvg from "../../components/btn-more-projects-svg/btn-more-projects-svg";
import ButtonProjectSvg from "../../components/button-project-svg/button-project-svg";
import workinprogress from "../../assets/workinprogress.png";
import "./projects.scss";

const Projects = () => {
  return (
    <div id="Projects" className="projects section container">
      <div className="projects-desc">
        <p className="section-title">Projects</p>
        <h2>Projects</h2>
      </div>
      <div className="projects-items">
        <div className="project1 project">
          <div className="project-header">
            <h3>BasketRank</h3>
            <ButtonProjectSvg link={"https://basketrank.herokuapp.com/"} />
          </div>
          <div className="project-img">
            <img src="https://i.ibb.co/jLh7kvZ/basket.png" alt="project-img" />
          </div>
        </div>
        <div className="project2 project">
          <div className="project-header">
            <h3>Work in Progress</h3>
            <ButtonProjectSvg link={""} />
          </div>
          <div className="project-img">
            <img src={workinprogress} alt="project-img" />
          </div>
        </div>
        <div className="project3 project">
          <div className="project-header">
            <h3>Aerolab challenge</h3>
            <ButtonProjectSvg
              link={"https://zoor7.github.io/aerolab-challenge-vite/"}
            />
          </div>
          <div className="project-img">
            <img src="https://i.ibb.co/3Cd7w0T/image.png" alt="project-img" />
          </div>
        </div>
      </div>
      <BtnMoreProjectsSvg />
    </div>
  );
};

export default Projects;
