import useLocalStorage from "use-local-storage";

import AboutMe from "./sections/about-me/about-me";
import Header from "./sections/header/header";
import Skills from "./sections/skills/skills";
import Experience from "./sections/experience/experience";
import Contact from "./sections/contact/contact";

import "./App.css";
import Projects from "./sections/projects/projects";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} switchTheme={switchTheme} />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <a className="btn-to-top" href="#top">
        <svg
          viewBox="0 0 146 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M75.1213 38.8787C73.9497 37.7071 72.0503 37.7071 70.8787 38.8787L51.7868 57.9706C50.6152 59.1421 50.6152 61.0416 51.7868 62.2132C52.9584 63.3848 54.8579 63.3848 56.0294 62.2132L73 45.2426L89.9706 62.2132C91.1421 63.3848 93.0416 63.3848 94.2132 62.2132C95.3848 61.0416 95.3848 59.1421 94.2132 57.9706L75.1213 38.8787ZM76 82L76 41H70L70 82H76Z"
            fill="#84DF9A"
          />
        </svg>
      </a>
    </div>
  );
}

export default App;
