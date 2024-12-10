import Request from "../Request/index.ts";
import { URL } from "../BaseAPI.ts";
// import { BaseAPI } from "../BaseAPI";

const entranceAPI = new Request("");

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
    return entranceAPI.get(`${URL}/resources/${path}`).send();
  }

  findUserRequest(login: Record<string, string>) {
    return entranceAPI.post(`${URL}/user/search`, login).send();
  }
}

export default UserAPI;
