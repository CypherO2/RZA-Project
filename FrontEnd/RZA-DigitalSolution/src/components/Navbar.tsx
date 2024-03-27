import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../assets/RZA2.png";
import { Menu } from "@carbon/react/icons";

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
              width="300"
              height="80"
              className="d-inline-block align-top rounded"
              alt="Logo"
            />
          </Navbar.Brand>
          <Nav></Nav>
          <Nav>
            <NavDropdown
              title={<Menu size="40" />}
              className="text-center"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
