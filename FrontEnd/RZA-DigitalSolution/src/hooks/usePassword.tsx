import { useState } from "react";

/* The `usePassword` function is a custom hook in React that is used to manage and store a password in
the local storage of the browser. */
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
// exporting function
export default usePassword;
