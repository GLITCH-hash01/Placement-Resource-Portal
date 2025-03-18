import React from "react";
import { useParams } from "react-router-dom";
import posterimg from "../assets/images/testposter.jpg"

export default function Event() {
  const { id } = useParams();
  return (
    <div className="bg-white w-full h-full flex gap-5 p-10">
      <div className="flex flex-col gap-1  p-5 text-left  justify-center">
        <img src={posterimg} alt="" className="max-w-80" />
        <p className="font-xl font-bold">TITLE</p>
        <p>by user</p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <p>DESCRIPTION</p>
      </div>
    </div>
  );
}
