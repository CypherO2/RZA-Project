/* These import statements in the TypeScript React component `StaffSignupForm` are used to bring in
various functionalities and components from different libraries and files: */
import { FormEvent, useContext, useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { AccountDetailsContext } from "./accountProvider";
import { useNavigate } from "react-router-dom";
import { INDEX_PATH } from "../constants/paths";
/* The `StaffSignupForm` function is a React functional component that represents a form for staff
signup. Here is a breakdown of what it does: */
function StaffSignupForm() {
  // Use Effect to set things for the page upon reload / load
  useEffect(() => {
    document.title = "Riget Zoo | Staff Signup";
    console.log(accountDetailsContext?.accountDetails?.role);
    if (Number(accountDetailsContext?.accountDetails?.role) < 3) {
      console.log("Redirecting");
      navigate(INDEX_PATH);
    } else if (accountDetailsContext?.accountDetails?.role === undefined) {
      console.log("Redirecting");
      navigate(INDEX_PATH);
    }
  });
  // setting constants and using usestate to allow for a robust system
  const accountDetailsContext = useContext(AccountDetailsContext);
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [responseText, setResponseText] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  // handle submit function, is asyncronous, checks username and password, and sett the response text
  /* The `const handleSubmit = async (event: FormEvent) => {` function in the `StaffSignupForm`
  component is an asynchronous function that handles the form submission event. Here is a breakdown
  of what it does: */
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setResponseText("");
    if (!username.match(/^[0-9a-zA-Z]+$/)) {
      setResponseText("Username Not Alphanumeric");
      return;
    }
    if (password !== confirmPass) {
      setResponseText("Passwords Do Not Match");
      return;
    }
    if (
      !password.match(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9@#$%^_&-+=]+){5,16}$/
      )
    ) {
      setResponseText(
        "Password Must Contain:\n- 1 Uppercase Character\n- 1 Lowercase Character\n- 1 Number"
      );
      return;
    }
    // Axios Rqst to pull data from the development server
    try {
      const response = await axios.post("http://localhost:5000/staffsignup", {
        username: username,
        password: password,
        email: email,
      });
      setResponseText(response.data["message"]);
      // console.log(response?.data);
      // if success == true : set password + username -> accountDetails
      if (response?.data["success"]) {
        accountDetailsContext?.setAccountDetails({
          username,
          password,
          membership: response?.data["membership"],
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
  // layout and appearance of the page
  return (
    <>
      <Row>
        <Col className="py-5" />
      </Row>
      <MDBContainer fluid className="">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="pt-5 mb-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                <p className="text-white-50">
                  Please enter your details below!
                </p>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      id="username"
                      required
                      type="text"
                      placeholder="Enter username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          id="password"
                          required
                          type={showPass ? "text" : "password"}
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          id="confirmpassword"
                          required
                          type={showPass ? "text" : "password"}
                          placeholder="Confirm Password"
                          onChange={(e) => setConfirmPass(e.target.value)}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group className="" controlId="formBasicUsername">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      id="email"
                      required
                      type="email"
                      placeholder="Enter Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Show Password"
                      onChange={() => setShowPass((prev) => !prev)}
                    />
                  </Form.Group>
                  <Row>
                    <Col className="d-grid gap-2">
                      <Button
                        variant="success"
                        type="submit"
                        className="border border-dark "
                      >
                        Sign Up
                      </Button>
                    </Col>
                  </Row>

                  {responseText && (
                    <p className="text-white">Response: {responseText}</p>
                  )}
                </Form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
// exporting of SignUpForm For staff
export default StaffSignupForm;
