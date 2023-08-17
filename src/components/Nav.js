import logo from "../images/logo.svg";

const Nav = () => {
  return (
    <div className="navBar">
      <div className="left-side">
        <img className="logo" src={logo} alt="company logo"></img>
        <ul>
          <li>Features</li>
          <li>Company</li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
      <div className="right-side">
        <ul>
          <li>Login</li>
          <li>register</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
