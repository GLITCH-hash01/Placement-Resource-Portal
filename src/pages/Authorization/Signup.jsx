import axios from "axios";
import { useRef } from "react";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import logo from "../../assets/PRPLogo.png";
import leftimage from "../../assets/images/vector left.png";
import rightimage from "../../assets/images/signupvector.png";
import arrow from "../../assets/images/arrow.png";
import star2 from "../../assets/images/star_banner.png";
export default function Signup() {
  const email = useRef();
  const password = useRef();
  const department = useRef();
  const username = useRef();
  const confirmpass = useRef();

  function Login() {
    event.preventDefault();
    console.log(
      email.current.value,
      password.current.value,
      department.current.value,
      username.current.value,
      confirmpass.current.value
    );
    if (password.current.value !== confirmpass.current.value) {
      toast.error("Password and Confirm Password should be same");
      return;
    }
    axios
      .post("/auth/signup", {
        email: email.current.value,
        password: password.current.value,
        username: username.current.value,
        department: department.current.value,
        role: "student",
      })
      .then((res) => {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.accesstoken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setTimeout(() => (window.location.href = "/students/dashboard"), 2000);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }
  return (
    <>
      <div className="w-screen h-fit flex fixed justify-around items-center gap-250 p-4 z-10">
        <img src={logo} alt="" className="w-15 h-15" />
        <Button onClick={() => (window.location.href = "/login")}>
          Sign in
        </Button>
      </div>

      <div className="flex justify-center items-center px-8 relative font-primary gap-8 h-screen ">
        <div className="flex justify-center items-center absolute left-[10%] bottom-[15%]">
          <img src={leftimage} alt=" " className="w-[300px] h-auto" />
        </div>
        <div
          className="w-100 h-150 py-16  bg-black rounded-xl z-10 relative"
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
          <h2 className="text-4xl text-primary font-primary font-bold text-center mb-4 ">
            Register
          </h2>
          <p className=" text-white px-10 pb-10 font-[400] text-xl text-center">
            Hey, Enter your details to Register
          </p>
          <form className=" flex flex-col gap-4 px-10" onSubmit={Login}>
            <input
              ref={username}
              type="text"
              id="name"
              className="w-80 h-10 p-4 rounded-3xl bg-white text-black text-md outline-0"
              placeholder="Username"
              style={{ boxShadow: "3px 3px 0px 0px #9B9BFF" }}
            />

            <input
              ref={email}
              type="email"
              id="email"
              className="w-80 h-10 p-4 rounded-3xl bg-white text-black text-md outline-0"
              placeholder="Email Address"
              style={{ boxShadow: "3px 3px 0px 0px #9B9BFF" }}
            />
            <input
              ref={department}
              type="text"
              id="department"
              className="w-80 h-10 p-4 rounded-3xl bg-white text-black text-md outline-0"
              placeholder="Department"
              style={{ boxShadow: "3px 3px 0px 0px #9B9BFF" }}
            />

            <input
              ref={password}
              type="password"
              id="password"
              className="w-80 h-10 p-4 rounded-3xl bg-white text-black text-md outline-0"
              placeholder="Password"
              style={{ boxShadow: "3px 3px 0px 0px #9B9BFF" }}
            />
            <input
              ref={confirmpass}
              type="password"
              id="password"
              className="w-80 h-10 p-4 rounded-3xl bg-white text-black text-md outline-0"
              placeholder="Confirm Password"
              style={{ boxShadow: "3px 3px 0px 0px #9B9BFF" }}
            />
            {/* <p className="text-sm text-left text-white">
              Having trouble in sign-in?
            </p> */}
            <button
              type="submit"
              className="bg-primary  px-4 py-2 rounded-xl font-bold cursor-pointer"
              style={{ boxShadow: "0px 2px 0px 0px #ffffff " }}>
              Sign up
            </button>
            <p className="text-lg text-center mt-4 font-primary text-white">
              Already have an Account?{" "}
              <a href="" className="text-primary hover:underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
        <div className="flex justify-around items-center absolute right-[8%] bottom-35">
          <img src={rightimage} alt=" " className="w-[380px] h-auto" />
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
