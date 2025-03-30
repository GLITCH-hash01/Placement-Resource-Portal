import vector from "../../assets/images/vector main.png";
import { FaArrowCircleRight } from "react-icons/fa";
import star from "../../assets/images/starvector.png";
import Button from "../../components/Button";

export default function Hero() {
  return (
    <>
      <div
        className="flex justify-center items-center gap-30 w-screen h-screen"
        id="home">
        <div className="flex flex-col justify-center items-left gap-10">
          <h1 className="text-7xl leading-24 font-primary font-bold text-left ">
            {" "}
            Placement Resource <br />
            Portal
          </h1>
          <p className="font-primary text-left w-170 h-fit">
            Stay ahead with curated study materials, expert placement guidance,
            and skill-enhancing resources. From academic support to career
            opportunities, everything you need for success is right here! Gain
            access to the latest job openings, internship opportunities, and
            industry insights to boost your career prospects. Enhance your
            technical and soft skills with expertly curated resources designed
            to help you stand out.
          </p>

          <Button
            onClick={() => {
              window.location.href = "/signup";
            }}
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
