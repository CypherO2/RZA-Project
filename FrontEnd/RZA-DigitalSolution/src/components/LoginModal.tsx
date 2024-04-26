import { User } from "@carbon/react/icons";
import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import LoginForm from "./LoginForm";

/* The `LoginModal` function is a React functional component that defines a modal component for a login
form. It uses state to control the visibility of the modal by toggling the `show` state between
`true` and `false`. When the user clicks on a button (represented by the `User` icon), the modal is
shown. The modal contains a login form component (`LoginForm`) and can be closed by clicking on the
close button or outside the modal area. */
function LoginModal() {
  // determines whether the modal is showing at any given time
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="tertiary" onClick={handleShow}>
        <User size="33" />
      </Button>

      <Modal data-bs-theme="dark" show={show} onHide={handleClose} centered>
        <LoginForm />
      </Modal>
    </>
  );
}
export default LoginModal;
