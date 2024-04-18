import { useState } from "react";

/* The `useUsername` function is a custom React hook that is used to manage and store a username in the
browser's localStorage. It initializes the username state by checking if there is a stored username
in the localStorage, and if not, it sets the initial state to an empty string. The function also
provides a `saveUsername` function that allows updating and saving the username to the localStorage.
Finally, it returns an object with the current username state and the `saveUsername` function to be
used in a React component. */
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
// exporting function
export default useUsername;
