import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function DashboardPage() {
  useEffect(() => {
    document.title = "Riget Zoo | Dashboard";
  });
  return <><Container></Container></>;
}
