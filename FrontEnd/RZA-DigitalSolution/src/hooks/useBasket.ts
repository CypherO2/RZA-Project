import { useState } from "react";
// interface to determine Context type
export interface BasketContextType {
  basket: { [item: string]: number };
  addToBasket: (item: string) => void;
  removeFromBasket: (item: string) => void;
  deleteFromBasket: (item: string) => void;
}
// Function to call hook for using the Basket
function useBasket(): BasketContextType {
  const basketObject = localStorage.getItem("basket");
  const [basket, setBasket] = useState(
    basketObject ? JSON.parse(basketObject) : {}
  );

  const addToBasket = (item: string) => {
    let newBasket;
    if (Object.keys(basket).includes(item)) {
      newBasket = { ...basket, [item]: basket[item] + 1 };
    } else {
      newBasket = { ...basket, [item]: 1 };
    }
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  const removeFromBasket = (item: string) => {
    if (Object.keys(basket).includes(item)) {
      let newBasket = { ...basket };
      if (basket[item] == 1) {
        delete newBasket[item];
      } else {
        newBasket = { ...basket, [item]: basket[item] - 1 };
      }
      setBasket(newBasket);
      localStorage.setItem("basket", JSON.stringify(newBasket));
    }
  };

  const deleteFromBasket = (item: string) => {
    let newBasket = { ...basket };
    delete newBasket[item];
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  return { basket, addToBasket, removeFromBasket, deleteFromBasket };
}
// Exporting Function
export default useBasket;
