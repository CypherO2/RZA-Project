import { ReactNode, useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { Money } from "@carbon/react/icons";
import { BasketContext } from "../components/BasketProvider";
import { render } from "react-dom";
import { StoreCardProps } from "../components/StoreCards";
import ItemCards, { ItemCardProps } from "../components/ItemCards";
import { CHECKOUT_PATH, INDEX_PATH } from "../constants/paths";
import { useNavigate } from "react-router-dom";

export default function Basket() {
  const [storeItems, setStoreItems] = useState([]);
  const navigate = useNavigate();
  const basketContext = useContext(BasketContext);

  useEffect(() => {
    document.title = "Riget Zoo | Basket";
  });
  useEffect(() => {
    const getStore = async () => {
      const response = await axios.get("http://127.0.0.1:5000/store");
      console.log(response?.data);
      const items = response?.data["storeItems"];
      console.log(items);

      console.log("Store items: " + items);
      setStoreItems(items);
    };
    getStore();
  }, []);

  const renderCost = () => {
    let tempTotalCost = 0;
    storeItems.forEach((item: ItemCardProps) => {
      if (item.item in basketContext!.basket) {
        tempTotalCost += item.price * basketContext!.basket[item.item];
      }
    });
    return tempTotalCost.toFixed(2);
  };

  const renderItemCards = () => {
    const tempItemCards: ReactNode[] = [];

    storeItems.forEach((item: ItemCardProps) => {
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
      <Container className="p-5">
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
            <Button
              href={CHECKOUT_PATH}
              variant="success"
              className="my-2 px-5"
            >
              <Money size="20" /> Pay
            </Button>
          </Row>
        </Container>
      </Container>
    </>
  );
}

{
  /*
 
useEffect(() => {

StoreItems.forEach((StoreItem) => {

	const itemName = StoreItem?.name;

	if(itemName in basket) {

		setItemCards([...itemCards, <ItemCard name={itemName} ... quantity: {basket[itemName]} />);

		setTotalCost(totalCost + (StoreItem["price"] * basket[itemName]));

	}

});

}, [basket]); */
}
