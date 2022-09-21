import axios from "axios";

export class AxiosHttp {
  static init() {
    axios.defaults.baseURL = process.env.VUE_APP_URL_API || "localhost";
    axios.defaults.withCredentials = true;
  }
}
