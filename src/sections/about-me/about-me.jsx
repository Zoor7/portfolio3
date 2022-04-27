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
            Hi! I'm Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Eum perferendis doloribus numquam quaerat incidunt in facere placeat
            qui, delectus voluptate.{" "}
          </p>
        </div>
      </div>
      <AboutMeSvg />
    </div>
  );
};

export default AboutMe;
