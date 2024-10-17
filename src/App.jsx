import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import Get from "./pages/Get";
import Post from "./pages/Post";
import Project from "./pages/Project";
import AuthLayout from "./pages/AuthLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Restricted from "./components/Restricted ";
import { useState } from "react";

const AuthRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/app/v1",
    element: (
      <Restricted>
        <HomeLayout />
      </Restricted>
    ),
    children: [
      {
        index: true,
        // path: "/app/v1/home",
        element: <Home />,
      },
      {
        path: "/app/v1/Get",
        element: <Get />,
      },
      {
        path: "/app/v1/Post",
        element: <Post />,
      },
      {
        path: "/app/v1/Project",
        element: <Project />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={AuthRouter} />
    </>
  );
};

export default App;
