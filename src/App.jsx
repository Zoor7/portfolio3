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
    </div>
  );
}

export default App;
