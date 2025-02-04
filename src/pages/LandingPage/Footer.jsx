import logo from "../../assets/PRPLogo.png";
import { FaRegCopyright } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className=" bg-black w-screen h-50">
        <div className="px-14 py-14 flex justify-between gap-4">
          <img src={logo} alt="" className="w-13 h-13" />
          <div>
          <p className="text-white text-2xl px-50">Follow Us</p>
          <div> 
          <FaInstagram />
          </div>
          </div>
        </div>
        <div className="bg-primary w-screen h-11 flex justify-around gap-4 items-center">
          <div className="flex gap-1">
            <FaRegCopyright />
            <p className="text-xs font-primary ">
              Copyright 2025 - All right reserved
            </p>
          </div>
          <div className="flex justify-around gap-4 font-primary text-xs">
            <a href="" className="hover:underline hover:text-white">
              Terms of Service
            </a>
            <a href="" className="hover:underline hover:text-white ">
              Privacy Policy
            </a>
            <a href="" className="hover:underline hover:text-white ">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
