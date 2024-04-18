import { Badge, Button, Col, Placeholder, Row } from "react-bootstrap";
import "../css/components.css";
import { AddAlt, SubtractAlt, Delete } from "@carbon/react/icons";
import { BasketContext } from "./BasketProvider";
import { useContext } from "react";

/* The `export interface ItemCardProps {` statement is defining an interface named `ItemCardProps` that
specifies the shape of the props that can be passed to the `ItemCards` component. By exporting this
interface, it allows other components or files to import and use this interface to ensure that the
props passed to `ItemCards` adhere to a specific structure. In this case, `ItemCardProps` interface
defines the expected props for the `ItemCards` component, including `item` (string), `quantity`
(number), `price` (number), and `url` (string). This helps in type-checking and providing clarity on
the expected props for the component. */
export interface ItemCardProps {
  item: string;
  quantity: number;
  price: number;
  url: string;
}
// props to decide what the function can take as params
/* This line of code is defining a functional component named `ItemCards` that takes in props of type
`ItemCardProps`. The `ItemCardProps` interface specifies the shape of the props that the `ItemCards`
component can receive, which includes `item` (string), `quantity` (number), `price` (number), and
`url` (string). By destructuring these props in the function signature `({ item, quantity, price,
url })`, the component can access and use these values within its JSX markup. */
function ItemCards({ item, quantity, price, url }: ItemCardProps) {
  const basketContext = useContext(BasketContext);
  return (
    <>
      <div className="fw-bold text-light rounded-corners-dark my-2 rounded-corners-border">
        <Row>
          <Col xs={1}>
            <img
              src={url}
              alt="product-image"
              className="rounded rounded-corners-border"
              height="80"
              width="80"
            />
          </Col>
          <Col className="py-1 my-2 px-5" xs={1}>
            <a
              href="#"
              className="text-success"
              onClick={() => basketContext!.addToBasket(item)}
            >
              <AddAlt />
            </a>
            <a
              href="#"
              className="text-danger"
              onClick={() => basketContext!.removeFromBasket(item)}
            >
              <SubtractAlt />
            </a>
          </Col>
          <Col xs={6}>
            <h6 className="py-4 text-light fw-bold">
              <span className="text-white-50 fs-6 fw-light">{quantity}x </span>
              {item}
            </h6>
          </Col>
          <Col className="text-white-50 fw-bold fs-5 text-center py-4">
            £{price.toFixed(2)}
          </Col>
          <Col className="py-2 my-3" xs={1}>
            <a
              href="#"
              className="text-danger fw-bold fs-5"
              onClick={() => basketContext!.deleteFromBasket(item)}
            >
              <Delete />
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default ItemCards;
