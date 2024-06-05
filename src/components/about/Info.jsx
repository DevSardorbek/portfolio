import React from "react";
import { LuAward } from "react-icons/lu";
import { BiBriefcaseAlt } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <LuAward className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2month working</span>
      </div>
      <div className="about__box">
        <BiBriefcaseAlt className="about__icon" />
        <h3 className="about__title">Complated</h3>
        <span className="about__subtitle">2+ Projects</span>
      </div>
      <div className="about__box">
        <BiSupport className="about__icon" />
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24 /7</span>
      </div>
    </div>
  );
};

export default Info;
