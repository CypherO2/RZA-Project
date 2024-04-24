import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import FAQCard from "../components/FAQCard";
import { Query } from "@carbon/react/icons";

/* The `function FAQ() {` is defining a functional component named `FAQ`. This component is responsible
for rendering a FAQ page that displays frequently asked questions using `FAQCard` components. Inside
the component, there is a `useEffect` hook that sets the document title to "Riget Zoo | FAQ" when
the component mounts. */
function FAQ() {
  useEffect(() => {
    document.title = "Riget Zoo | FAQ";
  });
  return (
    <>
      <Container className="py-4">
        <h1
          className="my-4 text-center fw-bold px-5 pb-3"
          style={{
            color: "#fa8203",
          }}
        >
          <Query size="40" />
          <span className="fw-bold text-dark"> FAQ</span>
        </h1>
        <Row className="py-1">
          <FAQCard />
          <FAQCard />
          <FAQCard />
        </Row>
        <Row className="py-1">
          <FAQCard />
          <FAQCard />
          <FAQCard />
        </Row>
        <Row className="py-1">
          <FAQCard />
          <FAQCard />
          <FAQCard />
        </Row>
        <Row className="py-1">
          <FAQCard />
          <FAQCard />
          <FAQCard />
        </Row>
      </Container>
    </>
  );
}
export default FAQ;
