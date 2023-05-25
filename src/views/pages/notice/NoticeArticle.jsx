import { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "../../../assets/css/Notice.module.css";

const NoticeAritcle = () => {
  return (
    <Fragment>
      <main className={styles["notice-main-box"]}>
        {/* <NoticeModify></NoticeModify> */}
        <div className={styles["floating-btn"]}>
          <Link className={styles["floating-btn-elem"]} to="/notice">
            <span className="material-icons"> home </span>
          </Link>
          <a className={styles["floating-btn-elem"]} href="#">
            <span className="material-symbols-outlined">arrow_upward</span>
          </a>
        </div>
        <section className={styles["notice-article-box"]}>
          <div className={styles["notice-ariticle-content-box"]}>
            <div>
              <div className={styles["notice-article-title"]}>
                {/* {{ notice.title }} */}
              </div>
              <div className={styles["notice-article-upper-detail"]}>
                {/* <div>created:&nbsp;{{ notice.date }}</div> */}
              </div>
              <div className={styles["notice-ariticle-content"]}>
                {/* <div v-html="safeNoticeContent"></div> */}
              </div>
              <div className={styles["notice-article-down-detail"]}>
                <Link className={styles["back-btn"]} to={-1}>
                  back
                </Link>
                <div className="flex">
                  <div className={styles["notice-article-tools"]}>
                    <i className="bi bi-pencil-fill"></i>
                  </div>
                  <div className={styles["notice-article-tools"]}>
                    <i className="bi bi-trash-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};
export default NoticeAritcle;
