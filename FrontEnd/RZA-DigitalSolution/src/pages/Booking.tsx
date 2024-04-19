import { useEffect } from "react";
import { Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import { COUNTRY_DROPDOWN_OPTIONS } from "../constants/Countries";

function List() {
  return (
    <>
      {COUNTRY_DROPDOWN_OPTIONS.map((item, index) => {
        return <option value={index}>{item}</option>;
      })}
    </>
  );
}

export default function Booking() {
  useEffect(() => {
    document.title = "Riget Zoo | Booking Form";
  });
  return (
    <>
      <Container>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="pt-2">Full Name</Form.Label>
          <Row>
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
          <br />
          <Form.Label className="pt-2">1st Line of Address</Form.Label>
          <Form.Control
            type="address"
            placeholder="Enter your Address"
            required
          />
          <br />
          <Form.Control type="address" placeholder="Enter your Address" />
          <br />
          <Row>
            <Col>
              <Form.Control
                type="county"
                placeholder="Enter your Postcode"
                required
              />
            </Col>
            <Col>
              <Form.Control type="postcode" placeholder="Enter your County" />
            </Col>
            <Col>
              <Form.Select aria-label="Default select example">
                <option>Choose Your Country</option>
                <List />
              </Form.Select>
            </Col>
          </Row>
          <Form.Text className="text-muted">
            We'll never share this with anyone.
          </Form.Text>
        </Form.Group>
      </Container>
    </>
  );
}
