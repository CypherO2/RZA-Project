import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { INDEX_PATH, SIGNUP_PATH } from "../constants/paths";
import axios from "axios";
import { useContext, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AccountDetailsContext } from "./accountProvider";

// Form for Logging in
/* The `function LoginForm() {` is defining a functional component in React. This component represents
a login form that allows users to enter their username and password to log in. Inside the component,
it uses hooks like `useState` to manage the state of the username, password, and response text. It
also uses the `useContext` hook to access the `AccountDetailsContext` which stores account
information. */
function LoginForm() {
  // determines if the person if logged in
  const accountDetailsContext = useContext(AccountDetailsContext);
  // username and password + response text and force re-nav is stored here
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseText, setResponseText] = useState("");
  const navigate = useNavigate();

  //ensures info is ok to query the development environment
  /* The `const handleSubmit = async (event: FormEvent) => {` function is defining an asynchronous
  function in JavaScript. This function is responsible for handling the form submission event in the
  login form. When the form is submitted, this function is triggered. */
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setResponseText("");
    if (!username.match(/^[0-9a-zA-Z]+$/)) {
      setResponseText("Username Not Alphanumeric");
      return;
    }
    if (
      !password.match(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9@#$%^_&-+=]+){5,16}$/
      )
    )
      console.log(password);
      // query dev environment
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username: username,
        password: password,
      });
      setResponseText(response.data["message"]);
      // console.log(response?.data)
      if (response?.data["success"]) {
        accountDetailsContext?.setAccountDetails({
          username,
          password,
          role: response?.data["role"],
        });
        navigate(INDEX_PATH);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setResponseText(error.message);
      } else {
        setResponseText(String(error));
      }
    }
  };
  return (
    <div className="">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard className="bg-dark text-white my-auto mx-auto">
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Username"
                id="formControlLg"
                type="username"
                size="lg"
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
              />

              <p className="small mb-3 pb-lg-2">
                <a className="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <MDBBtn
                outline
                className="mx-2 px-5 my-2"
                color="warning"
                size="lg"
                onClick={handleSubmit}
              >
                Login
              </MDBBtn>

              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <a href={SIGNUP_PATH} className="text-white-50 fw-bold">
                    Sign Up
                  </a>
                </p>
                {responseText && (
                  <p className="text-white">Response: {responseText}</p>
                )}
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default LoginForm;
