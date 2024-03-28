import { Container, Row } from "react-bootstrap";
import HomeCarousel from "../components/HomeCarousel";
import PHContent from "../components/PlaceholderContent";
import { useEffect } from "react";

function Homepage() {
  useEffect(() => {
    document.title = "Riget Zoo | Home";
  });
  return (
    <>
      <HomeCarousel />
      <Container>
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
