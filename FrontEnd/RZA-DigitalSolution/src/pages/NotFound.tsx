import { useEffect } from "react";
import { Image, Col, Row, Container } from "react-bootstrap";
import Logo from "../assets/RZA2.png";

/* The `function Error() {` is defining a functional component named `Error`. This component is
responsible for rendering the content of the error page, including setting the document title to
"Riget Zoo | Error 404: Page Not Found" using the `useEffect` hook. The component displays an error
message "Error 404: Page Not Found", an image logo, and an embedded GIF using React Bootstrap
components and HTML elements. */
function Error() {
  useEffect(() => {
    document.title = "Riget Zoo | Error 404: Page Not Found";
  });
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-dark mt-5 pt-5">Error 404:</h1>
            <h3 className="mb-5 pb-5 text-secondary">Page Not Found</h3>
          </Col>
          <Col></Col>
          <Col>
            <Image
              src={Logo}
              alt="Logo"
              style={{ height: "100px", width: "250px" }}
              className="mt-5 pt-5"
              fluid
            />
          </Col>
        </Row>
        <Row>
          <iframe
            src="https://giphy.com/embed/13d2jHlSlxklVe"
            width="600"
            height="500"
            frameBorder="0"
            className="giphy-embed my-4"
            allowFullScreen
          ></iframe>
        </Row>
      </Container>
    </>
  );
}
export default Error;
