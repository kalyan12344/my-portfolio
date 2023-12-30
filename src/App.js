// import logo from "./logo.svg";
import "./App.css";
import Abouts from "./Components/about.js";
import Home from "./Components/home.js";
import Skills from "./Components/skills.js";

import Navbar from "./Components/navbar";
import CustomCursor from "./Components/customCursor.js";
import Projects from "./Components/projects.js";
import Contact from "./Components/contacts.js";

// import './App.css';
const App = () => {
  return (
    <div className="blurred-background">
      <div className="blur-overlay">
        <Navbar className="navbar" />
        <Home />
        <Abouts />
        <Skills />
        <Projects />
        <Contact />
        <CustomCursor />
      </div>
    </div>
  );
};

export default App;
