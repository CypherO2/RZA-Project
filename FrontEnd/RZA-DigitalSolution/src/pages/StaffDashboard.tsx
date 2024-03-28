import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function StaffDashboard() {
  useEffect(() => {
    document.title = "Riget Zoo | Staff Dashboard";
  });
  return (
    <>
      <Container></Container>
    </>
  );
}
