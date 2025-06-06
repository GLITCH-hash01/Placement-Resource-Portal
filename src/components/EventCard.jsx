import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import posterimg from "../assets/images/testposter.jpg";

export default function Card({
  poster = posterimg,
  isPoster = false,
  title,
  desc,
  onClick,
}) {
  return (
    <div className="relative w-[280px] sm:w-[300px] h-fit min-h-[160px] flex-shrink-0">
  
      <svg width="0" height="0">
        <defs>
          <clipPath id="card-mask" clipPathUnits="objectBoundingBox">
            <path
              d="M0 0.088V0.028C0 0.0125 0.009 0 0.02 0H0.11H0.211C0.216 0 0.221 0.004 0.225 0.008L0.268 0.061C0.272 0.064 0.278 0.067 0.283 0.067L0.978 0.074C0.988 0.074 0.996 0.083 0.996 0.093L1 0.97C1 0.981 0.99 0.99 0.979 0.99H0.02C0.009 0.99 0 0.981 0 0.971V0.088Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>

   
      <div
        className="bg-primary w-full pb-4 shadow-lg h-fit rounded-md transition-transform hover:scale-[1.02]"
        onClick={onClick}
        style={{ clipPath: "url(#card-mask)" }}>
        {isPoster && (
          <div className="w-full h-[120px] overflow-hidden rounded-b-md border-white border-b-4">
            <img src={poster} className="w-full h-full object-cover rounded-b-lg" />
          </div>
        )}
        <div className="py-3 px-3 flex flex-col justify-center">
          <h1 className="font-semibold text-lg">{title}</h1>
          <p className="text-sm text-ellipsis">{desc ? desc : ""}</p>
        </div>
        <div className="flex justify-between px-3 mt-2">
          <span className="flex gap-2 items-center text-xs font-semibold cursor-pointer">
            Learn more{" "}
            <span className="-rotate-45 text-black">
              <FaArrowCircleRight />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
