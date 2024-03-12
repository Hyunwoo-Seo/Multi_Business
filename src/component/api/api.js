import axios from "axios";
import { useCookies } from "react-cookie";

const Url = "http://localhost:4000/users";
const inquiryUrl = "http://localhost:4000/inquiry";

export const getallUsers = async (id) => {
  id = id || "";
  return await axios.get(`${Url}/${id}`);
};

export const addUser = async (users) => {
  return await axios.post(Url, users);
};

// export const addInquiry = async (inquiry) => {
//   return await axios.post(inquiryUrl, inquiry);
// };

export const editUser = async (id, users) => {
  return await axios.put(`${Url}/${id}`, users);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${Url}/${id}`);
};
