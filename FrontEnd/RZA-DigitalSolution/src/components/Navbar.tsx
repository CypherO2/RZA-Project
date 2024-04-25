import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import Logo from "../assets/RZA2.png";
import LoginModal from "./LoginModal";
import { Menu, Home } from "@carbon/react/icons";
import {
  ABOUT_PATH,
  CHECKOUT_PATH,
  CONTACTS_PATH,
  FAQ_PATH,
  LEARN_PATH,
  PROFILE_PATH,
  ROOM_PATH,
  STORE_PATH,
} from "../constants/paths";
import { useContext, useState } from "react";
import { BasketContext } from "./BasketProvider";
import { AccountDetailsContext } from "./accountProvider";
import { User } from "@carbon/react/icons";

/* The `Log()` function is a conditional display function that checks if the user is logged in or not.
It uses the `useContext` hook to access the `AccountDetailsContext` which presumably holds
information about the user's account details. */
function Log() {
  const accountDetailsContext = useContext(AccountDetailsContext);
  if (Object.is(accountDetailsContext?.accountDetails, null)) {
    return <LoginModal />;
  } else {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="tertiary" id="dropdown-basic">
          <User size="40" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href={PROFILE_PATH}>
            Username:{" "}
            <span className="fw-bold">
              {accountDetailsContext?.accountDetails?.username}
            </span>
          </Dropdown.Item>
          <Dropdown.Item href={PROFILE_PATH}>
            Membership:{" "}
            <span className="fw-bold text-success">
              {accountDetailsContext?.accountDetails?.membership}
            </span>
          </Dropdown.Item>
          <Dropdown.Item href={CHECKOUT_PATH}>Basket</Dropdown.Item>
          <Dropdown.Item
            href="/"
            onClick={() => accountDetailsContext?.setAccountDetails(null)}
          >
            <span className="text-danger fw-bold">Sign Out</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

/* The `NavBar` function is a React functional component that defines the structure and content of a
navigation bar for a website. Inside the `NavBar` function, the component is using various
components and elements from the `react-bootstrap` library to create a responsive navigation bar. */
function NavBar() {
  const basketContext = useContext(BasketContext);
  console.log();
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="fw-bold sticky-top bg-body-tertiary"
        expand="lg"
      >
        <Container>
          <Nav>
            <Button variant="tertiary" href="/">
              <Home size="40" />
            </Button>
          </Nav>
          <Navbar.Brand className="mx-5" href="/">
            <img
              src={Logo}
              width="250"
              height="60"
              className="mx-5"
              alt="Company / Zoo's Logo"
            />
          </Navbar.Brand>
          <Nav>
            <Log />

            <Dropdown>
              <Dropdown.Toggle variant="tertiary" id="dropdown-basic">
                <Menu size="40" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href={ABOUT_PATH}>About Us</Dropdown.Item>
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
