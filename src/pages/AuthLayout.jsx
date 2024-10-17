import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
const AuthLayout = () => {
  useEffect(() => {
    const data = async () => {
      const res = await axios.post(
        "https://backend-service-two.vercel.app/app/v1/signin",
        {
          username: "v23",
          password: "12345678",
        },
        { withCredentials: true }
      );

      // console.log(res)
    };

    data();

    return () => data();
  }, []);

  async function getNotes() {
    const res = await axios.get(
      `https://backend-service-two.vercel.app/app/v1/seenotes`
    );
    console.log(res);
  }

  return (
    <div className="h-screen max-w-7xl p-text capitalize">
      <div>hello world</div>
      <button
        onClick={(e) => {
          e.preventDefault();
          getNotes();
        }}
      >click me</button>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
