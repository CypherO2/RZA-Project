import { useState } from "react";

function useUsername() {
  // storing Username
  const storedUsername = localStorage.getItem("username");
  const [username, setUsername] = useState(
    storedUsername ? storedUsername : ""
  );
  const saveUsername = (username: string) => {
    localStorage.setItem("username", username);
    setUsername(username);
  };
  return { username, setUsername: saveUsername };
}
export default useUsername;
