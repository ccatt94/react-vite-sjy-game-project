import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../board/Pagination";
import EmpService from "../../services/EmpService";

const EmpListPage = () => {
  const [emps, setEmps] = useState([]);
  //http://localhost:8282/emps/list
  const [paging, setPaging] = useState(null);

  // 정리하면 아래와 같다.

  // useEffect(() => {
  //   // 매 렌더링마다 실행
  // });

  // useEffect(() => {
  //   // 컴포넌트가 처음 렌더링된 실행
  // }, []);

  // useEffect(() => {
  //   // 컴포넌트가 처음 렌더링된 이후 실행
  //   // a나 b가 변경되어 컴포넌트가 재렌더링된 이후 실행
  // }, [a, b]);

  useEffect(() => {
    console.log("use Effective 실행");
    initEmps();
  }, []);

  const initEmps = () => {
    EmpService.getPagingList()
      .then((response) => {
        console.log(response);
        setEmps(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteEmp = (e) => {
    const { name, value } = e.target;
    console.log(name + "::" + value);

    // EmpService.remove(value)
    //   .then((respose) => {
    //     console.log(respose);
    //     initEmps();
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    setEmps(emps.filter((emp) => emp.empno !== Number(value)));
  };

  const onClickPaging = (e) => {
    e.preventDefault(); // 기존에 링크 동작을 하지 말아라

    console.log(e.target.pathname);
    console.log(e.target.search);

    EmpService.getPagingList(e.target.pathname, e.target.search)
      .then((response) => {
        setEmps(response.data.emps);
        setPaging(response.data.page);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-3">
      <div className="container-fluid">
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>사원번호</th>
                    <th>이름</th>
                    <th>직업</th>
                    <th>매니저</th>
                    <th>입사일</th>
                    <th>월급</th>
                    <th>커미션</th>
                    <th>부서번호</th>
                    <th className="text-center">삭제</th>
                  </tr>
                </thead>

                <tbody>
                  {emps &&
                    emps.map((emp) => (
                      <tr key={emp.empno}>
                        <td>{emp.empno}</td>
                        <td>{emp.ename}</td>
                        <td>{emp.job}</td>
                        <td>{emp.mgr}</td>
                        <td>{emp.hiredate}</td>
                        <td>{emp.sal}</td>
                        <td>{emp.comm}</td>
                        <td>{emp.deptno}</td>
                        <td className="text-center">
                          <button
                            className="btn btn-success"
                            value={emp.empno}
                            onClick={deleteEmp}
                          >
                            삭제
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
    // <!-- /.container-fluid -->);
  );
};

export default EmpListPage;
