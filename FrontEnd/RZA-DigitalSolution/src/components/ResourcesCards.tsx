import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { Button, Col, Placeholder } from "react-bootstrap";
import { Download } from "@carbon/react/icons";

export default function LearningResources() {
  return (
    <>
      <Col>
        <MDBCard shadow="0" border="info" background="white" className="my-2">
          <MDBCardBody>
            <MDBCardTitle className="fw-bold">
              <Placeholder className="py-2 text-dark fs-2" animation="glow">
                <Placeholder xs={3} />
              </Placeholder>
            </MDBCardTitle>
            <MDBRow>
              <MDBCol>
                <MDBCardText>
                  <Placeholder className="py-2 text-dark" animation="glow">
                    <Placeholder xs={3} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={1} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={5} /> <Placeholder xs={1} />{" "}
                  </Placeholder>
                </MDBCardText>
              </MDBCol>
              <MDBCol>
                <Button
                  className="text-light fw-bold px-3"
                  variant="outline-danger"
                  style={{ width: "10rem" }}
                >
                  <h6 className="my-1 px-2 align-middle text-dark fw-bold">
                    <Download size="30" />
                  </h6>
                </Button>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </Col>
    </>
  );
}
