import React, { useState } from "react";
import "../../sass/__navbar.scss";
import { LuHome } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuMenuSquare } from "react-icons/lu";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { GrImage } from "react-icons/gr";

import { MdOutlineContactPage } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Sardor
        </a>
        <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <LuHome className="nav__icon" />
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <FaRegUser className="nav__icon" />
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <MdOutlineContactPage className="nav__icon" />
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <MdOutlineHomeRepairService className="nav__icon" />
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <GrImage className="nav__icon" />
                Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <PiPaperPlaneRightBold className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
          <button className="nav__cloce" onClick={() => setToggle(!toggle)}>
            <IoClose />
          </button>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <LuMenuSquare className="nav__icon" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
