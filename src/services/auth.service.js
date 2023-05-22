import http from "./common/http-common";

class AuthService {
  signup(data) {
    return http
      .post("/auth/signup", { ...data }, { withCredentials: true })
      .then((response) => {
        if (response.ok === true) {
          return true;
        }
      })
      .catch((e) => {
        return false;
      });
  }

  login(data) {
    return http
      .post("/auth/login", data, { withCredentials: true })
      .then((response) => {
        return true;
      })
      .catch((e) => {
        return false;
      });
  }

  // localStorage.setItem("user", JSON.stringify(response.data)); //이건 자동 로그인 시 필요

  logout() {
    return new Promise((resolve, reject) => {
      http
        .post("/auth/logout", {}, { withCredentials: true })
        .then((response) => {
          resolve();
          return true;
        })
        .catch((e) => {
          reject();
          return false;
        });
    });
  }

  checkDuplicateUser(username) {
    return http.post(
      "/auth/signup/checkDuplicate",
      { username: username },
      { withCredentials: true }
    );
  }

  //accessToken 만료로 재발급 후 재요청시 비동기처리로는 제대로 처리가 안되서 promise로 처리함
  issueNewAccessToken(user) {
    return new Promise((resolve, reject) => {
      http
        .post("/auth/newAccessToken", { user: user }, { withCredentials: true })
        .then((res) => {
          resolve(res.data);
          return true;
        })
        .catch((err) => {
          console.log("refreshToken error : ", err.config);
          reject(err.config.data);
          return false;
        });
    });
  }

  verifyToken() {
    return http.get("/auth/verifyToken", {
      withCredentials: true,
      credentials: "include",
    });
  }
}

export default new AuthService();
