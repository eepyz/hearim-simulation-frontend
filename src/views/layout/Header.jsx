import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logoM.png";
import styles from "../../assets/css/layout/Header.module.css";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <Fragment>
      <header
        className={
          scrollPosition < 200
            ? styles["backgroundTop"]
            : styles["backgroundScroll"]
        }
      >
        <div className={styles["header-box"]}>
          <Link to="/" className={styles["logo"]}>
            <img src={logo} alt="" />
          </Link>
          <nav className={styles["header-nav"]}>
            <Link to="notice">NOTICE</Link>
            {/* <div className={styles["vertical-line"]}></div> */}
            <Link to="qna">Q&A</Link>
            {/* <div className={styles["vertical-line"]}></div> */}
            <Link to="about">ABOUT</Link>
            {/* <div className={styles["vertical-line"]}></div> */}
            <Link to="contact">CONTACT</Link>
            {/* <div className={styles["vertical-line"]}></div> */}

            <Link to="login" className={styles["login"]}>
              LOGIN
            </Link>
            {isLogin && (
              <Link to="mypage">
                <i className={"bi bi-person-square " + styles["icon"]}></i>
              </Link>
            )}
            {isLogin && <Link to="/">LOGOUT</Link>}
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
