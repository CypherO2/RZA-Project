import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBProgress,
  MDBProgressBar,
  MDBTypography,
} from "mdb-react-ui-kit";
import { AccountDetailsContext } from "../components/accountProvider";
import { useContext } from "react";
import DefaultPfp from "../assets/DefualtPFP.png";
import { useNavigate } from "react-router-dom";

function ProfileRole() {
  const accountDetailsContext = useContext(AccountDetailsContext);
  if (accountDetailsContext?.accountDetails?.role === 1) {
    return (
      <>
        <span className="fw-bold text-secondary">Guest</span>
      </>
    );
  } else if (accountDetailsContext?.accountDetails?.role === 2) {
    return (
      <>
        <span className="fw-bold text-secondary">Customer</span>
      </>
    );
  } else if (accountDetailsContext?.accountDetails?.role === 3) {
    return (
      <>
        <span className="fw-bold text-danger">Trainee</span>
      </>
    );
  } else if (accountDetailsContext?.accountDetails?.role === 3) {
    return (
      <>
        <span className="fw-bold text-danger">Team Member</span>
      </>
    );
  } else if (accountDetailsContext?.accountDetails?.role === 3) {
    return (
      <>
        <span className="fw-bold text-danger">Assistant Manager</span>
      </>
    );
  } else if (accountDetailsContext?.accountDetails?.role === 3) {
    return (
      <>
        <span className="fw-bold text-danger">Manager</span>
      </>
    );
  }
}

/* The `export default function ProfileCards() {` statement is defining a default function named
`ProfileCards` that can be exported from the module. This function is a React component that renders
a profile card UI using the MDBReactUIKit components. When this component is exported as the default
export from a module, it can be imported and used in other parts of the application. */
export default function Profile() {
  const navigate = useNavigate();
  const accountDetailsContext = useContext(AccountDetailsContext);
  return (
    <div className="" style={{ backgroundColor: "#eee", height:"35vw" }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage
                    src={DefaultPfp}
                    className="rounded-circle"
                    fluid
                    style={{ width: "100px" }}
                  />
                </div>
                <MDBTypography tag="h4">
                  {accountDetailsContext?.accountDetails?.username}
                </MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  <span className="fw-bold text-success">
                    {accountDetailsContext?.accountDetails?.membership}
                  </span>
                  <span className="mx-2">|</span>
                  <ProfileRole />
                </MDBCardText>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">0</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Rooms Booked
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">0</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Transactions
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">0 / 1000</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Loyalty Points
                    </MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
