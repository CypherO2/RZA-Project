import { TITLES } from "../constants/other";
import { COUNTRY_DROPDOWN_OPTIONS } from "../constants/Countries";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/RZA2.png";

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
  return (
    <>
      <Container className="border border-dark p-5 my-5">
        <div className="text-center p-2">
          <img
            alt="The Company/ Zoo's Logo"
            src={logo}
            className="img-fluid"
            style={{ height: "20%", width: "20%" }}
          />
        </div>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="pt-2">Full Name</Form.Label>
          <Row>
            <Col sm={2}>
              <Form.Select aria-label="Default select example">
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
          <br />
          <Form.Label className="pt-2">Address</Form.Label>
          <Form.Control
            type="address"
            placeholder="Enter your Address"
            required
          />
          <br />
          <Form.Control type="address" placeholder="Enter your Address" />
          <br />
          <Row>
            <Form>
              <Row>
                <Col xs={7}>
                  <Form.Control placeholder="City" />
                </Col>
                <Col>
                  <Form.Control placeholder="ZIP/ Postcode" />
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Country</option>
                    <ListCountries />
                  </Form.Select>
                </Col>
              </Row>
            </Form>
            <Col></Col>
          </Row>
          <Form.Text className="text-muted">
            We'll never share this with anyone.
          </Form.Text>
        </Form.Group>
      </Container>
    </>
  );
}
