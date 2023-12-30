// Home.js
import React, { useEffect, useRef } from "react";
import "../Styling/home.css";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Business Intelligence Developer"],
      typeSpeed: 50,
      showCursor: false,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home">
      <div className="name">
        <h4>Hello,</h4>
        <span>I am </span>
        <h1 className="myname">Kalyan Keerthipati</h1>
        <div className="desg" ref={typedRef}></div>
      </div>
      <div className="profile-pic">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0iJcgw-_IUtBTNXMGYNF044247gEtgqGMA&usqp=CAU"
          alt="profile-pic"
        />
      </div>
    </div>
  );
};

export default Home;
