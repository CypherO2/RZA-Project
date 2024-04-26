import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, Placeholder, Row } from "react-bootstrap";
import PlaceholderImg from "../assets/placeholderimg.jpg";
import StoreCard, { StoreCardProps } from "../components/StoreCards";

function StorePage() {
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    document.title = "Riget Zoo | Store";
  });
  useEffect(() => {
    const getStore = async () => {
      const response = await axios.get("http://127.0.0.1:5000/store");
      console.log(response?.data);
      setStoreItems(response?.data["storeItems"]);
      console.log(storeItems);
    };
    getStore();
  }, []);

  return (
    <>
      <Container className="my-3">
        {/* <p>{JSON.stringify(basket)}</p> */}
        <div className="mx-5 px-5">
          <Col className="mx-5">
            <Row>
              {storeItems.map((storeItem: StoreCardProps) => (
                <StoreCard
                  item={storeItem.item}
                  type={storeItem.desc}
                  desc={storeItem.type}
                  price={storeItem.price}
                  url={storeItem.url}
                />
              ))}
            </Row>
          </Col>
        </div>
      </Container>
    </>
  );
}
export default StorePage;
