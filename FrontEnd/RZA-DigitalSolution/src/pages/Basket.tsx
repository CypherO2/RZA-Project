import { Container } from "react-bootstrap";
import AhAhAh from "../assets/AhAhAh.gif";
import { useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";

/* The `export default function Basket() {` statement is defining a functional component named `Basket`
that is being exported as the default export from this module. This component represents a section
of a web page related to the checkout and payment process. It includes JSX elements for displaying
saved cards, adding new cards, and a button for adding a new card. The component also sets the
document title to "Riget Zoo | Basket" using the `useEffect` hook. */
export default function Basket() {
  useEffect(() => {
    document.title = "Riget Zoo | Basket";
  });
  return (
    <>
      <MDBContainer className="py-5" fluid>
        <MDBRow className=" d-flex justify-content-center">
          <MDBCol md="10" lg="8" xl="5">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <div className="text-center mb-4">
                  <h3>Checkout</h3>
                  <h6>Payment</h6>
                </div>
                <p className="fw-bold mb-4 pb-2">Saved cards:</p>
                <div className="d-flex flex-row align-items-center mb-4 pb-1">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  />
                  <div className="flex-fill mx-3">
                    <div className="form-outline">
                      <MDBInput
                        label="Card Number"
                        id="form1"
                        type="text"
                        size="lg"
                        value="**** **** **** 3193"
                      />
                    </div>
                  </div>
                  <a href="#!">Remove card</a>
                </div>
                <div className="d-flex flex-row align-items-center mb-4 pb-1">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/color/48/000000/visa.png"
                  />
                  <div className="flex-fill mx-3">
                    <div className="form-outline">
                      <MDBInput
                        label="Card Number"
                        id="form2"
                        type="text"
                        size="lg"
                        value="**** **** **** 4296"
                      />
                    </div>
                  </div>
                  <a href="#!">Remove card</a>
                </div>
                <p className="fw-bold mb-4">Add new card:</p>
                <MDBInput
                  label="Cardholder's Name"
                  id="form3"
                  type="text"
                  size="lg"
                />
                <MDBRow className="my-4">
                  <MDBCol size="7">
                    <MDBInput
                      label="Card Number"
                      id="form4"
                      type="text"
                      size="lg"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBInput
                      label="Expire"
                      id="form5"
                      type="password"
                      size="lg"
                      placeholder="MM/YYYY"
                    />
                  </MDBCol>
                  <MDBCol size="2">
                    <MDBInput
                      label="CVV"
                      id="form6"
                      type="password"
                      size="lg"
                      placeholder="CVV"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBBtn color="success" size="lg" block>
                  Add card
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* <h1 className="fw-bold">
          This Page Exists | Due to the nature of this site we cannot accept
          Payments at this time.
        </h1>
        <h2 className="text-secondary">
          We apologise for any inconnvience this may cause you.
        </h2>
        <h4 className="pb-3" style={{ fontFamily: "cursive" }}>
          <span style={{ color: "fa8203" }}>
            - The Riget Zoo Adventure Team
          </span>
        </h4>
        <img
          className="center-block my-4"
          src={AhAhAh}
          alt="This Page is Unavaliable Right Now!"
          style={{ height: "20rem" }}
        /> */}
    </>
  );
}
