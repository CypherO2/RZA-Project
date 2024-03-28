import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

function SiteFooter() {
  return (
    <>
      <MDBFooter bgColor="dark" className="text-secondary">
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold">Our Story</h5>
              <p>
                Once a modest corner cafe in a small town, our coffee shop has
                grown from humble beginnings. What started as a cozy gathering
                place for locals seeking a comforting cup of coffee has
                blossomed into a beloved community hub, where friendships are
                forged over steaming mugs of freshly brewed java. Our commitment
                to quality and warm hospitality has remained unchanged, making
                us a cherished part of the neighborhood's story.
              </p>
            </MDBCol>
            <MDBCol> </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold">Social Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="https://github.com/CypherO2"
                    className="text-secondary"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@Nox-Noctiflora"
                    className="text-secondary"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/3zTkHD6v"
                    className="text-secondary"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://uk.linkedin.com/in/charles-presley-b75399244"
                    className="text-secondary"
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
            PLACEHOLDER
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
export default SiteFooter;
