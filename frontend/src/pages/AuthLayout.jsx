
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth-layout px-5">
      <div className="right hidden  h-screen relative   md:w-[45%] lg:w-[77.33%] md:flex md:flex-col md:gap-6 ">
        <div className="relative w-full overflow-auto text-center text-text-white-500">
          <p className="p-text ">Hey there</p>
          <h1 className="h1-bold">Welcome to the backend Service</h1>
          <p className="h2-small">Please login to use services</p>
        </div>
        <div className=" h-[80%] md:h-[75%] w-full relative overflow-hidden rounded-2xl bg-red">
          <video className="h-full w-full relative object-fill 
          " autoPlay muted loop>
            <source src="https://cdn.pixabay.com/video/2024/03/23/205286-926737056_large.mp4" />
          </video>
        </div>
      </div>
      <div className="relative w-full md:w-[55%] lg:w-1/2">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
