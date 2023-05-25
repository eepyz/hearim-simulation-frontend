import { Fragment } from "react";

import styles from "../../../assets/css/Qna.module.css";

import qnaHeaderImg from "../../../assets/img/qna/faq.png";

const QnaMain = () => {
  return (
    <Fragment>
      <section className={styles["qna-main-box"]}>
        {/* <QnaWrite ref="qnaWriteRef"></QnaWrite> */}
        <div className={styles["between-div"]}>
          <img src={qnaHeaderImg} alt="" />
          <div className={styles["side-box"]}>
            Communicate with people.
            <br />
            <div className={styles["side-elem"]}>
              Q&A is a page where users can engage in discussions by posting
              messages and replies. Messages are organized by topic or category
              to help users find and participate in conversations of interest.
            </div>
          </div>
        </div>
        <div className={styles["qna-box"]}>
          <div className={styles["qna-tool-box"]}>
            <input type="text" placeholder="search ..." />
            <i className="bi bi-pencil"></i>
          </div>
          <div className={styles["qna-content-all"]}>
            <div>There's no question yet.</div>
            {/* <router-link
          className="qna-all-elem"
          v-for="question in questions.all"
          :to="{
            name: 'qnaArticle',
            params: {
              id: question.q_id,
            },
          }"
          v-show="
            showall === true ||
            question.content
              .toUpperCase()
              .includes(search.toUpperCase().trim()) ||
            question.title
              .toUpperCase()
              .includes(search.toUpperCase().trim()) ||
            question.tag.toUpperCase().includes(search.toUpperCase().trim())
          "
        >
          <div className="qna-all-elem-author-box">
            <div className="qna-all-elem-author-photo">
              <img
                v-show="
                  showProfileImage(
                    question.author,
                    question.authorInfo.profileImage.fileName
                  ) !== ''
                "
                :src="
                  showProfileImage(
                    question.author,
                    question.authorInfo.profileImage.fileName
                  )
                "
              />
              <img
                v-show="
                  showProfileImage(
                    question.author,
                    question.authorInfo.profileImage.fileName
                  ) === ''
                "
                src="@/assets/img/qna/profile.png"
                alt="author-profile-img"
              />
            </div>
          </div>
          <div className="qna-elem-main">
            <div
              v-show="question.private === false"
              className="qna-elem-main-title"
            >
              {{ question.title }}
            </div>
            <div
              v-show="question.private === false"
              className="qna-elem-main-content"
              v-text="question.content.replace(/(<([^>]+)>)/gi, '')"
            ></div>
            <div
              v-show="question.private === true"
              className="qna-elem-main-content-secret"
            >
              <span className="material-symbols-outlined"> lock </span>
              private question
            </div>
            <div className="qna-elem-tag" :style="setTagColor(question.tag)">
              #{{ question.tag }}
            </div>
          </div>
          <div className="qna-elem-others">
            <div className="qna-reply-number">
              <i className="bi bi-chat-text"></i>&nbsp;
              <div className="numbers">{{ question.reply }}</div>
            </div>
            <div className="qna-recommend-number">
              <i className="bi bi-hand-thumbs-up"></i>&nbsp;
              <div className="numbers">{{ question.recommend }}</div>
            </div>
            <div className="qna-elem-date">{{ question.date.substring(0, 9) }}</div>
          </div>
        </router-link> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default QnaMain;
