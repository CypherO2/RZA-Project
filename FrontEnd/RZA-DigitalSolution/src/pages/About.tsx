import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

function AboutPage() {
  useEffect(() => {
    document.title = "Riget Zoo | About Us";
  });
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col xs="6">
            <h1
              className="py-4 fw-bold text-center"
              style={{ fontFamily: "cursive" }}
            >
              About{" "}
              <span
                className=""
                style={{
                  color: "#fa8203",
                  textShadow:
                    "-1.5px -1.5px 1 #000, 1.5px -1.5px 1 #000, -1.5px 1.5px 1 #000, 1.5px 1.5px 1 #000",
                  fontWeight: "bolder",
                }}
              >
                US
              </span>
            </h1>
            <h3 className="fw-bold py-2">
              {" "}
              <span
                className=""
                style={{
                  color: "#fa8203",
                  textShadow:
                    "-1.5px -1.5px 1 #000, 1.5px -1.5px 1 #000, -1.5px 1.5px 1 #000, 1.5px 1.5px 1 #000",
                  fontWeight: "bolder",
                }}
              >
                Our
              </span>{" "}
              Mission{" "}
            </h3>
            At Riget Zoo Adventures and Ridget Zoo Resort & Hotel, our mission
            is to provide an unforgettable experience for our guests by offering
            the perfect blend of nature and luxury. We strive to create a
            harmonious environment where visitors can connect with wildlife,
            relax in comfortable accommodations, and create lasting memories.
            <h3 className="fw-bold py-2">
              {" "}
              <span
                className=""
                style={{
                  color: "#fa8203",
                  textShadow:
                    "-1.5px -1.5px 1 #000, 1.5px -1.5px 1 #000, -1.5px 1.5px 1 #000, 1.5px 1.5px 1 #000",
                  fontWeight: "bolder",
                }}
              >
                Our
              </span>{" "}
              Vision{" "}
            </h3>
            We envision Riget Zoo Adventures and Ridget Zoo Resort & Hotel as a
            premier destination that embodies the beauty of nature and the
            comforts of modern hospitality. Through our commitment to
            excellence, sustainability, and customer satisfaction, we aim to
            become a leading player in the hospitality and tourism industry.
            <h3 className="fw-bold py-2">
              {" "}
              <span
                className=""
                style={{
                  color: "#fa8203",
                  textShadow:
                    "-1.5px -1.5px 1 #000, 1.5px -1.5px 1 #000, -1.5px 1.5px 1 #000, 1.5px 1.5px 1 #000",
                  fontWeight: "bolder",
                }}
              >
                Our
              </span>{" "}
              Story{" "}
            </h3>
            Founded with a passion for conservation and hospitality, Riget Zoo
            Adventures and Ridget Zoo Resort & Hotel have been serving guests
            since [year of establishment]. What began as a modest endeavor has
            grown into a beloved destination known for its exceptional service,
            breathtaking surroundings, and dedication to wildlife preservation.
            <h3 className="fw-bold py-2">
              {" "}
              <span
                className=""
                style={{
                  color: "#fa8203",
                  textShadow:
                    "-1.5px -1.5px 1 #000, 1.5px -1.5px 1 #000, -1.5px 1.5px 1 #000, 1.5px 1.5px 1 #000",
                  fontWeight: "bolder",
                }}
              >
                Our
              </span>{" "}
              Team{" "}
            </h3>
            At Riget Zoo Adventures and Ridget Zoo Resort & Hotel, our team is
            comprised of dedicated professionals who share a common goal: to
            exceed the expectations of our guests. From our knowledgeable
            zookeepers and attentive hotel staff to our skilled chefs and
            friendly customer service representatives, each member plays a vital
            role in creating a memorable experience for visitors.
            <h3 className="fw-bold py-2"> Sustainability </h3>
            We are committed to environmental stewardship and sustainability.
            From our eco-friendly practices to our support of wildlife
            conservation initiatives, we strive to minimize our ecological
            footprint and contribute to the well-being of the planet.
            <h3 className="fw-bold py-2"> Community Engagement </h3>
            As a responsible corporate citizen, Riget Zoo Adventures and Ridget
            Zoo Resort & Hotel are actively involved in supporting local
            communities. Through partnerships with schools, charitable
            organizations, and conservation groups, we aim to make a positive
            impact on the communities we serve.
            <h3 className="fw-bold py-2">
              {" "}
              Contact{" "}
              <span
                className=""
                style={{
                  color: "#fa8203",
                  textShadow:
                    "-1.5px -1.5px 1 #000, 1.5px -1.5px 1 #000, -1.5px 1.5px 1 #000, 1.5px 1.5px 1 #000",
                  fontWeight: "bolder",
                }}
              >
                Us
              </span>{" "}
            </h3>
            For inquiries, feedback, or assistance, please contact us at:
            <ul>
              <li>
                Riget Zoo Adventures
                <br />
                Address: Riget Zoo Adventures
                <br />
                23 Fake Rd, Faketonn, United Kingdom, 3NG1 4ND
              </li>
              <li>
                Ridget Zoo Resort & Hotel
                <br />
                Address: Ridget Zoo Resort & Hotel
                <br />
                25 Fake Rd, Faketonn United Kingdom, 3NG1 5ND
              </li>
              <li>Phone: +3 123 456 789</li>
              <li>Email: info@rigetzooadventures.co.uk</li>
            </ul>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
export default AboutPage;
