import { ReactNode, createContext } from "react";
import useBasket, { BasketContextType } from "../hooks/useBasket";

export const BasketContext = createContext<BasketContextType | null>(null);
// refer to AccountProvider.tsx
function BasketProvider({ children }: { children: ReactNode }) {
  return (
    <BasketContext.Provider value={useBasket()}>
      {children}
    </BasketContext.Provider>
  );
}
export default BasketProvider;
