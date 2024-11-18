import Request from "../Request";
// import { BaseAPI } from "../BaseAPI";

const entranceAPI = new Request("");
const URL = "https://ya-praktikum.tech";
class LoginAPI {
  getUser() {
    let Request = entranceAPI.post("/", {});
    return Request.send();
  }

  request(data: { [key: string]: string }) {
    console.log(data);
    console.log(entranceAPI.post(`${URL}/api/v2/auth/signup`, data));
    return entranceAPI.post(`${URL}/auth/signin`, data).send();
  }
}

export default LoginAPI;
