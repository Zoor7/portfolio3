import "./header.scss";
import zoro from "../../assets/zoropray.png";
import ThemeSwitch from "../../components/ThemeSwitch/ThemeSwitch";

const Header = ({ theme, switchTheme }) => {
  return (
    <div className="header container">
      <div className="logo">
        <img src={zoro} alt="zoro" />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="https://zoor7.github.io/portfolio3/#Skills">Skills</a>
          </li>
          <li>
            <a href="https://zoor7.github.io/portfolio3/#Experience">
              Experience
            </a>
          </li>
          <li>
            <a href="https://zoor7.github.io/portfolio3/#Projects">Projects</a>
          </li>
          <li>
            <a href="https://zoor7.github.io/portfolio3/#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <ThemeSwitch theme={theme} switchTheme={switchTheme} />
    </div>
  );
};

export default Header;
