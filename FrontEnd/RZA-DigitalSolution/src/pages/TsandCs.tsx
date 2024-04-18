import { Col, Container, Row } from "react-bootstrap";

export default function TermsAndConditions() {
  return (
    <Container className="my-3">
      <Row>
        <Col></Col>
        <Col xs="6">
          <h1 className="fw-bold py-4" style={{ fontFamily: "cursive" }}>
            Terms and Conditions
          </h1>

          <h2 className="fw-bold py-2">1. Introduction</h2>

          <p>
            These Terms and Conditions govern your use of the services provided
            by Riget Zoo Adventures and Ridget Zoo Resort & Hotel (collectively
            referred to as "we", "us", or "our"). By using our services, you
            agree to be bound by these Terms and Conditions.
          </p>

          <h2 className="fw-bold py-2">2. Booking and Reservations</h2>

          <p>
            All bookings and reservations are subject to availability and
            confirmation. We reserve the right to refuse or cancel any booking
            or reservation at our discretion.
          </p>

          <h2 className="fw-bold py-2">3. Payment and Cancellation</h2>

          <p>
            Payment for bookings and reservations must be made in accordance
            with the terms specified at the time of booking. Cancellation
            policies vary depending on the type of booking and may incur
            charges.
          </p>

          <h2 className="fw-bold py-2">4. Use of Facilities</h2>

          <p>
            Guests are expected to use the facilities provided by Riget Zoo
            Adventures and Ridget Zoo Resort & Hotel responsibly and in
            accordance with any rules or regulations posted on-site.
          </p>

          <h2 className="fw-bold py-2">5. Liability</h2>

          <p>
            Riget Zoo Adventures and Ridget Zoo Resort & Hotel shall not be
            liable for any loss, damage, or injury arising from your use of our
            services, except where such liability cannot be excluded by law.
          </p>

          <h2 className="fw-bold py-2">6. Privacy</h2>

          <p>
            Your privacy is important to us. Please refer to our Privacy Policy
            for information on how we collect, use, and disclose your personal
            information.
          </p>

          <h2 className="fw-bold py-2">7. Changes to Terms and Conditions</h2>

          <p>
            We reserve the right to update or modify these Terms and Conditions
            at any time without prior notice. Any changes will be effective
            immediately upon posting on our website.
          </p>

          <h2 className="fw-bold py-2">8. Governing Law</h2>

          <p>
            These Terms and Conditions are governed by the laws of the United
            Kingdoms of England, N.Ireland, Scotland and Wales. Any disputes
            arising out of or in connection with these Terms and Conditions
            shall be subject to the exclusive jurisdiction of the courts of the
            United Kingdoms of England, N.Ireland, Scotland and Wales.
          </p>

          <h2 className="fw-bold py-2">9. Contact Us</h2>

          <p>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at info@rigetzooadventures.co.uk.
          </p>

          <footer>
            <p>
              Riget Zoo Adventures
              <br />
              Ridget Zoo Resort & Hotel
            </p>
          </footer>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
