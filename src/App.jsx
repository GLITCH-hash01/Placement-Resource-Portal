import LandingPage from "./pages/LandingPage/LandingPage";
import Signin from "./pages/Authorization/Signin.jsx";
import pattern from "./assets/Pattern.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div
        className="w-screen h-screen"
        style={{ backgroundImage: `url(${pattern})` }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
