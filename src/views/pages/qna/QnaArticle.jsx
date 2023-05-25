import { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "../../../assets/css/Qna.module.css";

const QnaArticle = () => {
  return (
    <Fragment>
      <main className={styles["qna-main-box"]}>
        {/* <QnaModify ref="qnaModifyRef"></QnaModify>
    <ReplyWrite ref="qnaReplyRef"></ReplyWrite>
    <ReplyModify ref="qnaReplyModifyRef"></ReplyModify> */}
        <section className={styles["qna-article-box"]}>
          <div className={styles["floating-btn"]}>
            <Link className={styles["floating-btn-elem"]} to="/qna">
              <span className="material-icons"> home </span>
            </Link>
            <a className={styles["floating-btn-elem"]} href="#">
              <span className="material-symbols-outlined"> arrow_upward </span>
            </a>
          </div>
          <div className={styles["qna-article-title"]}>
            {/* {{ question.title }} */}
          </div>

          <div className={styles["qna-ariticle-content-box"]}>
            <div className={styles["qna-author-photo"]}>
              <img
                // v-show="profileImage !== ''"
                // :src="profileImage"
                alt="author-profile-img"
              />
              <img
                // v-show="profileImage === ''"
                // src="@/assets/img/qna/profile.png"
                alt="author-profile-img"
              />
            </div>
            <div>
              <div className={styles["qna-article-detail-upper"]}>
                {/* <div>
              {{ question.author }}
            </div>
            <div>created:&nbsp;{{ question.date }}</div> */}
              </div>
              <div className={styles["qna-ariticle-content"]}>
                {/* <div v-html="safeQuestionContent"></div> */}

                <div className={styles["qna-article-detail-down"]}>
                  <div
                    className={styles["qna-article-tag"]}
                    //   :style="setTagColor(question.tag)"
                  >
                    {/* #{{ question.tag }} */}
                  </div>
                  <div className={styles["right"]}>
                    <div>
                      <i
                        // v-show="username === question.author"
                        className="bi bi-pencil-fill"
                        // @click="openModifyBox()"
                      ></i>
                    </div>
                    <div>
                      <i
                        // v-show="username === question.author"
                        className="bi bi-trash-fill"
                        // @click="deleteQuestion(question.q_id)"
                      ></i>
                    </div>
                    {/* <div className="qna-article-recommend">
                <i
                  v-show="questionThumbs"
                  @click="thumbsUpQuestion()"
                  className="bi bi-hand-thumbs-up-fill"
                ></i>
                <i
                  v-show="!questionThumbs"
                  @click="thumbsUpQuestion()"
                  className="bi bi-hand-thumbs-up"
                ></i>
                {{ question.recommend }}
              </div>  */}
                    <div>
                      <i
                        // v-show="question.private === true"
                        className="bi bi-lock-fill"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          // v-show="question.reply === 0"
          className={styles["qna-no-reply-box"]}
        >
          <div className={styles["qna-reply-upper-box"]}>
            {/* <div><i className="bi bi-chat-text"></i>&nbsp;{{ question.reply }}</div> */}
            <div
              className={styles["reply-btn"]}
              //  @click="openReplyBox()"
            >
              <i className="bi bi-reply-fill"></i>
              reply
            </div>
          </div>
          <div className={styles["no-reply"]}>There's no reply yet.</div>
        </section>

        <section
          // v-show="question.reply > 0"
          className={styles["qna-reply-box"]}
        >
          <div className={styles["qna-reply-upper-box"]}>
            {/* <div><i className="bi bi-chat-text"></i>&nbsp;{{ question.reply }}</div> */}
            <div
              className={styles["reply-btn"]}
              // @click="openReplyBox()"
            >
              <i className="bi bi-reply-fill"></i>
              reply
            </div>
          </div>
          {/* <div v-for="reply in replies.all">
        <div className="qna-ariticle-content-box">
          <div className="qna-author-photo">
            <img
              v-show="
                showProfileImage(
                  reply.author,
                  reply.authorInfo.profileImage.fileName
                ) !== ''
              "
              :src="
                showProfileImage(
                  reply.author,
                  reply.authorInfo.profileImage.fileName
                )
              "
              alt="author-profile-img"
            />
            <img
              v-show="
                showProfileImage(
                  reply.author,
                  reply.authorInfo.profileImage.fileName
                ) === ''
              "
              src="@/assets/img/qna/profile.png"
              alt="author-profile-img"
            />
          </div>
          <div>
            <div className="qna-article-detail-upper">
              {{ reply.author }}
              <div>{{ reply.date }}</div>
            </div>
            <div className="qna-ariticle-content">
              <div v-html="safeReplyContent(reply.content)"></div>
              <div className="qna-article-detail-down">
                <div></div>
                <div className="right">
                  <div>
                    <i
                      v-show="username === reply.author"
                      className="bi bi-pencil-fill"
                      @click="openReplyModifyBox(reply.r_id, reply.original)"
                    ></i>
                  </div>
                  <div>
                    <i
                      v-show="username === reply.author"
                      className="bi bi-trash-fill"
                      @click="deleteReply(reply.r_id)"
                    ></i>
                  </div>
                  <!-- <div className="qna-article-recommend">
                  <i
                    v-show="thumbs"
                    @click="thumbsUpQuestion()"
                    className="bi bi-hand-thumbs-up-fill"
                  ></i>
                  <i
                    v-show="!thumbs"
                    @click="thumbsUp()"
                    className="bi bi-hand-thumbs-up"
                  ></i>
                  {{ reply.recommend }}
                </div> -->
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div >
          */}
        </section>
      </main>
    </Fragment>
  );
};
export default QnaArticle;
