import { useEffect, useState } from "react";
import zoro from "../../assets/zoropray.png";
import ThemeSwitch from "../../components/ThemeSwitch/ThemeSwitch";
import { useWindowSize } from "../../hooks/useWindowSize";

import "./header.scss";

const Header = ({ theme, switchTheme }) => {
  const [closed, setClosed] = useState(true);
  const { width } = useWindowSize();

  const handleMenu = () => {
    closed ? setClosed(false) : setClosed(true);
  };

  useEffect(() => {
    if (width > 600) {
      setClosed(true);
    }
  }, [width]);

  if (width < 600) {
    return (
      <div className={`container `}>
        <div className="mobile-header">
          <div className="logo">
            <img src={zoro} alt="zoro " />
          </div>
          <div
            className={`burger-menu-svg ${
              closed ? "" : "burger-menu-svg-open"
            }`}
            onClick={handleMenu}
          >
            <svg viewBox="0 0 100 80" width="40" height="40">
              <g className={`rect rect1 ${closed ? "" : "closed-burguer-1"}`}>
                <rect width="100" height="20"></rect>
              </g>
              <g className={`rect rect2 ${closed ? "" : "closed-burguer-2"}`}>
                <rect y="30" width="100" height="20"></rect>
              </g>
              <g className={`rect rect3 ${closed ? "" : "closed-burguer-3"}`}>
                <rect y="60" width="100" height="20"></rect>
              </g>
            </svg>
          </div>
        </div>
        <div className={`header ${closed ? "closed" : "open"}`}>
          <div className="navbar">
            <ul>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a href="#Experience">Experience</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <ThemeSwitch theme={theme} switchTheme={switchTheme} />
        </div>
      </div>
    );
  }
  return (
    <div className={`header container`}>
      <div className="logo">
        <img src={zoro} alt="zoro " />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <ThemeSwitch theme={theme} switchTheme={switchTheme} />
    </div>
  );
};

export default Header;
