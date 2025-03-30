import thunder from "../../assets/images/thunder.png";
import circle from "../../assets/images/circlestar.png";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Happen() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center w-screen h-screen gap-30 pl-3"
        id="about">
        <div className="bg-four p-10 rounded-lg shadow-lg w-300 h-90 mt-0.5 ">
          <h2 className="text-3xl font-primary font-bold mb-4 pl-8">
            Let's make this Happen
          </h2>
          <div className="relative">
            <img
              src={thunder}
              alt="Thunder"
              className="w-10 h-10 mt-4  absolute -top-15 left-85"
            />
          </div>
          <div className="mt-8 relative pl-8">
            <p className="text-third text-left w-150 h-fit flex flex-col font-primary font-light t mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <img
              src={circle}
              alt="Circle Star"
              className="w-60 h-50 mt-4 absolute -top-13 right-20"
            />
            <button
              onClick={() => {
                window.location.href = "/signup";
              }}
              className="bg-primary px-8 pl-8 text-2xl border-2 rounded-2xl max-w-60 h-15 font-primary font-bold 
                border-black py-2 cursor-pointer flex gap-2 items-center justify-center mt-10 "
              style={{ boxShadow: "0px 4px 0px    0px#000" }}>
              Get Started
              <span className="-rotate-45 text-2xl">
                <FaArrowCircleRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
