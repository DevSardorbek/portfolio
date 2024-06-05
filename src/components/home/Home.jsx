import React from "react";
import "../../sass/__home.scss";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="section">
      <div className="home-container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
