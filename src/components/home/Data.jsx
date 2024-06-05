import React from "react";
import { PiTelegramLogoBold } from "react-icons/pi";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className=" home__title">
        Atajanov Sardorbek <span className="home__hand">✋</span>
      </h1>
      <h3> Web Developer</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        tempora magnam iure.
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <PiTelegramLogoBold />
      </a>
    </div>
  );
};

export default Data;
