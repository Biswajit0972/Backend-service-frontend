import { useForm } from "react-hook-form";
import CustomFrom from "../components/CustomFrom";
import CustomInput from "../components/CustomInput";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      index: "v2345",
      password: "12345678",
    },
  });

  const navigate = useNavigate();

  const submitFrom = async (formData) => {
    const res = await axios.post(
      "http://localhost:4000/signin",
      {
        username: formData.index,
        password: formData.password,
      },
      { withCredentials: true }
    );
    console.log(res);
    console.log(formData);
    // navigate("/app/v1")
  };

  return (
    <div className="h-screen w-full relative flex  flex-col items-center overflow-hidden p-5">
      <div className="w-full h-[15%] relative flex-center overflow-hidden py-2  cursor-none">
        <div className="w-1/2 h-full rounded-xl overflow-hidden shadow-md shadow-slate-600">
          <video autoPlay muted loop className="w-full h-full object-fill">
            <source src="https://cdn.pixabay.com/video/2022/11/09/138370-769235235_large.mp4" />
          </video>
        </div>
      </div>

      <CustomFrom
        className="w-full  mt-3 px-5 top-1/3  -translate-y-2/4 "
        onSubmit={handleSubmit(submitFrom)}
      >
        <CustomInput
          register={register}
          placeholder="Enter email or username"
          filedname="index"
          errors={errors}
          className="w-full mb-2"
          inputClassName="w-full h-12 rounded-xl px-4"
          errorsClassName="text-md text-red-500"
        />
        <CustomInput
          register={register}
          placeholder="Enter your password "
          filedname="password"
          errors={errors}
          className="w-full mb-2"
          inputClassName="w-full h-12 rounded-xl px-4"
          errorsClassName="text-md text-red-500"
        />
        <div className="w-full  flex items-center font-prime flex-space text-text-white-500 ">
          <p className="text-text-white-500 ">
            Forgot your password?
            <span className="ml-2">click here</span>
          </p>
          <div className="text-center">
            <p>don't have account?</p>
            <NavLink to="/signup">Click here</NavLink>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-red h-12 text-xl font-prime font-bold rounded-lg mt-4 text-[#EEEEEE] hover:scale-[0.955]"
        >
          Login
        </button>
      </CustomFrom>
    </div>
  );
};

export default Login;
