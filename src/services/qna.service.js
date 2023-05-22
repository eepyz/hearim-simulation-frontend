import http from "./common/http-common";

class QnaService {
  create(content) {
    return http.post("/qna/create", content);
  }

  createReply(content) {
    return http.post("/qna/create/reply", content);
  }

  getAll() {
    return http.get("/qna/get/all");
  }

  getAllReply(original) {
    return http.get(
      `/qna/get/reply/all/${original}`,
      { params: { original } },
      { withCredentials: true }
    );
  }

  getOne(id) {
    return http
      .get(`/qna/get/${id}`, { params: { id } }, { withCredentials: true })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getOneReply(id, original) {
    return http
      .get(
        `/qna/get/reply/${id}`,
        { params: { id: id, original: original } },
        { withCredentials: true }
      )
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  modifyOne(content) {
    return http.post(`/qna/modify`, content);
  }

  modifyOneReply(content) {
    return http.post(`/qna/reply/modify`, content);
  }

  deleteOne(id) {
    return http.delete(
      `/qna/delete/${id}`,
      { params: { id } },
      { withCredentials: true }
    );
  }

  deleteOneReply(id, original) {
    return http.delete(
      `/qna/delete/reply/${id}`,
      { params: { id: id, original: original } },
      { withCredentials: true }
    );
  }
}

export default new QnaService();
