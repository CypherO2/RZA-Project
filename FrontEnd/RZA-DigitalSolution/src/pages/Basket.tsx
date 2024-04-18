import { ReactNode, useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemCards, { ItemCardProps } from "../components/ItemCard";
import axios from "axios";
import { BasketContext } from "../components/BasketProvider";

function Checkout() {
  const [menuItems, setMenuItems] = useState([]);
  const basketContext = useContext(BasketContext);
  useEffect(() => {
    document.title = "Bean & Brew | Checkout";
  });
  useEffect(() => {
    const getMenu = async () => {
      const response = await axios.get("t");
      console.log(response?.data);
      const items = response?.data["menuItems"];
      console.log(items);

      console.log("Menu items: " + items);
      setMenuItems(items);
    };
    getMenu();
  }, []);

  const renderCost = () => {
    let tempTotalCost = 0;
    menuItems.forEach((item: ItemCardProps) => {
      if (item.item in basketContext!.basket) {
        tempTotalCost += item.price * basketContext!.basket[item.item];
      }
    });
    return tempTotalCost.toFixed(2);
  };

  const renderItemCards = () => {
    const tempItemCards: ReactNode[] = [];

    menuItems.forEach((item: ItemCardProps) => {
      if (item.item in basketContext!.basket) {
        tempItemCards.push(
          <ItemCards
            key={item.item}
            item={item.item}
            quantity={basketContext!.basket[item.item]}
            price={item.price}
            url={item.url}
          />
        );
      }
    });
    return tempItemCards;
  };
  return (
    <>
      <Container>
        <Row>
          <h1 className="my-3 fw-bold text-center">Checkout</h1>
        </Row>
        <Container>
          <Row className="my-4">
            <Col className="py-2 rounded-corners-border">
              {renderItemCards()}
              <span className="text-secondary my-1 text-center fw-bold">
                Subtotal: £{renderCost()}
              </span>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Checkout;