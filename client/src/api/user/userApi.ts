import axios from "src/config/axios";

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
  return await axios.post("http://localhost:5000/api/createUser", data);
};

export const loginRequest = async (data: LoginData) => {
  const res = await axios.post("http://localhost:5000/api/login", data);
  return await res.data;
};

export const logoutRequest = async () => {
  await axios.delete("http://localhost:5000/api/logout");
};

export const getAllUsersRequest = async () => {
  const res = await axios.get("http://localhost:5000/api/admin/getUsers");
  return await res.data;
};

export const deleteUserRequest = async (id: string) => {
  await axios.delete(`http://localhost:5000/api/admin/${id}`);
};
