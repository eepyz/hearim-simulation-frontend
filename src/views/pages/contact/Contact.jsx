import { Fragment } from "react";

import styles from "../../../assets/css/Contact.module.css";

import contactHeaderImg from "../../../assets/img/notice/team-work.png";
// import contactService from "../../../services/contact.service";

const Contact = () => {
  const createOpinion = () => {
    if (
      opinion.firstName === "" ||
      opinion.lastName === "" ||
      opinion.email === "" ||
      opinion.company === "" ||
      opinion.message === ""
    ) {
      alert("Please Check your input");
    } else if (!opinion.email.includes("@")) {
      alert("Please Check Your email");
    } else {
      contactService
        .create(opinion)
        .then((res) => {
          router.push({ name: "thankyou" });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Fragment>
      <main className="container">
        <section className="sub-header">
          <div className="sub-header-content">
            <p>Contact</p>
            <div>We always look forward to communicating with you.</div>
          </div>
        </section>
        <section className={styles["between-div"]}>
          <img src={contactHeaderImg} alt="" />
          <div className={styles["side-box"]}>
            Welcome to our contact page!
            <br />
            <div className={styles["side-elem"]}>
              We are thrilled to hear from you and eager to assist with any
              questions, comments, or feedback you may have. Our goal is to
              provide exceptional customer service and ensure your satisfaction
              with our products or services.
              <br />
              <br />
            </div>
          </div>
        </section>
        <section className={styles["contact-main-box"]}>
          <div className="flex">
            <div className={styles["contact-info"]}>
              <div className={styles["contact-info-elem"]}>
                <div className={styles["title"]}>
                  <i className="bi bi-telephone-fill"></i>Call
                </div>
                <div className={styles["content"]}>+82 10 8971 2309</div>
              </div>
              <div className={styles["contact-info-elem"]}>
                <div className={styles["title"]}>
                  <i className="bi bi-envelope-fill"></i> Email
                </div>
                <div className={styles["content"]}>kjh@hearimsw.com</div>
              </div>
              <div className={styles["contact-info-elem"]}>
                <div className={styles["title"]}>
                  <i className="bi bi-geo-alt-fill"></i> Location
                </div>
                <div className={styles["content"]}>
                  A 207-1, 357, Guseong-ro, Giheung-gu, Yongin-si, Gyeonggi-do,
                  Republic of Korea
                </div>
              </div>
            </div>
            <div className={styles["contact-form"]}>
              <div>
                <div className="flex">
                  <div className={styles["form-div"]}>
                    <div className={styles["form-input-title"]}>First Name</div>
                    <input
                      className={styles["form-input-content"]}
                      type="text"
                      placeholder="Your First Name"
                    />
                  </div>
                  <div className={styles["form-div"]}>
                    <div className={styles["form-input-title"]}>Last Name</div>
                    <input
                      className={styles["form-input-content"]}
                      type="text"
                      placeholder="Your Last Name"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className={styles["form-div"]}>
                    <div className={styles["form-input-title"]}>Email</div>
                    <input
                      className={styles["form-input-content"]}
                      type="text"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className={styles["form-div"]}>
                    <div className={styles["form-input-title"]}>Company</div>
                    <input
                      className={styles["form-input-content"]}
                      type="text"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div className={styles["form-input-title"]}>
                  What Can We Help You With?
                </div>
                <select className={styles["form-input-select"]}>
                  <option></option>
                </select>

                <div className={styles["form-div"]}>
                  <div className={styles["form-input-title"]}>Message</div>
                  <textarea
                    className={styles["message"]}
                    type="text"
                    placeholder="Feel free to say anything. "
                  ></textarea>
                </div>
                <button className={styles["send-btn"]}>send</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};
export default Contact;
