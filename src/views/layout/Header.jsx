import { Fragment } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logoM.png";
import styles from "../../assets/css/layout/Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header>
        <div className={styles["header-box"]}>
          <Link to="/" className={styles["logo"]}>
            <img src={logo} alt="" />
          </Link>
          <nav className={styles["header-nav"]}>
            <Link to="notice">NOTICE</Link>
            <Link to="qna">Q&A</Link>
            <Link to="about">ABOUT</Link>
            <Link to="contact">CONTACT</Link>
            <div className={styles["vertical-line"]}></div>
            <Link to="mypage">
              <i className="bi bi-person-square"></i>
            </Link>
            <Link to="/" className={styles["login"]}>
              LOGIN
            </Link>
            <Link to="/">LOGOUT</Link>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
