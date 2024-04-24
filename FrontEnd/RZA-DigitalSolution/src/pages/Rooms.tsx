import { useEffect } from "react";
import { Container } from "react-bootstrap";
import RoomCards from "../components/RoomCards";

/* The `export default function RoomPage() {` statement is exporting a default function named
`RoomPage`. This function is a React component that represents a page in a TypeScript React
application. It may contain JSX elements and logic related to rendering a specific part of the
application, in this case, the RoomPage. This function can be imported and used in other parts of
the application. */
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
