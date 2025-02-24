import {
  MDBCard,
  MDBCardImage,
  MDBCardOverlay,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { Badge, Button, Container, Row } from "react-bootstrap";
import { BasketContext } from "./BasketProvider";
import { useContext } from "react";
import Room1 from "../assets/Room1.png";
import Room2 from "../assets/Room2.png";
import Room3 from "../assets/Room3.png";
import Room4 from "../assets/Room4.png";
import Room5 from "../assets/room5.png";
import { BOOKING_PATH } from "../constants/paths";

export default function RoomCards() {
  const basketContext = useContext(BasketContext);
  return (
    <>
      <Container>
        <div className="d-block py-2 align-self-center">
          <Row>
            <MDBCard
              className="border-rounded border-light px-2 py-1"
              bg="dark"
              style={{ width: "25rem", height: "23rem" }}
            >
              <MDBCardImage
                src={Room1}
                height="350"
                className="darkened-image rounded"
                position="top"
                alt="A Single room with 2 beds"
              />
              <MDBCardOverlay>
                <MDBCardBody className="pb-5 mask">
                  <MDBCardTitle className="text-light fw-bold">
                    <Row>
                      <h4 className="fw-bold m-2">Single Room | 1 Bed</h4>
                    </Row>
                  </MDBCardTitle>

                  <MDBCardText className="mb-5 text-light"></MDBCardText>
                  <Container className="py-2 pb-4 mx-1 px-1 text-white position-absolute bottom-0 fw-bold fs-5">
                    £258/ Night
                    <Button
                      href={BOOKING_PATH}
                      style={{ color: "#fa8203" }}
                      className="text-light fw-bold px-4 mx-4"
                    >
                      <h6 className="my-1 px-2">Book Room</h6>
                    </Button>
                  </Container>
                </MDBCardBody>
              </MDBCardOverlay>
            </MDBCard>
            <MDBCard
              className="border-rounded border-light px-2 py-1"
              bg="dark"
              style={{ width: "25rem", height: "23rem" }}
            >
              <MDBCardImage
                src={Room2}
                height="350"
                className="darkened-image rounded"
                position="top"
                alt="A Double Bedroom with 1 Bed"
              />
              <MDBCardOverlay>
                <MDBCardBody className="pb-5 mask">
                  <MDBCardTitle className="text-light fw-bold">
                    <Row>
                      <h4 className="fw-bold m-2">Double Room | 1 Bed</h4>
                    </Row>
                  </MDBCardTitle>

                  <MDBCardText className="mb-5 text-light"></MDBCardText>
                  <Container className="py-2 pb-4 mx-1 px-1 text-white position-absolute bottom-0 fw-bold fs-5">
                    £258/ Night
                    <Button
                      href={BOOKING_PATH}
                      style={{ color: "#fa8203" }}
                      className="text-light fw-bold px-4 mx-4"
                    >
                      <h6 className="my-1 px-2">Book Room</h6>
                    </Button>
                  </Container>
                </MDBCardBody>
              </MDBCardOverlay>
            </MDBCard>
            <MDBCard
              className="border-rounded border-light px-2 py-1"
              bg="dark"
              style={{ width: "25rem", height: "23rem" }}
            >
              <MDBCardImage
                src={Room3}
                height="350"
                className="darkened-image rounded"
                position="top"
                alt="A Double Bedroom with 2 Beds"
              />
              <MDBCardOverlay>
                <MDBCardBody className="pb-5 mask">
                  <MDBCardTitle className="text-light fw-bold">
                    <Row>
                      <h4 className="fw-bold m-2">Double Room | 2 Beds</h4>
                    </Row>
                  </MDBCardTitle>

                  <MDBCardText className="mb-5 text-light"></MDBCardText>
                  <Container className="py-2 pb-4 mx-1 px-1 text-white position-absolute bottom-0 fw-bold fs-5">
                    £312.50/ Night
                    <Button
                      href={BOOKING_PATH}
                      style={{ color: "#fa8203" }}
                      className="text-light fw-bold px-4 mx-4"
                    >
                      <h6 className="my-1 px-2">Book Room</h6>
                    </Button>
                  </Container>
                </MDBCardBody>
              </MDBCardOverlay>
            </MDBCard>
            <MDBCard
              className="border-rounded border-light px-2 py-1"
              bg="dark"
              style={{ width: "25rem", height: "23rem" }}
            >
              <MDBCardImage
                src={Room4}
                height="350"
                className="darkened-image rounded"
                position="top"
                alt="A King sized Bedroom with 1 Bed"
              />
              <MDBCardOverlay>
                <MDBCardBody className="pb-5 mask">
                  <MDBCardTitle className="text-light fw-bold">
                    <Row>
                      <h4 className="fw-bold m-2">King Room | 1 Bed</h4>
                    </Row>
                  </MDBCardTitle>

                  <MDBCardText className="mb-5 text-light"></MDBCardText>
                  <Container className="py-2 pb-4 mx-1 px-1 text-white position-absolute bottom-0 fw-bold fs-5">
                    £267.67/ Night
                    <Button
                      href={BOOKING_PATH}
                      style={{ color: "#fa8203" }}
                      className="text-light fw-bold px-4 mx-4"
                    >
                      <h6 className="my-1 px-2">Book Room</h6>
                    </Button>
                  </Container>
                </MDBCardBody>
              </MDBCardOverlay>
            </MDBCard>
            <MDBCard
              className="border-rounded border-light px-2 py-1"
              bg="dark"
              style={{ width: "25rem", height: "23rem" }}
            >
              <MDBCardImage
                src={Room5}
                height="350"
                className="darkened-image rounded"
                position="top"
                alt="A Queen sized Bedroom with 1 Bed"
              />
              <MDBCardOverlay>
                <MDBCardBody className="pb-5 mask">
                  <MDBCardTitle className="text-light fw-bold">
                    <Row>
                      <h4 className="fw-bold m-2">Queen Room | 1 Bed</h4>
                    </Row>
                  </MDBCardTitle>

                  <MDBCardText className="mb-5 text-light"></MDBCardText>
                  <Container className="py-2 pb-4 mx-1 px-1 text-white position-absolute bottom-0 fw-bold fs-5">
                    £156.50/ Night
                    <Button
                      href={BOOKING_PATH}
                      style={{ color: "#fa8203" }}
                      className="text-light fw-bold px-4 mx-4"
                    >
                      <h6 className="my-1 px-2">Book Room</h6>
                    </Button>
                  </Container>
                </MDBCardBody>
              </MDBCardOverlay>
            </MDBCard>
          </Row>
        </div>
      </Container>
    </>
  );
}
