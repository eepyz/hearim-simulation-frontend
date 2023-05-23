import { Fragment } from "react";
import logo from "../../assets/img/logoM.png";
import "../../assets/css/layout.css";
const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="header-box">
          <a className="logo">
            <img src={logo} alt="" />
          </a>
          <nav className="header-nav">
            <a>NOTICE</a>
            <a>Q&A</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
            <div className="vertical-line"></div>
            <a>
              <i className="bi bi-person-square"></i>
            </a>
            <a className="login">LOGIN</a>
            <a>LOGOUT</a>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
