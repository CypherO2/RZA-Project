import { FormEvent, useContext, useEffect, useState } from "react";
// imports
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
/* The `SignupForm` function is a React functional component that represents a form for user sign up.
Within this function, the component manages the state of various form fields such as username,
password, email, and confirmation password using the `useState` hook. It also utilizes the
`useEffect` hook to set the document title when the component is loaded. */
function SignupForm() {
  // sets the assets that need to be loaded immediately on reload/ load
  useEffect(() => {
    document.title = "Riget Zoo | Sign Up";
  });
  const accountDetailsContext = useContext(AccountDetailsContext);
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [responseText, setResponseText] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  // ensures that the submission is accurate before querying backend
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
// querying backend
    try {
      const response = await axios.post("http://localhost:5000/signup", {
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
        // forceful redirection
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
                    <Form.Label className="text-white">Username</Form.Label>
                    <Form.Control
                      id="username"
                      required
                      type="text"
                      placeholder="Enter username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label className="text-white">Password</Form.Label>
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
                      <Form.Group className="" controlId="formBasicEmail">
                        <Form.Label className="text-white">Email</Form.Label>
                        <Form.Control
                          id="email"
                          required
                          type="email"
                          placeholder="Enter Email Address"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                    </Row>
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
export default SignupForm;
