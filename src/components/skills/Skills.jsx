import React from "react";
import "../../sass/__skills.scss";
import FrontEnd from "./FrontEnd";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="skills__titlee">
        <h2>Skills</h2>
        <span>My technical level</span>
      </div>
      <div className="skills__container container grid">
        <FrontEnd />
      </div>
    </section>
  );
};

export default Skills;
