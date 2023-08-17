import { useState } from "react";
import logo from "../images/logo.svg";
import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminder from "../images/icon-reminders.svg";
import plan from "../images/icon-planning.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenTwo = () => {
    setOpenTwo(!openTwo);
  };

  return (
    <div className="navBar">
      <div className="left-side">
        <img className="logo" src={logo} alt="company logo"></img>
        <ul>
          <a href="#">
            <li onClick={handleOpen}>
              Features{" "}
              <img
                className="arrow"
                src={arrowDown}
                alt="arrow down icon"
              ></img>
            </li>
          </a>
          {open ? (
            <ul className="menu">
              <li className="menu-item">
                <a href="#">
                  <img className="icon" src={todo} alt="todo icon"></img> Todo
                  List
                </a>
              </li>
              <li className="menu-item">
                <a href="#">
                  <img className="icon" src={calendar} alt="todo icon"></img>{" "}
                  Calendar
                </a>
              </li>
              <li className="menu-item">
                <a href="#">
                  <img className="icon" src={reminder} alt="todo icon"></img>{" "}
                  Reminders
                </a>
              </li>
              <li className="menu-item">
                <a href="#">
                  <img className="icon" src={plan} alt="todo icon"></img>{" "}
                  Planning
                </a>
              </li>
            </ul>
          ) : null}

          <a href="#">
            <li onClick={handleOpenTwo}>
              Company{" "}
              <img
                className="arrow"
                src={arrowDown}
                alt="arrow down icon"
              ></img>
            </li>
          </a>
          {openTwo ? (
            <ul className="menu-two">
              <li className="menu-item-two">
                <a href="#">History</a>
              </li>
              <li className="menu-item-two">
                <a href="#">Our Team</a>
              </li>
              <li className="menu-item-two">
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
