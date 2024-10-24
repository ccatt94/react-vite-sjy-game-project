import { children } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RspPage from "./../components/pages/RspPage";
import LottoPage from "./../components/pages/LottoPage";
import BoardListPage from "../components/pages/BoardListPage";
import BoardWritePage from "../components/pages/BoardWritePage";
import BoardUpdatePage from "./../components/pages/BoardUpdatePage";
import LegoListPage from "./../components/pages/LegoListPage";
import EmpListPage from "./../components/pages/EmpListPage";

const routes = [
  {
    path: "/",
    element: <App />,
    loader: () => "로또",
    children: [
      {
        path: "/",
        loader: () => "로또",
        element: <LottoPage />,
      },
    ],
  },
  {
    path: "/rsp",
    element: <App />,
    loader: () => "가위바위보",
    children: [
      {
        path: "/rsp",
        loader: () => "가위바위보",
        element: <RspPage />,
      },
    ],
  },
  {
    path: "/boards",
    element: <App />,
    loader: () => "게시판",
    children: [
      {
        path: "/boards",
        loader: () => "게시판",
        element: <BoardListPage />,
      },
      {
        path: "/boards/write",
        loader: () => "글쓰기",
        element: <BoardWritePage />,
      },
      //: <- 파라미터
      // board/{bid} -- 스프링부트
      {
        path: "/boards/:bid",
        loader: () => "글수정",
        element: <BoardUpdatePage />,
      },
    ],
  },
  {
    path: "/lego",
    element: <App />,
    loader: () => "레고",
    children: [
      {
        path: "/lego",
        loader: () => "레고테이블",
        element: <LegoListPage />,
      },
    ],
  },
  {
    path: "/emps/list",
    element: <App />,
    loader: () => "emp",
    children: [
      {
        path: "/emps/list",
        loader: () => "emp리스트",
        element: <EmpListPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
