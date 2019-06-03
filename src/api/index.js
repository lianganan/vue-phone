import axios from "axios";
if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "https://test.duodianbao.net/QLQW/";
}
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
export default axios;
