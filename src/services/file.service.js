import http from "./common/http-upload";

class FileService {
  uploadUserImage(image, username) {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("file", image, image.name);
    return http
      .post(`/user/upload/profileImage`, formData)
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  }
}

export default new FileService();
