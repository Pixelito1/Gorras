import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./index.css";
import ManPage from "./pages/MenPage";
import WomanPage from "./pages/WomanPage";
import SuppPage from "./pages/SuppPag";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/man" element={<ManPage />} />
        <Route path="/woman" element={<WomanPage />} />
        <Route path="/supp" element={<SuppPage />} />
      </Routes>
    </>
  );
}

export default App;
