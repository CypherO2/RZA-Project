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

/* The line `export default function FAQCard() {` is exporting a default function named `FAQCard`. This
function is a React functional component that renders a FAQ card with a question and answer section.
The component uses various UI components from MDBReactUIKit and React Bootstrap libraries to create
the card layout. The question is displayed in a card title, and the answer is displayed in the card
text section. The component is styled using CSS classes defined in the components.css file. */
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
