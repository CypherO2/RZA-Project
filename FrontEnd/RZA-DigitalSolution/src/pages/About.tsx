import { useEffect } from "react";
import { Container } from "react-bootstrap";

function AboutPage() {
  useEffect(() => {
    document.title = "Riget Zoo | About Us";
  });
  return (
    <>
      <Container></Container>
    </>
  );
}
export default AboutPage;
