import { Container } from "react-bootstrap";

export default function Basket() {
  return (
    <>
      <Container className="py-5 my-5">
        <h1 className="fw-bold">
          This Page Exists | Due to the nature of this site we cannot accept
          Payments at this time.
        </h1>
        <h2 className="text-secondary">
          We apologise for any inconnvience this may cause you.
        </h2>
        <h4 style={{ fontFamily: "cursive" }}>
          <span style={{ color: "fa8203" }}>
            - The Riget Zoo Adventure Team
          </span>
        </h4>
      </Container>
    </>
  );
}
