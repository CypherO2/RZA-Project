import { useState } from "react";

//imports ^ interface v
interface AccountDetailsType {
  username: String;
  password: String;
  membership: String;
  role: Number;
}
// secondary interface
export interface AccountDetailsContextType {
  accountDetails: AccountDetailsType;
  setAccountDetails: (accountDetails: AccountDetailsType | null) => void;
}
//interface ^ constants v
const ACCOUNT_DETAILS_KEY = "account-details";
//constants ^ function v
// ensures that the Account Details are used
/* The `useAccountDetails` function is a custom hook in React that is responsible for managing and
persisting account details in the session storage. */
function useAccountDetails() {
  const accountDetailsString = sessionStorage.getItem(ACCOUNT_DETAILS_KEY);
  const accountDetailsObject = accountDetailsString
    ? JSON.parse(accountDetailsString)
    : null;

  const [accountDetails, setAccountDetails] = useState(accountDetailsObject);

  const saveAccountDetails = (newAccountDetails: AccountDetailsType | null) => {
    if (newAccountDetails) {
      sessionStorage.setItem(
        ACCOUNT_DETAILS_KEY,
        JSON.stringify(newAccountDetails)
      );
    } else {
      sessionStorage.removeItem(ACCOUNT_DETAILS_KEY);
    }
    setAccountDetails(newAccountDetails);
  };
  return { accountDetails, setAccountDetails: saveAccountDetails };
}
// exporting Function
export default useAccountDetails;
