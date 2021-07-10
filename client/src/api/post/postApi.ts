import axios from "src/config/axios";

export const getSinglePost = async (id: string) => {
  const res = await axios.get(`http://localhost:5000/api/post/${id}`);
  return await res.data[0];
};
