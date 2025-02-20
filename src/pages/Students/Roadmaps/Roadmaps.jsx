import React from "react";
import Heading from "../../../components/Heading";
import { IoCompassOutline } from "react-icons/io5";

export default function Roadmaps() {
  return (
    <div
      className="w-full h-full bg-white rounded-xl py-8"
      style={{ boxShadow: "0px 3px 0px 0px #9B9BFF" }}>
      <div className="flex items-start mb-6">
        <Heading>Roadmaps</Heading>
      </div>
      <div className="relative flex items-center h-full w-full">
        <div className="flex w-full h-20 bg-black items-center">
          <span className="w-full  border border-white border-dashed"></span>
        </div>
        <div className="absolute top-[50%] gap-20 h-72 w-full flex items-center  -translate-y-[50%]">
          j{" "}
          <div className="h-full flex flex-col items-center justify-center gap-10 ">
            <div className="bg-primary text-black font-primary px-3 py-2 rounded-xl font-bold text-center border-black border-2" style={{ boxShadow: "0px 4px 0px 0px #000000" }}>
            <p>Year 1</p>
            </div>
            <div className=" bg-white h-25   w-25 rounded-full">
            <IoCompassOutline />
            </div>
            <div className="bg-primary text-black font-primary px-3 py-2 rounded-xl font-bold text-center" style={{ boxShadow: "0px 4px 5px 0px #000000" }}>
            <p>Foundation & Basics</p>
            </div>
          </div>
          <div className="h-full flex flex-col items-center justify-center gap-10">
            <div className="bg-primary text-black font-primary px-3 py-2 rounded-xl font-bold text-center border-black border-2" style={{ boxShadow: "0px 4px 0px 0px #000000" }}>
            <p>Year 2</p>
            </div>
            <div className=" bg-white h-25   w-25 rounded-full "></div>
            <div className="bg-primary text-black font-primary px-3 py-2 rounded-xl font-bold text-center" style={{ boxShadow: "0px 4px 5px 0px #000000" }}>
            <p>Intermediate Level & Core Subject</p>
            </div>
          </div>
          <div className="h-full flex flex-col items-center justify-center gap-10 ">
            <div className="bg-primary text-black font-primary px-3 py-2 rounded-xl font-bold text-center border-black border-2" style={{ boxShadow: "0px 4px 0px 0px #000000" }}>
            <p>Year 3</p>
            </div>
            <div className=" bg-white h-25   w-25 rounded-full"></div>
            <div className="bg-primary text-black font-primary px-3 py-2 rounded-xl font-bold text-center" style={{ boxShadow: "0px 4px 5px 0px #000000" }}>
            <p>Specialization & Industry Readiness
            </p>
            </div>
          </div>
          <div className="h-full flex flex-col items-center justify-center gap-10 ml-18">
            <div className="bg-primary text-black font-primary px-3 py-2 rounded-xl font-bold text-center border-black border-2" style={{ boxShadow: "0px 4px 0px 0px #000000" }}>
            <p>Year 4</p>
            </div>
            <div className=" bg-white h-25   w-25 rounded-full"></div>
            <div className="bg-primary text-black font-primary px-3 py-2 rounded-xl font-bold text-center" style={{ boxShadow: "0px 4px 5px 0px #000000" }}>
            <p>Placement & Career Preparation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
