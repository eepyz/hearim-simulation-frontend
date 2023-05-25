import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "../views/pages/home/Home";

import Root from "../views/layout/Root";

import Notice from "../views/pages/notice/Notice";
import NoticeMain from "../views/pages/notice/NoticeMain";
import NoticeAritcle from "../views/pages/notice/NoticeArticle";

import Simulation from "../views/pages/simul/Simulation";

import Qna from "../views/pages/qna/Qna";
import QnaMain from "../views/pages/qna/QnaMain";
import QnaArticle from "../views/pages/qna/QnaArticle";

import About from "../views/pages/about/About";

import Contact from "../views/pages/contact/Contact";

import MyPage from "../views/pages/mypage/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "notice",
        element: <Notice />,
        children: [
          {
            path: "",
            element: <NoticeMain />,
          },
          {
            path: "/notice/article",
            element: <NoticeAritcle />,
          },
        ],
      },
      {
        path: "qna",
        element: <Qna />,
        children: [
          { path: "", element: <QnaMain /> },
          { path: "/qna/article", element: <QnaArticle /> },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "/simulation",
    element: <Simulation />,
  },
]);

export default router;
