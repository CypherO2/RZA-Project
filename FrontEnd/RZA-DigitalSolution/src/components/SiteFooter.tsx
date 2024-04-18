import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Row } from "react-bootstrap";
import logo from "../assets/RZA2.png";

/* The `SiteFooter` function is a React functional component that defines the structure and content of
a footer section for a website. It includes various elements such as company information, address,
charity details, links to legal policies (Modern Slavery Act, Privacy Policy, Cookie Policy, Terms
and Conditions), and social media links (Github, YouTube, Discord, LinkedIn). The footer is styled
using MDBReactUIKit and React Bootstrap components to create a visually appealing and responsive
layout. */
function SiteFooter() {
  return (
    <>
      <MDBFooter bgColor="dark" className="text-secondary">
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol>
              <Row>
                <img src={logo} style={{ height: "60px", width: "250px" }} />
                <p>
                  Riget Zoo Adventures, 23 Fake Rd, Faketonn
                  <br />
                  United Kingdom, 3NG1 4ND
                </p>
                <p>Registered Charity No. 0000000 </p>
              </Row>
            </MDBCol>
            <MDBCol lg="3" md="3" className="mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold">Riget Zoo Adventures</h5>
              <ul className="list-unstyled mb-0">
                <li className="my-1">
                  <a href="/modern-slavery-act" className="text-secondary fs-5">
                    Modern Slavery Act
                  </a>
                </li>
                <li className="my-1">
                  <a href="/privacy-policy" className="text-secondary fs-5">
                    Privacy Policy
                  </a>
                </li>
                <li className="my-1">
                  <a href="/cookie-policy" className="text-secondary fs-5">
                    Cookie Policy
                  </a>
                </li>
                <li className="my-1">
                  <a href="/ts-and-cs" className="text-secondary fs-5">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="3" md="3" className="mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold">Social Links</h5>

              <ul className="list-unstyled mb-0">
                <li className="my-1">
                  <a
                    href="https://github.com/CypherO2"
                    className="text-secondary fs-5"
                  >
                    Github
                  </a>
                </li>
                <li className="my-1">
                  <a
                    href="https://www.youtube.com/@Nox-Noctiflora"
                    className="text-secondary fs-5"
                  >
                    YouTube
                  </a>
                </li>
                <li className="my-1">
                  <a
                    href="https://discord.gg/3zTkHD6v"
                    className="text-secondary fs-5"
                  >
                    Discord
                  </a>
                </li>
                <li className="my-1">
                  <a
                    href="https://uk.linkedin.com/in/charles-presley-b75399244"
                    className="text-secondary fs-5"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div
          className="text-center p-3 text-secondary"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          ©2024 Copyright:{" "}
          <a className="text-secondary" href="">
            Riget Zoo Adventures Ltd
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
export default SiteFooter;
