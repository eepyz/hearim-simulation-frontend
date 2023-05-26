import { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "../../../assets/css/Login.module.css";
const Login = () => {
  return (
    <Fragment>
      <main className={"container " + styles["container"]}>
        <section className={styles["login-box"]}>
          <div className={styles["flex"]}>
            <Link to={-1}>
              <i
                className={"bi bi-arrow-left-circle " + styles["arrow-icon"]}
              ></i>
            </Link>
            <div className={styles["main-title"]}>Login</div>
          </div>

          <input
            type="text"
            className={styles["login-box-elem"]}
            placeholder="Enter your username"
            // v-model.trim="enteredInfo.username"
          />
          <input
            type="password"
            className={styles["login-box-elem"]}
            placeholder="Enter your password"
            // v-model.trim="enteredInfo.password"
          />
          <button
            type="submit"
            className={styles["login-btn"]}
            //   @click="login"
          >
            Continue
          </button>
          <div className={styles["ask-signup"]}>
            not a member?
            <Link to="/signup">&nbsp;Sign up</Link>
          </div>
        </section>
      </main>
    </Fragment>
  );
};
export default Login;
