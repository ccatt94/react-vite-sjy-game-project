import { children } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RspPage from "./../components/pages/RspPage";
import LottoPage from "./../components/pages/LottoPage";

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
];

const router = createBrowserRouter(routes);

export { router, routes };
