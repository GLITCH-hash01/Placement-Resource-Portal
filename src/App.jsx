import axios from "axios";
import { ToastContainer } from "react-toastify";

import pattern from "./assets/images/Pattern.png";

import Approutes from "./Approutes";
function App() {
  // axios.defaults.baseURL =
    "https://placement-resource-portal-backend.vercel.app/";
  // axios.defaults.baseURL = "http://localhost:5000/";
  return (
    <>
      <div
        className="w-full h-fit font-primary overflow-hidden"
        style={{ backgroundImage: `url(${pattern})` }}>
        <Approutes />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
