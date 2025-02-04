import vector from "../../assets/images/vector main.png";
import { FaArrowCircleRight } from "react-icons/fa";
import star from "../../assets/images/starvector.png";
import Button from "../../components/Button";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center gap-30 w-screen h-screen">
        <div className="flex flex-col justify-center items-left gap-10">
          <h1 className="text-7xl leading-24 font-primary font-bold text-left ">
            {" "}
            Placement Resource <br />
            Portal
          </h1>
          <p className="font-primary text-left w-170 h-fit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <Button
            icon={
              <span className="-rotate-45 text-2xl">
                <FaArrowCircleRight />
              </span>
            }>
            Get Started
          </Button>
        </div>
        <img src={vector} className="size-130"></img>
      </div>
      <div className="relative">
        <div className="absolute bottom-0 bg-third w-screen box-border size-15 flex justify-center items-center">
          <div className="flex flex-row justify-center ">
            {" "}
            <img src={star} className="text-2xl"></img>
          </div>
        </div>
      </div>
    </>
  );
}
