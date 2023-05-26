import { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "../../../assets/css/Signup.module.css";

const Signup = () => {
  return (
    <Fragment>
      <main className={"container " + styles["container"]}>
        <section className={styles["signup-box"]}>
          <div className={styles["flex"]}>
            <Link to={-1}>
              <i
                className={"bi bi-arrow-left-circle " + styles["arrow-icon"]}
              ></i>
            </Link>
            <div className={styles["main-title"]}>Sign up</div>
          </div>

          <div className={styles["flex"]}>
            <label>
              <div className={styles["field-div"]}>Username(ID)</div>
              <div className={styles["flex"]}>
                <div>
                  <input
                    type="text"
                    //         v-model.trim="userInfo.username"
                    className={styles["name-input"]}
                    // @focus="checkData()"
                    // @change="checkData()"
                  />
                  <div
                    // v-show="validState.usernameNonDuplicate === false"
                    className={styles["warning-div"]}
                  >
                    This username is not valid.
                  </div>
                  <div
                    // v-show="validState.usernameNonDuplicate === true"
                    className={styles["warning-div-checked"]}
                  >
                    You can use this username.
                  </div>
                </div>

                <div
                  className={styles["duplicate-check-btn"]}
                  // @click="checkUsernameDuplicate()"
                >
                  duplicate check
                </div>
              </div>
            </label>
          </div>

          <div className={styles["flex"]}>
            <label>
              <div className={styles["field-div"]}>Password</div>
              <input
                type="password"
                // v-model.trim="userInfo.password"
                className={styles["password-input"]}
                // ref="pwdInputRef"
                // @focus="checkData()"
                // @change="checkData()"
              />
              <div
                // v-show="validState.pwdValid === false"
                className={styles["warning-div"]}
              >
                Password should contain English and numbers within 10~15
                characters.
              </div>
            </label>
            <label>
              <div className={styles["field-div"]}>Confirm Password</div>
              <input
                type="password"
                className={styles["password-input"]}
                // v-model="confirmPwd"
                // @focus="checkData()"
                // @change="checkData()"
              />
              <div
                // v-show="validState.confirmPwdValid === false"
                className={styles["warning-div"]}
              >
                This password is not the same as entered password.
              </div>
            </label>
          </div>

          <div className={styles["flex"]}>
            <label>
              <div className={styles["field-div"]}>Email</div>
              <input
                type="email"
                // v-model.trim="userInfo.email"
                className={styles["email-input"]}
                // @focus="checkData()"
                // @change="checkData()"
              />
              <div
                // v-show="validState.emailValid === false"
                className={styles["warning-div"]}
              >
                Email should be typed in the right email format.
              </div>
            </label>
          </div>

          <div className={styles["flex"]}>
            <label>
              <div className={styles["field-div"]}>Organization</div>
              <input
                type="text"
                // v-model="userInfo.organization"
                className={styles["job-input"]}
                // @focus="checkData()"
                // @change="checkData()"
              />
            </label>
            <label for="job">
              <div className={styles["field-div"]}>Job</div>
              <input
                type="text"
                // v-model="userInfo.job"
                className={styles["job-input"]}
                // @focus="checkData()"
                // @change="checkData()"
              />
            </label>
          </div>

          <div className={styles["sumbit"]}>
            <button
              className={styles["signup-btn"]}
              // @click="sendUserInfo()"
            >
              Create Account
            </button>
          </div>
        </section>
      </main>
    </Fragment>
  );
};
export default Signup;
