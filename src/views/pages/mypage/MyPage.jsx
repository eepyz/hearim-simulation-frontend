import { Fragment } from "react";

import styles from "../../../assets/css/Mypage.module.css";
const MyPage = () => {
  return (
    <Fragment>
      <main className="container">
        <section className="sub-header">
          <div className="sub-header-content">
            <p>My Page</p>
            <div>Check and Modify your information.</div>
          </div>
        </section>
        <section className={styles["mypage-main-box"]}>
          <div className={styles["main-title"]}>My Information</div>
          <hr className="hr" />

          <section className={styles["mypage-selected-view"]}>
            <div className={styles["mypage-profile-photo"]}>
              <label htmlFor="profile-photo"> upload image </label>
              <input
                type="file"
                // @change="selectImage($event)"
                id="profile-photo"
                accept="image/*"
              />
              <div>
                <div
                // v-show="image.previewImage"
                >
                  <img
                    // :src="image.previewImage"
                    alt=""
                  />
                </div>
                <img
                  // v-show="image.currentImage === ''"
                  src="@/assets/img/qna/profile.png"
                  alt="author-profile-img"
                />
              </div>
            </div>
            <div className={styles["information-box"]}>
              <div className="flex">
                <div>
                  <div>username</div>
                  <input
                    type="text"
                    // v-model="userInfo.username"
                    placeholder="your name"
                  />
                </div>
                <div>
                  <div>email</div>
                  <input
                    type="text"
                    // v-model="userInfo.email"
                  />
                </div>
              </div>
              <div className="flex">
                <div>
                  <div>organization</div>
                  <input
                    type="text"
                    // v-model="userInfo.organization"
                  />
                </div>
                <div>
                  <div>job</div>
                  <input
                    type="text"
                    // v-model="userInfo.job"
                  />
                </div>
              </div>
              <button
                className={styles["userInfo-save-btn"]}
                // @click="modifyUser()"
              >
                confirm
              </button>
            </div>
          </section>
          <hr className="hr" />
        </section>
      </main>
    </Fragment>
  );
};
export default MyPage;
