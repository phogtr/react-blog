import axios from "src/config/axios";
import { url } from "src/config/url";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const reqisterRequest = async (data: RegisterData) => {
  return await axios.post(url.url + "/api/createUser", data);
};

export const loginRequest = async (data: LoginData) => {
  const res = await axios.post(url.url + "/api/login", data);
  return await res.data;
};

export const logoutRequest = async () => {
  await axios.delete(url.url + "/api/logout");
};

export const getAllUsersRequest = async () => {
  const res = await axios.get(url.url + "/api/admin/getUsers");
  return await res.data;
};

export const deleteUserRequest = async (id: string) => {
  await axios.delete(url.url + `/api/admin/${id}`);
};

export const updateUserRequest = async (id: string) => {
  await axios.put(url.url + `/api/admin/${id}`);
};
