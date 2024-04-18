import { ReactNode, createContext } from "react";
import useAccountDetails, {
  AccountDetailsContextType,
} from "../hooks/useAccountDetails";

//constant to ensure that the context is not NULL 
export const AccountDetailsContext =
  createContext<AccountDetailsContextType | null>(null);

  // Function to create Provider
function AccountProvider({ children }: { children: ReactNode }) {
  const accountDetailsContext = useAccountDetails();

  return (
    // details how the Provider should wrapp around the App
    <AccountDetailsContext.Provider value={accountDetailsContext}>
      {children}
    </AccountDetailsContext.Provider>
  );
}
//exporting of Account Provider
export default AccountProvider;
