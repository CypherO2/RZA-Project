import { Container, Row, Col } from "react-bootstrap";

export default function PrivacyPolicy() {
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col xs="6">
            <h1 className="py-4 fw-bold" style={{ fontFamily: "cursive" }}>
              Privacy Policy
            </h1>
            <p>
              This Privacy Policy describes how [Zoo Name] and [Hotel Name]
              (collectively referred to as "we", "us", or "our") collect, use,
              and disclose your personal information when you visit our website
              or use our services.
            </p>

            <h2 className="fw-bold py-2">Information We Collect</h2>

            <h3 className="fw-bold py-2">Information You Provide</h3>

            <p>
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>

            <ul>
              <li>Make a reservation at our hotel</li>
              <li>Purchase tickets or memberships for the zoo</li>
              <li>Sign up for newsletters or promotional materials</li>
              <li>Contact us with inquiries or feedback</li>
            </ul>

            <p>
              This information may include your name, email address, postal
              address, phone number, payment information, and any other
              information you choose to provide.
            </p>

            <h3 className="fw-bold py-2">
              Information We Automatically Collect
            </h3>

            <p>
              When you visit our website, we may automatically collect certain
              information about your device and browsing activity using cookies,
              web beacons, and similar technologies. This information may
              include your IP address, browser type, operating system, referring
              URLs, and other technical information.
            </p>

            <h2 className="fw-bold py-2">Use of Information</h2>

            <p>
              We may use the information we collect for various purposes,
              including to:
            </p>

            <ul>
              <li>Process reservations and ticket purchases</li>
              <li>Communicate with you about your bookings or inquiries</li>
              <li>Send you marketing communications and promotional offers</li>
              <li>Improve our website, products, and services</li>
              <li>
                Ensure the security and integrity of our website and services
              </li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="fw-bold py-2">Sharing of Information</h2>

            <p>
              We may share your personal information with third parties in the
              following circumstances:
            </p>

            <ul>
              <li>
                With service providers who assist us in operating our website,
                processing payments, or providing other services
              </li>
              <li>
                With our business partners for marketing or promotional
                purposes, but only with your consent
              </li>
              <li>When required by law or in response to legal process</li>
              <li>
                In connection with a corporate transaction, such as a merger,
                acquisition, or sale of assets
              </li>
            </ul>

            <h2 className="fw-bold py-2">Data Security</h2>

            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, disclosure, alteration, or destruction.
              However, no method of transmission over the internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="fw-bold py-2">Your Choices</h2>

            <p>
              You may choose not to provide certain personal information, but
              this may limit your ability to use certain features of our website
              or services. You can also opt-out of receiving marketing
              communications from us by following the instructions provided in
              the communication.
            </p>

            <h2 className="fw-bold py-2">Updates to this Privacy Policy</h2>

            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. We encourage you
              to review this Privacy Policy periodically for any updates.
            </p>

            <h2 className="fw-bold py-2">Contact Us</h2>

            <p>
              If you have any questions or concerns about our Privacy Policy or
              our data practices, please contact us at [contact email or
              address].
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
    </>
  );
}

{
  /*import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div>
      <h1>Privacy Policy</h1>

      
    </div>
  );
}

export default PrivacyPolicy;
*/
}
