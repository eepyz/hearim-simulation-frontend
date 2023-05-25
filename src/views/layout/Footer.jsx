import { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "../../assets/css/layout/Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div>
          Development by Research Of Numerical Simulation SW,
          <Link to="contact">HEARIM</Link>
          <br />
          <br />
          Copyright &copy; HEARIM All Rights Reserved.
        </div>
      </footer>
    </Fragment>
  );
};
export default Footer;
