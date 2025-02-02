import logo from "../../assets/PRPLogo.png";
import rightimage from "../../assets/vector right.png";
import leftimage from "../../assets/vector left.png";
import arrow from "../../assets/arrow.png"
export default function Signin() {
  return (
    <>
      <div className="w-screen h-fit flex fixed justify-around items-center gap-200 p-4">
        <img src={logo} alt="" className="w-12 h-12" />
        <button
          className="bg-primary px-8 border-2 rounded-xl  border-black py-2 font-primary font-bold cursor-pointer"
          style={{ boxShadow: "0px 4px 0px 0px #000" }}>
          Sign up
        </button>
      </div>

      <div className="flex justify-center items-center px-8 relative font-primary gap-8 h-screen ">
        <div className="flex justify-center items-center absolute left-[20%] bottom-[15%]">
          <img src={leftimage} alt=" " className="w-[200px] h-auto" />
        </div>
        <div
          className="w-100 h-130 py-16  bg-black rounded-xl z-10 relative"
          style={{ boxShadow: "5px 5px 0px 0px #9B9BFF" }}>
          <img src={arrow} alt="" className=" absolute top-10 -right-13 w-20 h-20" />
          <img src={arrow} alt="" className="absolute bottom-10 -left-13 w-20 h-20 rotate-180"/>
          <h2 className="text-3xl text-primary font-bold text-center mb-4 ">
            Login
          </h2>
          <p className=" text-white px-10 pb-10 font-[400] text-lg text-center">
            Hey, Enter your details to Sign<br></br> into your account
          </p>
          <form className=" flex flex-col gap-4 px-10">
            <input
              type="email"
              id="email"
              className="w-80 h-10 p-4 rounded-3xl bg-white text-black text-sm outline-0"
              placeholder="Email Address"
              style={{ boxShadow: "3px 3px 0px 0px #9B9BFF" }}
            />
            <input
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
              <a href="" className="text-blue-400 hover:text-gray-400">
                Register Now
              </a>
            </p>
          </form>
        </div>
        <div className="flex justify-around items-center absolute right-[10%] bottom-20">
          <img src={rightimage} alt=" " className="w-[400px] h-[400px] " />
        </div>
      </div>
    </>
  );
}
