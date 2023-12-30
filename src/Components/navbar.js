// Navbar.js
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../Styling/navbar.css";

const Navbar = () => {
  const scrollTo = (target) => {
    console.log("Scrolling to:", target);
    scroll.scrollTo(target);
  };

  return (
    <nav>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset as needed
        duration={500}
        className="brand"
      >
        KK
        <span className="dot1">.</span>
      </Link>
      <ul className="navlinks">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as needed
          duration={500}
          className="link"
          data-title="About"
        >
          {/* <img
            style={{ filter: "invert(0)" }}
            src="https://img.icons8.com/?size=80&id=I_5_kSloSWJW&format=png"
          /> */}
          ABOUT
        </Link>
        <Link
          to="skills-sec"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as needed
          duration={500}
          className="link"
          data-title="Skills"
        >
          SKILLS
          {/* <img
            style={{ filter: "invert(0)" }}
            src="https://img.icons8.com/?size=64&id=104252&format=png"
          /> */}
        </Link>

        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className="link"
          data-title="Projects"
        >
          My Work
          {/* <img
            // style={{ filter: "invert(1)" }}
            src="https://img.icons8.com/?size=64&id=cHppp0h3lMK6&format=png"
          /> */}
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as needed
          duration={500}
          className="link"
          data-title="Contact"
        >
          {/* <img
            style={{ filter: "invert(1)" }}
            src="https://img.icons8.com/?size=80&id=66624&format=png"
          /> */}
          Contact
        </Link>
      </ul>
      <a
        href={`${process.env.PUBLIC_URL}/resume.pdf`}
        download="Kalyan_keerthipati_Resume.pdf"
        className="resume"
      >
        RESUME
        <div class="Btn">
          <svg
            class="svgIcon"
            viewBox="0 0 384 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
          </svg>
          <span class="icon2"></span>
        </div>
      </a>
    </nav>
  );
};

export default Navbar;
