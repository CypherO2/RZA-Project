import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ABOUT_PATH,
  CONTACTS_PATH,
  COOKIE_PATH,
  DASHBOARD_PATH,
  FAQ_PATH,
  INDEX_PATH,
  LEARN_PATH,
  MSA_PATH,
  PP_PATH,
  ROOM_PATH,
  STAFF_DASHBOARD_PATH,
  STORE_PATH,
  TANDC_PATH,
} from "./constants/paths";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import SiteFooter from "./components/SiteFooter";
import Homepage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import StorePage from "./pages/Store";
import FAQ from "./pages/Faq";
import RoomPage from "./pages/Rooms";
import LearningPage from "./pages/Learn";
import DashboardPage from "./pages/Dashboard";
import StaffDashboard from "./pages/StaffDashboard";
import MSA from "./pages/ModernSlaveryPage";
import CookiePolicy from "./pages/CookiesPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TsandCs";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={INDEX_PATH} element={<Homepage />} />
        <Route path={ABOUT_PATH} element={<AboutPage />} />
        <Route path={CONTACTS_PATH} element={<ContactPage />} />
        <Route path={STORE_PATH} element={<StorePage />} />
        <Route path={FAQ_PATH} element={<FAQ />} />
        <Route path={ROOM_PATH} element={<RoomPage />} />
        <Route path={LEARN_PATH} element={<LearningPage />} />
        <Route path={DASHBOARD_PATH} element={<DashboardPage />} />
        <Route path={STAFF_DASHBOARD_PATH} element={<StaffDashboard />} />
        <Route path={MSA_PATH} element={<MSA />} />
        <Route path={COOKIE_PATH} element={<CookiePolicy />} />
        <Route path={TANDC_PATH} element={<TermsAndConditions />} />
        <Route path={PP_PATH} element={<PrivacyPolicy />} />
      </Routes>
      <SiteFooter />
    </>
  );
}

export default App;
