import http from "./HttpCommon";

const getPagingList = (path = "/boards/list", search = "") => {
  return http.get(path + search);
};

const remove = (id) => {
  //백틴 사용시 변수화 가능
  return http.delete(`boards/${id}`);
};

export default {
  getPagingList,
  remove,
};
