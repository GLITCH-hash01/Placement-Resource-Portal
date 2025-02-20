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
        <div className="absolute top-[50%] gap-10 h-72 w-full flex items-center  -translate-y-[50%]">
          j{" "}
          <div className="h-full flex flex-col items-center justify-center gap-10">
            <p>Year</p>
            <div className=" bg-white h-25   w-25 rounded-full"></div>
            <p>Foundation</p>
          </div>
          <div className="h-full flex flex-col items-center justify-center gap-10">
            <p>Year</p>
            <div className=" bg-white h-25   w-25 rounded-full"></div>
            <p>Foundation</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
