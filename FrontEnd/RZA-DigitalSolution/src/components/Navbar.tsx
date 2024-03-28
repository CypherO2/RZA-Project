import { Navbar, Container, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import Logo from "../assets/RZA2.png";
import LoginModal from "./LoginModal";
import { Menu } from "@carbon/react/icons";
import {
  ABOUT_PATH,
  CONTACTS_PATH,
  FAQ_PATH,
  LEARN_PATH,
  ROOM_PATH,
  STORE_PATH,
} from "../constants/paths";

function NavBar() {
  // const themeContext = useContext(ThemeContext);

  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="fw-bold sticky-top bg-body-tertiary"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="240"
              height="60"
              className="d-inline-block align-top rounded"
              alt="Logo"
            />
          </Navbar.Brand>
          <Nav></Nav>
          <Nav>
            <LoginModal />

            <Dropdown>
              <Dropdown.Toggle variant="tertiary" id="dropdown-basic">
                <Menu size="40" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href={ABOUT_PATH}>About Us</Dropdown.Item>
                <Dropdown.Item href={CONTACTS_PATH}>Contact Us</Dropdown.Item>
                <Dropdown.Item href={ROOM_PATH}>Rooms</Dropdown.Item>
                <Dropdown.Item href={STORE_PATH}>Store</Dropdown.Item>
                <Dropdown.Item href={LEARN_PATH}>RZA Learning</Dropdown.Item>
                <Dropdown.Item href={FAQ_PATH}>FAQ</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
