import axios from "./axios";
import URL from "../baseURL";
export default {
  getPosts: data =>
    axios.get(`${URL}api/post`, {
      params: data,
    }),
  getPost: id => axios.get(`${URL}api/post/${id}`),
  addPost: data => axios.post(`${URL}api/post`, data),
  editPost: (id, data) => axios.put(`${URL}api/post/${id}`, data),
  deletePost: id => axios.delete(`${URL}api/post/${id}`),
  addComment: data => axios.post(`${URL}api/comment`, data),
  addCommentToPost: (id, data) =>
    axios.put(`${URL}api/post/${id}/comment`, data),
};
