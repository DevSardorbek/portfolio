import React from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { TbBrandRedux } from "react-icons/tb";
import { LiaReact } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";

import "../../sass/__skills.scss";

const FrontEnd = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title"></h3>
      <div className="skills__box">
        <div className="skills__group">
          {/* <div className="skills__data"></div> */}
          <div>
            <FaHtml5 />
            <h3 className="skills__name">Html</h3>
            <span className="skills__level">Basic</span>
          </div>
          <div>
            <SiCss3 />
            <h3 className="skills__name">Css</h3>
            <span className="skills__level">Intermadiate</span>
          </div>
          <div>
            <IoLogoJavascript />

            <h3 className="skills__name">JavaScript</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          <div>
            <LiaReact />

            <h3 className="skills__name">React</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          <div>
            <TbBrandRedux />

            <h3 className="skills__name">Redux</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          <div>
            <TbBrandTypescript />
            <h3 className="skills__name">TypeScript</h3>
            <span className="skills__level">Basic</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
