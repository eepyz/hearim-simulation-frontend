import http from "./common/http-common";

class NoticeService {
  create(content) {
    return http.post("/notice/create", content);
  }

  getAll() {
    return http.get("/notice/get/all");
  }

  getOne(id) {
    return http
      .get(`/notice/get/${id}`, { params: { id } }, { withCredentials: true })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  modifyOne(content) {
    return http.post(`/notice/modify`, content);
  }

  deleteOne(id) {
    return http.delete(
      `/notice/delete/${id}`,
      { params: { id } },
      { withCredentials: true }
    );
  }
}

export default new NoticeService();
