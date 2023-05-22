import http from "./common/http-common";

class ContactService {
  create(opinion) {
    return http.post("/contact/create", opinion);
  }
}

export default new ContactService();
