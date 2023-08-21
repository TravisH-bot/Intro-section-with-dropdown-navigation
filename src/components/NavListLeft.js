import { useState, useEffect, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminder from "../images/icon-reminders.svg";
import plan from "../images/icon-planning.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";

const NavListLeft = () => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const handleOpenFeatures = () => {
    setOpenFeatures(!openFeatures);
  };

  const handleOpenCompany = () => {
    setOpenCompany(!openCompany);
  };

  const featuresLinkClick = (e) => {
    setOpenFeatures(false);
  };

  const companyLinkClick = (e) => {
    setOpenCompany(false);
  };

  let domNode = useClickOutside(() => {
    setOpenFeatures(false);
    setOpenCompany(false);
  });

  return (
    <ul ref={domNode}>
      <a href="#">
        <li onClick={handleOpenFeatures}>
          Features{" "}
          <img
            className="arrow"
            src={openFeatures ? arrowUp : arrowDown}
            alt="arrow down icon"
          ></img>
        </li>
      </a>
      {openFeatures ? (
        <ul className="menu">
          <li onClick={featuresLinkClick} className="menu-item">
            <a href="#">
              <img className="icon" src={todo} alt="todo icon"></img> Todo List
            </a>
          </li>
          <li onClick={featuresLinkClick} className="menu-item">
            <a href="#">
              <img className="icon" src={calendar} alt="todo icon"></img>{" "}
              Calendar
            </a>
          </li>
          <li onClick={featuresLinkClick} className="menu-item">
            <a href="#">
              <img className="icon" src={reminder} alt="todo icon"></img>{" "}
              Reminders
            </a>
          </li>
          <li onClick={featuresLinkClick} className="menu-item">
            <a href="#">
              <img className="icon" src={plan} alt="todo icon"></img> Planning
            </a>
          </li>
        </ul>
      ) : null}

      <a href="#">
        <li onClick={handleOpenCompany}>
          Company{" "}
          <img
            className="arrow"
            src={openCompany ? arrowUp : arrowDown}
            alt="arrow down icon"
          ></img>
        </li>
      </a>
      {openCompany ? (
        <ul className="menu-two">
          <li onClick={companyLinkClick} className="menu-item-two">
            <a href="#">History</a>
          </li>
          <li onClick={companyLinkClick} className="menu-item-two">
            <a href="#">Our Team</a>
          </li>
          <li onClick={companyLinkClick} className="menu-item-two">
            <a href="#">Blog</a>
          </li>
        </ul>
      ) : null}
      <a href="#">
        <li>Careers</li>
      </a>
      <a href="#">
        <li>About</li>
      </a>
    </ul>
  );
};

export default NavListLeft;
