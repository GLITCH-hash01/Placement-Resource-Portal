import LandingPage from "./pages/LandingPage/LandingPage";
import Signin from "./pages/Authorization/Signin";
import Dashboard from "./pages/Dashboard/Dashboard";
import pattern from "./assets/images/Pattern.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function App() {
  axios.defaults.baseURL = "http://127.0.0.1:5000";
  return (
    <>
      <div
        className="w-full h-fit font-primary overflow-x-hidden"
        style={{ backgroundImage: `url(${pattern})` }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
