import { useEffect } from "react";
import { Container } from "react-bootstrap";

function FAQ() {
  useEffect(() => {
    document.title = "Riget Zoo | FAQ";
  });
  return (
    <>
      <Container></Container>
    </>
  );
}
export default FAQ;
