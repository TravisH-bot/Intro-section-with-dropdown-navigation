import { useState } from "react";
import NavListLeft from "./NavListLeft";
import NavListRight from "./NavListRight";
import MobileNavTop from "./MobileNavTop";
import MobileNavBottom from "./MobileNavBottom";
import logo from "../images/logo.svg";
import openNav from "../images/icon-menu.svg";
import closeNav from "../images/icon-close-menu.svg";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleOpenMobileNav = () => {
    setMobileOpen(!mobileOpen);
    setIsActive((current) => !current);
  };

  return (
    <div className="navBar">
      <img className="logo" src={logo} alt="company logo"></img>
      <div className="left-side">
        <NavListLeft />
      </div>
      <div className="right-side">
        <NavListRight />
      </div>
      <img
        onClick={handleOpenMobileNav}
        src={mobileOpen ? closeNav : openNav}
        className="mobile-nav-icon"
      ></img>

      <div className={isActive ? "mobile-nav-visible" : "mobile-nav-hidden"}>
        <div className="top-side">{mobileOpen ? <MobileNavTop /> : null}</div>
        <div className="bottom-side">
          {mobileOpen ? <MobileNavBottom /> : null}
        </div>
      </div>
    </div>
  );
};

export default Nav;
