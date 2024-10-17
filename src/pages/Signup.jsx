import { useForm } from "react-hook-form";
import CustomFrom from "../components/CustomFrom";
import { NavLink } from "react-router-dom";
import CustomInput from "../components/CustomInput";


const Signup = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);
  };

  return (
    <div className="h-screen w-full relative flex flex-col items-center overflow-hidden p-5">
      <div className="w-full h-[15%] relative flex-center overflow-hidden py-2 cursor-none">
        <div className="w-1/2 h-full rounded-xl overflow-hidden shadow-md shadow-slate-600">
          <video autoPlay muted loop className="w-full h-full object-fill">
            <source src="https://cdn.pixabay.com/video/2022/11/09/138370-769235235_large.mp4" />
          </video>
        </div>
      </div>

      <CustomFrom
        className="w-full mt-3 px-5 top-1/3 -translate-y-2/4"
        onSubmit={handleSubmit(submitForm)}
      >
        <CustomInput
          register={register}
          placeholder="Enter username"
          filedname="username"
          errors={errors}
          className="w-full mb-2"
          inputClassName="w-full h-12 rounded-xl px-4"
          errorsClassName="text-md text-red-500"
        />
        <CustomInput
          register={register}
          placeholder="Enter fullname"
          filedname="fullname"
          errors={errors}
          className="w-full mb-2"
          inputClassName="w-full h-12 rounded-xl px-4"
          errorsClassName="text-md text-red-500"
        />
        <CustomInput
          register={register}
          placeholder="Enter email"
          filedname="email"
          errors={errors}
          className="w-full mb-2"
          inputClassName="w-full h-12 rounded-xl px-4"
          errorsClassName="text-md text-red-500"
        />
        <CustomInput
          register={register}
          placeholder="Enter your password"
          filedname="password"
          errors={errors}
          className="w-full mb-2"
          inputClassName="w-full h-12 rounded-xl px-4"
          errorsClassName="text-md text-red-500"
          type="text"
        />
        <div className="w-full flex items-center font-prime flex-space text-text-white-500">
          <p className="text-text-white-500">Already have an account? 
            <NavLink to="/" className="ml-2">Login here</NavLink>
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-red h-12 text-xl font-prime font-bold rounded-lg mt-4 text-[#EEEEEE] hover:scale-[0.955]"
        >
          Register
        </button>
      </CustomFrom>
    </div>
  );

}

export default Signup