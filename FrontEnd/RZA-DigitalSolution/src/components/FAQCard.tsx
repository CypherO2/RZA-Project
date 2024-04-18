import {
  MDBCard,
  MDBCardImage,
  MDBCardOverlay,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { Col, Row, Badge, Container, Button } from "react-bootstrap";
import "../css/components.css";

export default function FAQCard() {
  return (
    <>
      <Col className="py-1">
        <MDBCard
          className="border-rounded border-light"
          background="dark"
          style={{ width: "20rem", height: "20rem" }}
        >
          <MDBCardBody className="pb-5">
            <MDBCardTitle className="text-light text-center fw-bold">
              <h5 className="fw-bold text-light">Question</h5>
            </MDBCardTitle>
            <MDBCardText className="mb-5 text-light">
              <Container>ANSWER</Container>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </Col>
    </>
  );
}
