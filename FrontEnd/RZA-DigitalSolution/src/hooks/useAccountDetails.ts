import { useState } from "react";

//imports ^ interface v
interface AccountDetailsType {
  username: String;
  password: String;
  role: Number;
}

export interface AccountDetailsContextType {
  accountDetails: AccountDetailsType;
  setAccountDetails: (accountDetails: AccountDetailsType | null) => void;
}
//interface ^ constants v
const ACCOUNT_DETAILS_KEY = "account-details";
//constants ^ function v
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
export default useAccountDetails;
