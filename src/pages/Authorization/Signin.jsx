import logo from "../../assets/PRPLogo.png";
import rightimage from "../../assets/images/vector right.png";
import leftimage from "../../assets/images/vector left.png";
import arrow from "../../assets/images/arrow.png";
import star2 from "../../assets/images/star_banner.png";
import Button from "../../components/Button";
import axios from "axios";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function Signin() {
  const email = useRef();
  const password = useRef();

  function Login() {
    event.preventDefault();
    axios
      .post("/auth/login", {
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.accesstoken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setTimeout(() => (window.location.href = "/dashboard"), 2000);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }

  return (
    <>
      <div className="w-screen h-fit flex fixed justify-around items-center gap-250 p-4 z-10">
        <img src={logo} alt="" className="w-15 h-15" />
        <Button onClick={() => (window.location.href = "/signup")}>
          Sign up
        </Button>
      </div>

      <div className="flex justify-center items-center px-8 relative font-primary gap-8 h-screen ">
        <div className="flex justify-center items-center absolute left-[10%] bottom-[15%]">
          <img src={leftimage} alt=" " className="w-[300px] h-auto" />
        </div>
        <div
          className="w-100 h-130 py-16  bg-black rounded-xl z-10 relative"
          style={{ boxShadow: "5px 5px 0px 0px #9B9BFF" }}>
          <img
            src={arrow}
            alt=""
            className=" absolute top-10 -right-13 w-20 h-20"
          />
          <img
            src={arrow}
            alt=""
            className="absolute bottom-10 -left-13 w-20 h-20 rotate-180"
          />
          <h2 className="text-3xl text-primary font-bold text-center mb-4 ">
            Login
          </h2>
          <p className=" text-white px-10 pb-10 font-[400] text-lg text-center">
            Hey, Enter your details to Sign<br></br> into your account
          </p>
          <form className=" flex flex-col gap-4 px-10" onSubmit={Login}>
            <input
              ref={email}
              type="email"
              id="email"
              className="w-80 h-10 p-4 rounded-3xl bg-white text-black text-sm outline-0"
              placeholder="Email Address"
              style={{ boxShadow: "3px 3px 0px 0px #9B9BFF" }}
            />
            <input
              ref={password}
              type="password"
              id="password"
              className="w-80 h-10 p-4 rounded-3xl bg-white text-black text-sm outline-0"
              placeholder="Password"
              style={{ boxShadow: "3px 3px 0px 0px #9B9BFF" }}
            />
            {/* <p className="text-sm text-left text-white">
              Having trouble in sign-in?
            </p> */}
            <button
              type="submit"
              className="bg-primary  px-4 py-2 rounded-xl font-bold cursor-pointer"
              style={{ boxShadow: "0px 2px 0px 0px #ffffff " }}>
              Sign in
            </button>
            <p className="text-sm text-center mt-4 text-white">
              Don't have an Account?{" "}
              <a href="/signup" className="text-primary hover:underline">
                Register Now
              </a>
            </p>
          </form>
        </div>
        <div className="flex justify-around items-center absolute right-[5%] bottom-20">
          <img src={rightimage} alt=" " className="w-[480px] h-[480px] " />
        </div>
      </div>
      <div className="relative">
        <div className="absolute bottom-0 bg-primary  w-screen box-border size-12 flex justify-center items-center">
          <div className="justify-items-center ">
            {" "}
            <img src={star2} className=""></img>
          </div>
        </div>
      </div>
    </>
  );
}
