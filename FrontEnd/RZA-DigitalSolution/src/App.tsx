import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ABOUT_PATH,
  BASKET_PATH,
  BOOKING_PATH,
  CHECKOUT_PATH,
  CONTACTS_PATH,
  COOKIE_PATH,
  DASHBOARD_PATH,
  FAQ_PATH,
  INDEX_PATH,
  LEARN_PATH,
  MSA_PATH,
  NOT_FOUND_PATH,
  PP_PATH,
  PROFILE_PATH,
  ROOM_PATH,
  SIGNUP_PATH,
  STAFF_DASHBOARD_PATH,
  STORE_PATH,
  TANDC_PATH,
} from "./constants/paths";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import SiteFooter from "./components/SiteFooter";
import Homepage from "./pages/Home";
import AboutPage from "./pages/About";
import StorePage from "./pages/Store";
import FAQ from "./pages/Faq";
import RoomPage from "./pages/Rooms";
import LearningPage from "./pages/Learn";
import StaffDashboard from "./pages/StaffDashboard";
import MSA from "./pages/ModernSlaveryPage";
import CookiePolicy from "./pages/CookiesPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TsandCs";
import "./css/components.css";
import SignupForm from "./components/SignUp";
import AccountProvider from "./components/accountProvider";
import BasketProvider from "./components/BasketProvider";
import Checkout from "./pages/PaymentPortal";
import Basket from "./pages/Basket";
import Error from "./pages/NotFound";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";

/* The `function App() {` is defining a functional component named `App`. This component is the root
component of the application and it returns the structure of the application by rendering different
routes based on the paths defined in the imported constants. The component also wraps the `NavBar`,
`SiteFooter`, and various other components with providers like `AccountProvider` and
`BasketProvider` to make their functionality available globally within the application. */
function App() {
  // Providers Wrap around the App so that they can be used Globally
  return (
    <>
      <AccountProvider>
        <BasketProvider>
          <NavBar />
          <Routes>
            <Route path={INDEX_PATH} element={<Homepage />} />
            <Route path={ABOUT_PATH} element={<AboutPage />} />
            <Route path={STORE_PATH} element={<StorePage />} />
            <Route path={FAQ_PATH} element={<FAQ />} />
            <Route path={ROOM_PATH} element={<RoomPage />} />
            <Route path={LEARN_PATH} element={<LearningPage />} />
            <Route path={STAFF_DASHBOARD_PATH} element={<StaffDashboard />} />
            <Route path={MSA_PATH} element={<MSA />} />
            <Route path={COOKIE_PATH} element={<CookiePolicy />} />
            <Route path={TANDC_PATH} element={<TermsAndConditions />} />
            <Route path={PP_PATH} element={<PrivacyPolicy />} />
            <Route path={SIGNUP_PATH} element={<SignupForm />} />
            <Route path={CHECKOUT_PATH} element={<Checkout />} />
            <Route path={BOOKING_PATH} element={<Booking />} />
            <Route path={NOT_FOUND_PATH} element={<Error />} />
            <Route path={PROFILE_PATH} element={<Profile />} />
            <Route path={BASKET_PATH} element={<Basket />} />
          </Routes>
          <SiteFooter />
        </BasketProvider>
      </AccountProvider>
    </>
  );
}

export default App;
