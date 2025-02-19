import React from "react";
import Heading from "../../../components/Heading";
import { IoCompassOutline } from "react-icons/io5";

export default function Roadmaps() {
  return (
    <div
      className="w-full h-full bg-white rounded-xl p-8"
      style={{ boxShadow: "0px 3px 0px 0px #9B9BFF" }}>
      <div className="flex items-start mb-6">
        <Heading>Roadmaps</Heading>
      </div>
      <div className="relative flex items-center w-full">
        <div className="absolute w-full h-18 bg-black flex items-center mt-100">
          <div className="w-full border-dashed border-t-2 border-white mx-4 flex items-center justify-center mt-15">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-250">
              <IoCompassOutline size={50} />
            </div>
          </div>
        </div>
        <div className="relative w-full flex justify-start px-8">
          <div className="flex flex-col items-center">
            <p className="mt-2 bg-primary px-3 py-1 rounded-lg text-center font-primary">
              Year 1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
