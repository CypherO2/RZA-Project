import { useState } from "react";

function usePassword() {
  // storing Password
  const storedPassword = localStorage.getItem("password");
  const [password, setPassword] = useState(
    storedPassword ? storedPassword : ""
  );
  const savePassword = (password: string) => {
    localStorage.setItem("password", password);
    setPassword(password);
  };
  return { password, setPassword: savePassword };
}
export default usePassword;
