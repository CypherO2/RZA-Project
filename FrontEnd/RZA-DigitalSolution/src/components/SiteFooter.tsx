import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

function SiteFooter() {
  return (
    <>
      <MDBFooter bgColor="dark" className="text-secondary">
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold">Riget Zoo Adventures</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d349152.5284736859!2d-5.3108256010794195!3d53.71877623028436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1711626192004!5m2!1sen!2suk"
                width="800"
                height="150"
                loading="lazy"
              ></iframe>
            </MDBCol>
            <MDBCol> </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
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
            PLACEHOLDER
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
export default SiteFooter;
