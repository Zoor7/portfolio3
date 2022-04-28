import AboutMeSvg from "../../components/about-me-svg/about-me-svg";
import "./about-me.scss";
const AboutMe = () => {
  return (
    <div className="aboutMe section container">
      <div className="about">
        <p className="section-title">Hello!</p>
        <h1>Hector Llorca</h1>
        <h3>Junior Full-stack</h3>
        <div className="about-desc">
          <hr />
          <p>
            Hi! I'm Héctor. I like to spend time creating things on the pc, I
            also like to learn and teach to improve as a developer.
          </p>
        </div>
      </div>
      <AboutMeSvg />
    </div>
  );
};

export default AboutMe;
