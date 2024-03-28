import { useEffect } from "react";
import { Container } from "react-bootstrap";

function ContactPage() {
  useEffect(() => {
    document.title = "Riget Zoo | Contact Us";
  });
  return <><Container></Container></>;
}
export default ContactPage;
