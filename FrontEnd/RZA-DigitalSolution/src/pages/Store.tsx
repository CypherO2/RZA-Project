import { useEffect } from "react";
import { Container } from "react-bootstrap";

function StorePage() {
  useEffect(() => {
    document.title = "Riget Zoo | Store Portal";
  });
  return (
    <>
      <Container></Container>
    </>
  );
}
export default StorePage;
