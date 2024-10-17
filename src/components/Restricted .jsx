import { useState } from "react";

const Restricted = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  if (!isLoggedIn) return;
  return <> {children} </>;
};

export default Restricted;
