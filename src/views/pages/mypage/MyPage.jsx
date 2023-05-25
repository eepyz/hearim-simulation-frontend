import { Fragment } from "react";
import "../../../assets/css/Mypage.module.css";
const MyPage = () => {
  return (
    <Fragment>
      <main className="container">
        <section className="sub-header"></section>
        <section className="mypage-main-box">
          <div className="main-title">My Information</div>
          <hr className="hr" />

          <section className="mypage-selected-view">
            <router-view></router-view>
          </section>
          <hr className="hr" />
        </section>
      </main>
    </Fragment>
  );
};
export default MyPage;
