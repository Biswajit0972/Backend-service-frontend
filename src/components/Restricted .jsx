import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Restricted = ({ children }) => {
  const naviagte = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  if (!isLoggedIn) naviagte("/");
  return <> {children} </>;
};

export default Restricted;
