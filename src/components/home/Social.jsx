import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="_blank"
      >
        <FaSquareInstagram />
      </a>
      <a
        href="https://web.telegram.org/"
        className="home__social-icon"
        target="_blank"
      >
        <FaTelegram />
      </a>
      <a
        href="https://github.com/"
        className="home__social-icon"
        target="_blank"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Social;
