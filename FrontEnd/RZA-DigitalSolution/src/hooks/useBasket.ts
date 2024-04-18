import { useState } from "react";
// interface to determine Context type

/* The line `export interface BasketContextType {` is defining an interface named `BasketContextType`
that specifies the structure of the context object used in the application. This interface defines
the shape of the context object that will be shared and consumed by components within the
application. It includes the properties `basket`, `addToBasket`, `removeFromBasket`, and
`deleteFromBasket`, along with their respective types. By exporting this interface, it can be
imported and used in other parts of the application to ensure consistency in the structure of the
context object. */
export interface BasketContextType {
  basket: { [item: string]: number };
  addToBasket: (item: string) => void;
  removeFromBasket: (item: string) => void;
  deleteFromBasket: (item: string) => void;
}
// Function to call hook for using the Basket
/* This line of code defines a TypeScript function named `useBasket` that returns an object conforming
to the `BasketContextType` interface. The function is responsible for managing the state of a
shopping basket within a React component. It initializes the basket state by retrieving data from
the local storage or setting an empty object if no data is found. */
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
