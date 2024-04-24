import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

/* The `function MSA() {` is defining a functional component in React. This component is responsible
for rendering the content related to the Modern Slavery Act on a web page. Within this component,
various headings, paragraphs, and lists are structured to provide information about the
organization's commitment, policies, areas of risk, due diligence, employee measures, supply chain
management, conservation partners, training, and future actions regarding modern slavery. The
`useEffect` hook is used to set the document title to "Riget Zoo | Modern Slavery Act" when the
component is mounted. */
function MSA() {
    useEffect(() => {
      document.title = "Riget Zoo | Modern Slavery Act";
    });
  return (
    <Container className="my-3">
      <Row>
        <Col></Col>
        <Col xs="6">
          <h1 className="py-4 fw-bold" style={{ fontFamily: "cursive" }}>
            Modern Slavery Act
          </h1>

          <p>
            This statement is published in accordance with the Modern Slavery
            Act 2015.
          </p>

          <h2 className="fw-bold py-2">Commitment and Policy</h2>

          <p>
            [Insert organization name] is committed to acting ethically and with
            integrity in all our business relationships. We implement effective
            systems and controls to reduce the risk of slavery and human
            trafficking within our organization and supply chains.
          </p>

          <h2 className="fw-bold py-2">Areas of Risk</h2>

          <p>
            We have identified several areas of heightened risk in our
            operations:
          </p>

          <ol>
            <li>Overseas conservation partners</li>
            <li>Overseas suppliers of retail merchandise</li>
            <li>Construction contractors and subcontractors</li>
            <li>Suppliers of fresh produce for catering and animal feed</li>
            <li>Our own staff and volunteers</li>
          </ol>

          <h2 className="fw-bold py-2">Due Diligence</h2>

          <p>
            We undertake due diligence to reduce the risk of human trafficking
            and slavery within our operations and supply chains. We obtain
            written confirmation from conservation partners and evidence of
            compliance with the Modern Slavery Act from suppliers with
            significant expenditures.
          </p>

          <h2 className="fw-bold py-2">Employee Measures</h2>

          <p>
            We ensure that employees are in control of their earnings by
            verifying any changes to bank details.
          </p>

          <h2 className="fw-bold py-2">Supply Chain Management</h2>

          <p>
            We engage with a large number of suppliers, many of whom are
            required to produce a Slavery and Human Trafficking Statement under
            the Act. We expect suppliers to comply with our Procurement Policy,
            relevant laws, and undertake due diligence in their own supply
            chains.
          </p>

          <h2 className="fw-bold py-2">Conservation Partners</h2>

          <p>
            We extend our commitment to combating modern slavery to our
            conservation partners, expecting them to conform to the Act and
            thoroughly investigate their labor practices and those of their
            suppliers.
          </p>

          <h2 className="fw-bold py-2">Training</h2>

          <p>
            A training program is in place to ensure management staff are aware
            of their responsibilities under the Act and how to identify and
            escalate concerns related to modern slavery.
          </p>

          <h2 className="fw-bold py-2">Future Actions</h2>

          <p>
            We will continue to deliver training courses, obtain compliance
            confirmation from new suppliers and partners, and review and update
            this statement annually.
          </p>

          <footer>
            <p>
              Barry Scott, Chief Executive Officer
              <br />
              James Bond, Corporate Director
              <br />
              April 17th 2024
            </p>
          </footer>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default MSA;
