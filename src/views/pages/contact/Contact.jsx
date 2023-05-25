import { Fragment } from "react";
import "../../../assets/css/Contact.module.css";

const Contact = () => {
  return (
    <Fragment>
      <main className="container">
        <section className="sub-header">
          <div className="sub-header-content">
            <p>Contact</p>
            <div>We always look forward to communicating with you.</div>
          </div>
        </section>
        <section className="between-div">
          <img src="../../../assets/img/notice/team-work.png" alt="" />
          <div className="side-box">
            Welcome to our contact page!
            <br />
            <div className="side-elem">
              We are thrilled to hear from you and eager to assist with any
              questions, comments, or feedback you may have. Our goal is to
              provide exceptional customer service and ensure your satisfaction
              with our products or services.
              <br />
              <br />
            </div>
          </div>
        </section>
        <section className="contact-main-box">
          <div className="flex">
            <div className="contact-info">
              <div className="contact-info-elem">
                <div className="title">
                  <i className="bi bi-telephone-fill"></i>Call
                </div>
                <div className="content">+82 10 8971 2309</div>
              </div>
              <div className="contact-info-elem">
                <div className="title">
                  <i className="bi bi-envelope-fill"></i> Email
                </div>
                <div className="content">kjh@hearimsw.com</div>
              </div>
              <div className="contact-info-elem">
                <div className="title">
                  <i className="bi bi-geo-alt-fill"></i> Location
                </div>
                <div className="content">
                  A 207-1, 357, Guseong-ro, Giheung-gu, Yongin-si, Gyeonggi-do,
                  Republic of Korea
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div>
                <div className="flex">
                  <div className="form-div">
                    <div className="form-input-title">First Name</div>
                    <input
                      className="form-input-content"
                      type="text"
                      placeholder="Your First Name"
                    />
                  </div>
                  <div className="form-div">
                    <div className="form-input-title">Last Name</div>
                    <input
                      className="form-input-content"
                      type="text"
                      placeholder="Your Last Name"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="form-div">
                    <div className="form-input-title">Email</div>
                    <input
                      className="form-input-content"
                      type="text"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-div">
                    <div className="form-input-title">Company</div>
                    <input
                      className="form-input-content"
                      type="text"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div className="form-input-title">
                  What Can We Help You With?
                </div>
                <select className="form-input-select">
                  <option></option>
                </select>

                <div className="form-div">
                  <div className="form-input-title">Message</div>
                  <textarea
                    className="message"
                    type="text"
                    placeholder="Feel free to say anything. "
                  ></textarea>
                </div>
                <button className="send-btn">send</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};
export default Contact;
