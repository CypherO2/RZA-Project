import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function CookiePolicy() {
    useEffect(() => {
      document.title = "Riget Zoo | Cookie Policy";
    });
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col xs="6">
            <h1 className="py-4 fw-bold">Cookies Policy</h1>
            <p>
              Cookies used by Riget Zoo Adventures are not present to gather and
              use personally identifiable information from its users. Some of
              the cookies we use are necessary for site functionality and some
              of the cookies help improve your interactions with the site or
              provide us with non-personally identifiable data which will enable
              us to do so.
            </p>
            <p>
              It is possible for you to stop or restrict the cookies set by
              Chester Zoo by clicking on the Blue Shield at the bottom left of
              your screen and changing your cookie preferences. However this
              might affect the functionality of the site. For more data on
              cookies visit{" "}
              <a href="https://www.aboutcookies.org">www.aboutcookies.org</a>.{" "}
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
export default CookiePolicy;
