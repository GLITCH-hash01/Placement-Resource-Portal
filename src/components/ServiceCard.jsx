import { FaArrowCircleRight } from "react-icons/fa";

export default function ServiceCard({
  title,
  img,
  color,
  desc,
  text,
  colortext,
  text1,
}) {
  return (
    <>
      <div
        className={
          "w-120 h-60  border-2 border-black rounded-xl flex  items-start justify-start gap-4 py-5 p-6  font-primary " +
          color
        }
        style={{ boxShadow: "0px 4px 0px 0px #000" }}>
        <div className="h-full flex flex-col justify-start items-start w-[45%]">
          <p
            className={
              " text-black text-2xl font-bold text-left leading-5 " + text1
            }>
            {title}
          </p>
          <div className="flex items-center gap-2 mt-4 cursor-pointer">
            <p className="invert-50 ">{desc}</p>
           
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
