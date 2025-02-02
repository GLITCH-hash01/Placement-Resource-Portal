import logo from "../../assets/PRPLogo.png";
import rightimage from "../../assets/vector right.png";
import leftimage from "../../assets/vector left.png";
import arrow from "../../assets/arrow.png";
import star2 from "../../assets/star.png";
export default function Signin() {
  return (
    <>
      <div className="w-screen h-fit flex fixed justify-around items-center gap-200 p-4">
        <img src={logo} alt="" className="w-15 h-15" />
        <button
          className="bg-primary px-10 border-2 rounded-xl text-2xl border-black py-3 cursor-pointer font-primary font-bold"
          style={{ boxShadow: "0px 4px 0px 0px #000" }}>
          Sign up
        </button>
      </div>

      <div className="flex justify-center items-center px-8 relative font-primary gap-8 h-screen ">
        <div className="flex justify-center items-center absolute left-[10%] ">
          <img src={leftimage} alt=" " className="w-[265px] h-auto " />
        </div>
        <div
          className="w-100 h-130 py-16  bg-black rounded-xl z-10 relative"
          style={{ boxShadow: "5px 5px 0px 0px #9B9BFF" }}>
          <img src={arrow} alt="" className=" absolute top-10 -right-12 w-20 h-20" />
          <img src={arrow} alt="" className=" absolute bottom-10 -left-12 w-20 h-20" />
          <h2 className="text-3xl text-primary font-bold text-center mb-4 ">
            Login
          </h2>
          <p className=" text-white px-10 pb-10 font-[400] text-lg text-center">
            Hey, Enter your details to Sign into your account
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
              className="bg-primary hover:bg-blue-600 px-4 border-2 border-black py-2 rounded-xl font-bold"
              style={{ boxShadow: "0px 2px 0px 0px #9B9BFF " }}>
              Sign in
            </button>
            <p className="text-sm text-center mt-4 text-white">
              Dont have an Account?{" "}
              <a href="" className="text-blue-400 hover:underline">
                Register Now
              </a>
            </p>
          </form>
        </div>
        <div className="flex justify-around items-center absolute right-[3%]">
          <img src={rightimage} alt=" " className="w-[505px] h-auto " />
        </div>
      </div>
       <div className="relative">
              <div className="absolute bottom-0 bg-primary w-screen box-border size-12 flex justify-center items-center">
               <div className="justify-items-center "> <img src={star2} className=""></img>
               </div>
              </div>
      
            </div>
    </>
  );
}
