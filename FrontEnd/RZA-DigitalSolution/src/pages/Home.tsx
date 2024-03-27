import { Container, Row } from "react-bootstrap";
import HomeCarousel from "../components/HomeCarousel";
import PHContent from "../components/PlaceholderContent";

function Homepage() {
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
