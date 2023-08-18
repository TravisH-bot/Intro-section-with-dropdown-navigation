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

  const handleOpenMobileNav = () => {
    setMobileOpen(!mobileOpen);
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
        className="mobile-nav-icon"
        src={mobileOpen ? closeNav : openNav}
      ></img>
      <div className="mobile-nav active">
        <div className="top-side">{mobileOpen ? <MobileNavTop /> : null}</div>
        <div className="bottom-side">
          {mobileOpen ? <MobileNavBottom /> : null}
        </div>
      </div>
    </div>
  );
};

export default Nav;
