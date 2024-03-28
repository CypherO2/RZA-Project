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

function LoginModal() {
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
        {/* 
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
export default LoginModal;
