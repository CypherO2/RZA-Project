import { Container, Row } from "react-bootstrap";
import HomeCarousel from "../components/HomeCarousel";
import PHContent from "../components/PlaceholderContent";
import { useEffect } from "react";
import "../css/components.css";

function Homepage() {
  useEffect(() => {
    document.title = "Riget Zoo | Home";
  });
  return (
    <>
      <HomeCarousel />
      <Container >
        <h1 className="my-4 text-center">
          Welcome to{" "}
          <span
            className="fw-bold fw-italic"
            style={{
              color: "#fa8203",
              textShadow:
                "-1.5px -1.5px 1 #000, 1.5px -1.5px 1 #000, -1.5px 1.5px 1 #000, 1.5px 1.5px 1 #000",
            }}
          >
            RIGET ZOO
          </span>
        </h1>
        <Row className="py-1">
          <PHContent />
        </Row>
        <Row className="py-1">
          <PHContent />
        </Row>
        <Row className="py-1">
          <PHContent />
        </Row>
        <Row className="py-1">
          <PHContent />
        </Row>
        <Row className="py-1">
          <PHContent />
        </Row>
        <Row className="py-1">
          <PHContent />
        </Row>
        <Row className="py-1">
          <PHContent />
        </Row>
      </Container>
    </>
  );
}
export default Homepage;
