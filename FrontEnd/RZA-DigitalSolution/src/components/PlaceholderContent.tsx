import { Badge, Col, Placeholder } from "react-bootstrap";
import "../css/components.css";

/* The `PHContent` function is a React functional component that returns JSX elements to render a
placeholder content. The content includes placeholders from the react-bootstrap library with
animations and styling classes applied to create a visually appealing placeholder UI. */
function PHContent() {
  return (
    <>
      <div className="fw-bold text-light px-3 rounded-corners-dark py-3">
        <Placeholder className="py-2 text-light fs-2" animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <p>
          <Placeholder className="py-2 text-light" animation="glow">
            <Placeholder xs={3} /> <Placeholder xs={4} /> <Placeholder xs={1} />{" "}
            <Placeholder xs={4} /> <Placeholder xs={5} /> <Placeholder xs={2} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={1} /> <Placeholder xs={1} />{" "}
            <Placeholder xs={3} /> <Placeholder xs={4} /> <Placeholder xs={1} />
          </Placeholder>
        </p>
      </div>
    </>
  );
}
export default PHContent;
