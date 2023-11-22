import { useState } from "react";

const useName = (initialName) => {
  const [userName, setUserName] = useState(initialName);
  const handleUserName = (e) => setUserName([e.target.value]);
  return [userName, handleUserName];
};

export default useName;
