import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { INDEX_PATH } from "./constants/paths";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import SiteFooter from "./components/SiteFooter";
import Homepage from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={INDEX_PATH} element={<Homepage />} />
      </Routes>
      <SiteFooter/>
    </>
  );
}

export default App;
