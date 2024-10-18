const CustomFrom = ({ children, onSubmit , className}) => {
  return (
    <form className={`w-full relative ${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default CustomFrom;
