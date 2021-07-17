import axios from "axios";
import { UserDataObj } from "../utils/useSession";

const instance = axios.create();

instance.interceptors.request.use(
  function (config) {
    const userString = localStorage.getItem("user");
    const userData: UserDataObj = JSON.parse(userString || "{}");

    if (userData) {
      config.headers["Authorization"] = "Bearer " + userData.accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
