import { TITLES } from "../constants/other";
import { COUNTRY_DROPDOWN_OPTIONS } from "../constants/Countries";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/RZA2.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, FormEvent, useContext } from "react";
import { INDEX_PATH } from "../constants/paths";
import { AccountDetailsContext } from "./accountProvider";

function ListTitles() {
  return (
    <>
      {TITLES.map((item, index) => {
        return <option value={index}>{item}</option>;
      })}
    </>
  );
}

function ListCountries() {
  return (
    <>
      {COUNTRY_DROPDOWN_OPTIONS.map((item, index) => {
        return <option value={index}>{item}</option>;
      })}
    </>
  );
}

export default function BookingForm() {
  const accountDetailsContext = useContext(AccountDetailsContext);
  const navigate = useNavigate();
  const [responseText, setResponseText] = useState("");
  const [reservationName, setReservationName] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setResponseText("");
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
      <Container className="rounded-corners-border p-5 my-5">
        <div className="text-center p-2">
          <img
            alt="The Company/ Zoo's Logo"
            src={logo}
            className="img-fluid"
            style={{ height: "20%", width: "20%" }}
          />
        </div>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="pt-2">Reservation Name</Form.Label>
          <Row>
            <Col sm={2}>
              <Form.Select aria-label="Default select example" onSubmit={}>
                <option>Title</option>
                <ListTitles />
              </Form.Select>
            </Col>
            <Col>
              <Form.Control type="name" placeholder="Enter Forename" required />
            </Col>
            <Col>
              <Form.Control type="name" placeholder="Enter Surname" required />
            </Col>
          </Row>
          <Form.Text className="text-muted">
            This is so we can identify you when you arrive.
          </Form.Text>
          <br />
          <Form.Label className="pt-2">Contact Details</Form.Label>
          <Row>
            <Col>
              <Form.Control type="email" placeholder="Enter email" required />
            </Col>
            <Col>
              <Form.Control
                type="phone"
                placeholder="Enter phone number"
                required
              />
            </Col>
          </Row>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Container>
    </>
  );
}
