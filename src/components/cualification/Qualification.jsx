// import React from "react";
// import "../../sass/__qualification.scss";
// import { PiGraduationCapFill } from "react-icons/pi";
// import { TbBriefcaseFilled } from "react-icons/tb";
// import { SlCalender } from "react-icons/sl";
// import { useState } from "react";

// const Qualification = () => {
//   const [toggleState, setToggleState] = useState(1);
//   const toggleTab = (index) => {
//     setToggleState(index);
//   };
//   return (
//     <section className="qualifiaction section">
//       <div className="qualification__titlee">
//         <h2>Qualification</h2>
//         <span>My personal journey</span>
//       </div>
//       <div className="qualification__container container">
//         <div className="qualifiaction__tabs">
//           <div className="qualifiaction__button qualifiaction__active button--flex">
//             <PiGraduationCapFill className="qualifiaction__icon" />
//             Tuit
//           </div>
//           <div className="qualifiaction__button qualifiaction__active button--flex">
//             <TbBriefcaseFilled className="qualifiaction__icon" />
//             Exprience
//           </div>
//         </div>
//         <div className="qualifiaction__sections">
//           <div
//             className={
//               toggleState === 1
//                 ? "qualifiaction__content qualifiaction__content-active"
//                 : "qualifiaction__content "
//             }
//             onClick={() => toggleTab(1)}
//           >
//             <div className="qualifiaction__data">
//               <div>
//                 <h3 className="qualifiaction__title">Web Dev</h3>
//                 <span className="qualifiaction__subtitle">Tuit</span>
//                 <div className="qualification__calender">
//                   <SlCalender />
//                   2019 - present
//                 </div>
//               </div>
//               <div>
//                 <span className="qualifiaction__router"></span>
//                 <span className="qualifiaction__line"></span>
//               </div>
//             </div>
//             <div className="qualifiaction__data">
//               <div></div>

//               <div>
//                 <span className="qualifiaction__router"></span>
//                 <span className="qualifiaction__line"></span>
//               </div>
//               <div>
//                 <h3 className="qualifiaction__title">Art Director</h3>
//                 <span className="qualifiaction__subtitle">Tuit</span>
//                 <div className="qualification__calender">
//                   <SlCalender />
//                   2019 - present
//                 </div>
//               </div>
//             </div>

//             <div className="qualifiaction__data">
//               <div>
//                 <h3 className="qualifiaction__title">Web Dev</h3>
//                 <span className="qualifiaction__subtitle">Tuit</span>
//                 <div className="qualification__calender">
//                   <SlCalender />
//                   2019 - present
//                 </div>
//               </div>
//               <div>
//                 <span className="qualifiaction__router"></span>
//                 <span className="qualifiaction__line"></span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="qualifiaction__sections">
//           <div
//             className={
//               toggleState === 2
//                 ? "qualifiaction__content qualifiaction__content-active"
//                 : "qualifiaction__content "
//             }
//             onClick={() => toggleTab(2)}
//           >
//             <div className="qualifiaction__data">
//               <div>
//                 <h3 className="qualifiaction__title">Web Dev</h3>
//                 <span className="qualifiaction__subtitle">Tuit</span>
//                 <div className="qualification__calender">
//                   <SlCalender />
//                   2019 - present
//                 </div>
//               </div>
//               <div>
//                 <span className="qualifiaction__router"></span>
//                 <span className="qualifiaction__line"></span>
//               </div>
//             </div>
//             <div className="qualifiaction__data">
//               <div></div>

//               <div>
//                 <span className="qualifiaction__router"></span>
//                 <span className="qualifiaction__line"></span>
//               </div>
//               <div>
//                 <h3 className="qualifiaction__title">Art Director</h3>
//                 <span className="qualifiaction__subtitle">Tuit</span>
//                 <div className="qualification__calender">
//                   <SlCalender />
//                   2019 - present
//                 </div>
//               </div>
//             </div>

//             <div className="qualifiaction__data">
//               <div>
//                 <h3 className="qualifiaction__title">Web Dev</h3>
//                 <span className="qualifiaction__subtitle">Tuit</span>
//                 <div className="qualification__calender">
//                   <SlCalender />
//                   2019 - present
//                 </div>
//               </div>
//               <div>
//                 <span className="qualifiaction__router"></span>
//                 <span className="qualifiaction__line"></span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Qualification;
