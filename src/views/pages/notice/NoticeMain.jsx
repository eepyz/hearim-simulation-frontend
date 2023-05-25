import { Fragment } from "react";

import styles from "../../../assets/css/Notice.module.css";

import noticeHeaderImg from "../../../assets/img/notice/layers.png";

const NoticeMain = () => {
  return (
    <Fragment>
      <section className={styles["notice-main-box"]}>
        {/* <NoticeWrite ref="noticeWriteRef"></NoticeWrite> */}
        <div className={styles["between-div"]}>
          <img src={noticeHeaderImg} alt="" />
          <div className={styles["side-box"]}>
            Always provide the latest information.
            <br />
            <div className={styles["side-elem"]}>
              We communicate with our members through this page and announce new
              features, events, service changes, and more. This allows our
              members to quickly check the latest news on our site.
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className={styles["notice-box"]}>
          <div className={styles["notice-tool-box"]}>
            <input type="text" placeholder="search ..." />
            <i className="bi bi-pencil"></i>
          </div>
          <div className={styles["notice-content-all"]}>
            <div>There's no notice yet.</div>
            {/* <router-link
          className="notice-all-elem"
          v-for="notice in notices.all"
          :to="{ name: 'noticeArticle', params: { id: notice.n_id } }"
          v-show="
            showall === true ||
            notice.content
              .toUpperCase()
              .includes(search.toUpperCase().trim()) ||
            notice.title.toUpperCase().includes(search.toUpperCase().trim())
          "
          @mouseover="getNoticeId(notice.n_id)"
        >
          <div className="notice-elem-main">
            <div className="notice-elem-photo">
              <i
                v-show="userRole === 'admin'"
                @click="deleteOneNotice($event)"
                className="bi bi-x-circle"
              ></i>
              <!-- <img src="@/assets/img/about/techdetail/analyse2.png " alt="" /> -->
              <img src="@/assets/img/logo2.png " alt="" />
            </div>
            <div className="notice-elem-main-title">{{ notice.title }}</div>
          </div>

          <div className="notice-elem-others">
            <div className="notice-elem-date">
              updated: {{ notice.date.substring(0, 9) }}
            </div>
          </div>
        </router-link> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default NoticeMain;
