import axios from './axios'
import URL from '../baseURL'
export default {
  getPosts: () => axios.get(`${URL}api/post`),
  getPost: Id => axios.get(`${URL}api/post/${Id}`)
}
