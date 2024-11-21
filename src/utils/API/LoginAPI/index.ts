import Request from "../Request";
// import { BaseAPI } from "../BaseAPI";

const entranceAPI = new Request("");
const URL = "https://ya-praktikum.tech/api/v2";

class LoginAPI {
  request(data: { [key: string]: string }) {
    return entranceAPI.post(`${URL}/auth/signin`, data).send();
  }

  create(data: { [key: string]: string }) {
    return entranceAPI.post(`${URL}/auth/signup`, data).send();
  }

  requestDataUser() {
    return entranceAPI.get(`${URL}/auth/user`).send();
  }

  logout() {
    return entranceAPI.post(`${URL}/auth/logout`, {}).send();
  }
}

export default LoginAPI;