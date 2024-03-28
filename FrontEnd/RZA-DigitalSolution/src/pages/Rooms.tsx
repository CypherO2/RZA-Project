import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function RoomPage() {
  useEffect(() => {
    document.title = "Riget Zoo | About Us";
  });
  return (
    <>
      <Container></Container>
    </>
  );
}
