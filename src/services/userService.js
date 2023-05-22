import http from "./common/http-common";

class UserService {
  getOne() {
    return http
      .get(`/user/getOne`, { withCredentials: true })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  modifyOne(username, userInfo) {
    return http
      .post(
        `/user/modify`,
        {
          username: username,
          userInfo: userInfo,
        },
        { withCredentials: true }
      )
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  }

  uploadUserImage(image) {
    let formData = new FormData();
    formData.append("file", image, image.name);
    return http
      .post(`/user/upload/profileImage`, formData, { withCredentials: true })
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  }

  getUserImage(username) {
    return http
      .get(
        `/user/get/profileImage`,
        { params: { username } },
        { withCredentials: true }
      )
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export default new UserService();
