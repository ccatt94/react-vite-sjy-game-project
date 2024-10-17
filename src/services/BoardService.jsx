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
  //백틱 사용시 변수화 가능
  return http.post(`/boards/`, data);
};

//글번호에 맞는 게시판 글 가져오기
const get = (id) => {
  console.log(id);
  return http.get(`/boards/${id}`);
};

const update = (data) => {
  console.log(data);
  return http.put(`/boards/`, data);
};

export default {
  getPagingList,
  remove,
  write,
  get,
  update,
};
