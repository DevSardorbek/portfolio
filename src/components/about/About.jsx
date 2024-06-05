import React from "react";
import "../../sass/__about.scss";
import myImg from "../../assets/my-img2.jpg";
import Info from "./Info";
import { FaFileAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__titlee">
        <h2>About Me</h2>
        <span>My Introduction</span>
      </div>
      <div className="about__container container grid">
        <img src={myImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__desctiption">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, vel
            voluptatibus. Magni, totam numquam.
          </p>
          <a download="" href="" className="button button-flex">
            DownLoad
            <FaFileAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
