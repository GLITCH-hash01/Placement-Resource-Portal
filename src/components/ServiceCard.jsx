import { FaArrowCircleRight } from "react-icons/fa";
import maindash from "../assets/maindash.png";
import roadmap from "../assets/roadmap.png";
import arrowserv1 from "../assets/arrowserv1.png";


export default function ServiceCard({title,img,color,text,colortext, text1}) {
  return (
    <>
      <div
        className={"w-120 h-60  border-2 border-black rounded-xl flex  items-start justify-start gap-4 py-5 p-6  font-primary "+color}
        style={{ boxShadow: "0px 4px 0px 0px #000" }}
      >
        <div className="h-full flex flex-col justify-between items-start w-[45%]">
          <p className={" text-black text-2xl font-bold text-left leading-5 "+ text1}>
            {title}
          </p>
          <div className="flex items-center gap-2 mt-4 cursor-pointer">
            <button className={" font-semibold transition cursor-pointer whitespace-nowrap "+text}>
              Learn More
            </button>
            <span className={"-rotate-45 text-2xl "+colortext }>
              <FaArrowCircleRight />
            </span>
          </div>
        </div>
        <div className="w-full flex justify-center items-center h-full">
          <img
            src={img}
            alt="main dash"
            className="max-w-full h-auto rounded-md"
          />
        </div>
      </div>
    </>
  );
}
