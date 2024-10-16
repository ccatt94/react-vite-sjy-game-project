import http from "./HttpCommon";

const getPagingList = (path = "/boards/list", search = "") => {
  return http.get(path + search);
};

//http://localhost:5173/boards/${id}
const remove = (id) => {
  //백틴 사용시 변수화 가능
  return http.delete(`boards/${id}`);
};

//http://localhost:5173/boards/write
const write = (data) => {
  //백틴 사용시 변수화 가능
  return http.post(`/boards/`, data);
};

export default {
  getPagingList,
  remove,
  write,
};
