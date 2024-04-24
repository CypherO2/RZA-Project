import { Container, Row } from "react-bootstrap";
import HomeCarousel from "../components/HomeCarousel";
import PHContent from "../components/PlaceholderContent";
import { useEffect } from "react";
import "../css/components.css";

/* The `function Homepage() {` is defining a functional component in React. This component represents
the homepage of the website and contains JSX elements that will be rendered on the page. Within this
component, there is also a `useEffect` hook that sets the document title to "Riget Zoo | Home" when
the component mounts. The component returns a JSX structure that includes a `HomeCarousel` component
and multiple instances of the `PHContent` component wrapped in `Container` and `Row` components from
React Bootstrap. */
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
