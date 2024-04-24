import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import LearningResources from "../components/ResourcesCards";

/* The `LearningPage` function is a React functional component that represents a page in a React
application. Within this function, the `useEffect` hook is used to set the document title to "Riget
Zoo | Learner Resources" when the component mounts. */
function LearningPage() {
  useEffect(() => {
    document.title = "Riget Zoo | Learner Resources";
  });
  return (
    <>
      <Container className="py-4">
        <h1 className="text-center fw-bold">Learning Resources</h1>
        <h3 className="text-center text-secondary fw-bold">
          Resources provided by RZA and our partners to be given to the general
          public for educational use.
        </h3>
        <Row>
          <LearningResources />
          <LearningResources />
        </Row>
        <Row>
          <LearningResources />
          <LearningResources />
        </Row>
        <Row>
          <LearningResources />
          <LearningResources />
        </Row>
        <Row>
          <LearningResources />
          <LearningResources />
        </Row>
        <Row>
          <LearningResources />
          <LearningResources />
        </Row>
        <Row>
          <LearningResources />
          <LearningResources />
        </Row>
        <Row>
          <LearningResources />
          <LearningResources />
        </Row>
        <Row>
          <LearningResources />
          <LearningResources />
        </Row>
        <Row>
          <LearningResources />
          <LearningResources />
        </Row>
        <Row>
          <LearningResources />
          <LearningResources />
        </Row>
      </Container>
    </>
  );
}
export default LearningPage;
