import { useEffect } from "react";
import { Container } from "react-bootstrap";
import RoomCards from "../components/RoomCards";

export default function RoomPage() {
  useEffect(() => {
    document.title = "Riget Zoo | About Us";
  });
  return (
    <>
      <Container>
        <RoomCards />
      </Container>
    </>
  );
}
