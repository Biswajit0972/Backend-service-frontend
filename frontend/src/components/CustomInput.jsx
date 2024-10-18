const CustomInput = ({
  className,
  type = "text",
  register,
  filedname = "add text",
  placeholder,
  errors,
  inputClassName,
  errorsClassName,
}) => {
  return (
    <div className={`${className} w-full relative  mb-2 text-md text-[#eeee]`}>
      <input
        type={type}
        placeholder={placeholder}
        {...register(filedname, { required: true })}
        className={`${inputClassName} outline-none border-0 shadow-inner  shadow-black bg-transparent `}
      />
      {errors?.filedname && <p className={errorsClassName}>{errors?.filedname?.message}</p>}
    </div>
  );
};

export default CustomInput;
