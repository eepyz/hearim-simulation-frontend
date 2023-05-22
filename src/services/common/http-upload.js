import axios from "axios";
import store from "../../store";
import router from "../../router";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

//request interceptor
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config.timeout = 10000;
    (config.headers["Content-Type"] = "multipart/form-data"),
      (config.withCredentials = true);
    return config;
  },
  (error) => {
    // Do something with request error
    console.log("axios request error : ", error);
    return Promise.reject(error);
  }
);

//response interceptor
instance.interceptors.response.use(
  (response) => {
    // Do something with response data

    return response;
  },
  async (error) => {
    try {
      const errorAPI = error.response.config; //요청했던 request 정보가 담겨있음

      /**error
       * accessToken authentication wrong : 400 (인증잘못됨 - 꺼져)
       * accessToken expired : 403 (새로 요청)
       * refreshToken expired : 405 (로그아웃해야됨)
       * no token : 404 (꺼져 - 로그인 창으로)
       */

      if (error.response.status === 401) {
        if (
          errorAPI.retry === undefined &&
          store.getters["auth/getRefreshTokenStatus"] !== false
        ) {
          errorAPI.retry = true; //retry config
          await store.dispatch("auth/getNewAccessToken"); //request new access token
          return await axios(errorAPI); //axios retry
        }
      }

      if (error.response.status === 403) {
        await store.dispatch("auth/logout");
        alert("you need to login.");
        router.go({ name: "login" });
        return;
      }

      if (error.response.status === 404) {
        await store.dispatch("auth/logout");
        alert("error occured 404");
        router.go({ name: "404" });
      }

      await store.dispatch("auth/logout");
      alert("error occured");
      router.push({ path: "/home" });
      console.log(error);
    } catch (err) {
      console.error("[axios.interceptors.response] error : ", err.message);
    }
    return Promise.reject(error);
  }
);

export default instance;

// export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "multipart/form-data",
//   },
// });
