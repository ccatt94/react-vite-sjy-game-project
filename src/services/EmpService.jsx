import http from "./HttpCommon";

const getPagingList = (path = "/emps/list", search = "") => {
  return http.get(path + search);
};

//http://localhost:5173/emps/${empno}
const remove = (empno) => {
  //백틴 사용시 변수화 가능
  return http.delete(`emps/${empno}`);
};

export default {
  getPagingList,
  remove,
};
