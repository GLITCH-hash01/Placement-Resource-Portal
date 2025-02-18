import axios from "axios";
import { ToastContainer } from "react-toastify";

import pattern from "./assets/images/Pattern.png";

import Approutes from "./Approutes";
function App() {
  axios.defaults.baseURL = "http://127.0.0.1:5000";
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
