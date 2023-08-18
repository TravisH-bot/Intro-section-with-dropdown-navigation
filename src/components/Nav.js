import { useState, useRef } from "react";
import logo from "../images/logo.svg";
import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminder from "../images/icon-reminders.svg";
import plan from "../images/icon-planning.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";

const Nav = () => {
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

  return (
    <div className="navBar">
      <div className="left-side">
        <img className="logo" src={logo} alt="company logo"></img>
        <ul>
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
                  <img className="icon" src={todo} alt="todo icon"></img> Todo
                  List
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
                  <img className="icon" src={plan} alt="todo icon"></img>{" "}
                  Planning
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
      </div>
      <div className="right-side">
        <ul>
          <a href="#">
            <li>Login</li>
          </a>
          <li>
            <a href="#" className="register">
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
