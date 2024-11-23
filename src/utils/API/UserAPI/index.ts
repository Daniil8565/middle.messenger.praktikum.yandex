import Request from "../Request";
// import { BaseAPI } from "../BaseAPI";

const entranceAPI = new Request("");
const URL = "https://ya-praktikum.tech/api/v2";

class UserAPI {
  userRequest(data: { [key: string]: string }) {
    return entranceAPI.put(`${URL}/user/profile`, data).send();
  }

  changePasswordRequest(data: { [key: string]: string }) {
    return entranceAPI.put(`${URL}/user/password`, data).send();
  }

  avatar(data: FormData) {
    return entranceAPI.put(`${URL}/user/profile/avatar`, data).send();
  }

  path(path: string) {
    console.log("path", path);
    return entranceAPI.get(`${URL}/resources/${path}`).send();
  }
}

export default UserAPI;
