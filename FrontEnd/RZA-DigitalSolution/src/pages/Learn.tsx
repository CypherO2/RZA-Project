import { useEffect } from "react";
import { Container } from "react-bootstrap";

function LearningPage() {
  useEffect(() => {
    document.title = "Riget Zoo | Learner Resources";
  });
  return (
    <>
      <Container></Container>
    </>
  );
}
export default LearningPage;
