import ExperienceSvg from "../../components/experience-svg/experience-svg";
import "./experience.scss";

const Experience = () => {
  const onHover = () => {
    const papers = document.getElementsByClassName("paper");
    const plant = document.getElementsByClassName("plant");

    papers[0].setAttribute("class", "left-papers paper papers-in");
    papers[1].setAttribute("class", "right-paper paper papers-in");
    plant[1].setAttribute("class", "plant plant-in");
  };
  const onHoverOut = () => {
    const papers = document.getElementsByClassName("paper");
    const plant = document.getElementsByClassName("plant");
    papers[0].setAttribute("class", "left-papers paper papers-out");
    papers[1].setAttribute("class", "right-paper paper papers-out");
    plant[1].setAttribute("class", "plant plant-out");
  };
  return (
    <div
      id="Experience"
      className="experience section container"
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
    >
      <div className="experience-desc">
        <p className="section-title">Experience</p>
        <h2>Experience {`&`} Studies</h2>
        <div className="studies">
          <h3>Studies</h3>
          <ul>
            <li>
              <p>2019-2021</p>
              <div>
                <p>Web development</p>
                <p>Insitut tecnològic Barcelona</p>
              </div>
            </li>
            <li>
              <p>Reading</p>
              <div>
                <p>Fullstack bootcamp</p>
                <p>
                  <a href="https://fullstackopen.com/en/">
                    https://fullstackopen.com/en/
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-jobs">
        <h3>Experience</h3>
        <ul>
          <li>
            <p>2021-2021</p>
            <div>
              <p>Frontend (Internship) </p>
              <p>Grupo Hostienda</p>
            </div>
          </li>
          <li>
            <p>????-????</p>
            <div>
              <p>Insert role</p>
              <p>You?</p>
            </div>
          </li>
        </ul>
      </div>
      <ExperienceSvg />
    </div>
  );
};

export default Experience;
