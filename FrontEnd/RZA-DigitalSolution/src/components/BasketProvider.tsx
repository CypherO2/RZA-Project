import { ReactNode, createContext } from "react";
import useBasket, { BasketContextType } from "../hooks/useBasket";

export const BasketContext = createContext<BasketContextType | null>(null);

/* This function `BasketProvider` is a React component that serves as a provider for the
`BasketContext`. It takes in a prop called `children` which is of type `ReactNode`, representing the
child components that will be wrapped by this provider. Inside the function, it uses the
`BasketContext.Provider` component from React to provide the value obtained from the `useBasket`
hook to its children components. This allows the children components to access the data and
functionality provided by the `BasketContext`. */
function BasketProvider({ children }: { children: ReactNode }) {
  return (
    <BasketContext.Provider value={useBasket()}>
      {children}
    </BasketContext.Provider>
  );
}
export default BasketProvider;
