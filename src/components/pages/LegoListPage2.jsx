import React, { useEffect, useState } from "react";

import axios from "axios";

const LegoListPage = () => {
  const [boards, setBoards] = useState([]);
  const [page, setPage] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    console.log("use Effective 실행");
    initBoards();
  }, [pageNum]);

  const initBoards = () => {
    const url = `https://sample.bmaster.kro.kr/contacts?pageno=${pageNum}&pagesize=10`;
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setBoards(response.data.contacts);

        const totalCount = response.data.totalcount;
        const totalPages = Math.ceil(totalCount / pageSize);

        setPage({
          pageNum: pageNum,
          totalPages: totalPages,
          prev: pageNum > 1,
          next: pageNum < totalPages,
        });
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        console.log("에러가 나든 안나든 무조건 실행");
      });
  };

  const deleteBoard = (e) => {
    const { name, value } = e.target;
    console.log(name + "::" + value);

    setBoards(boards.filter((board) => board.no !== value));
  };

  const onClickPaging = (pages) => {
    setPageNum(pages); // 페이지 클릭 시 현재 페이지 업데이트
  };

  return (
    <div className="container mt-3">
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">게시판</h1>
        <p className="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net">
            official DataTables documentation
          </a>
          .
        </p>

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
                    <th>번호</th>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>주소</th>
                    <th>사진</th>
                    <th className="text-center">삭제</th>
                  </tr>
                </thead>

                <tbody>
                  {boards &&
                    boards.map((board) => (
                      <tr key={board.no}>
                        <td>{board.no}</td>
                        <td>{board.name}</td>
                        <td>{board.tel}</td>

                        <td>{board.address}</td>
                        <td>
                          <img src={board.photo} alt="" />
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-success"
                            value={board.no}
                            onClick={deleteBoard}
                          >
                            삭제
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {/* 페이징           */}
            <ul className="pagination justify-content-center">
              {page != null
                ? [...Array(page.totalPages)].map((_, index) => (
                    <li
                      className={`page-item ${
                        pageNum === index + 1 ? "active" : ""
                      }`}
                      key={index}
                    >
                      <a
                        href="#"
                        onClick={() => onClickPaging(index + 1)} // 페이지 번호 클릭 시
                        className="page-link"
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))
                : null}
            </ul>

            <hr />
          </div>
        </div>
      </div>
    </div>
    // <!-- /.container-fluid -->);
  );
};

export default LegoListPage;
