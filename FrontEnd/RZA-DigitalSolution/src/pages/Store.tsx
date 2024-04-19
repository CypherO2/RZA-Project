import { useEffect } from "react";
import { Container } from "react-bootstrap";
import RoomCards from "../components/RoomCards";

function StorePage() {
  useEffect(() => {
    document.title = "Riget Zoo | Store Portal";
  });
  return (
    <>
      <Container>
        <RoomCards />
      </Container>
    </>
  );
}
export default StorePage;
