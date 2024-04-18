import { ReactNode, createContext } from "react";
import useAccountDetails, {
  AccountDetailsContextType,
} from "../hooks/useAccountDetails";

export const AccountDetailsContext =
  createContext<AccountDetailsContextType | null>(null);

function AccountProvider({ children }: { children: ReactNode }) {
  const accountDetailsContext = useAccountDetails();

  return (
    <AccountDetailsContext.Provider value={accountDetailsContext}>
      {children}
    </AccountDetailsContext.Provider>
  );
}
export default AccountProvider;
