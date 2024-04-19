import { ReactNode, createContext } from "react";
import useAccountDetails, {
  AccountDetailsContextType,
} from "../hooks/useAccountDetails";

/* creating a context in React using the `createContext` function from the React
library. The `createContext` function is used to create a new context object, which can be used to
pass data through the component tree without having to pass props down manually at every level. */
export const AccountDetailsContext =
  createContext<AccountDetailsContextType | null>(null);

// Function to create Provider
function AccountProvider({ children }: { children: ReactNode }) {
  const accountDetailsContext = useAccountDetails();

  return (
    // details how the Provider should wrap around the App
    <AccountDetailsContext.Provider value={accountDetailsContext}>
      {children}
    </AccountDetailsContext.Provider>
  );
}
//exporting of Account Provider
export default AccountProvider;
