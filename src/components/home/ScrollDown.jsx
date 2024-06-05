import React from "react";
import { LuMouse } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <LuMouse />
        <span className="home__scroll-name">Scroll Down</span>
        <FaArrowDown className="home__scroll-arrow" />
      </a>
    </div>
  );
};

export default ScrollDown;
