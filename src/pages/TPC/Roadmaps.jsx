import React, { useEffect } from "react";
import Heading from "../../components/Heading";
import { LuComputer } from "react-icons/lu";
import { useContext } from "react";
import { LoadingContext } from "../../ContextStore";
import { MdOutlineSelectAll } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Roadmaps() {
  const [loading, setLoading] = useContext(LoadingContext);
  useEffect(() => {
    setLoading(false);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col gap-10 ">
      <Heading>Departments</Heading>
      <div
        className="bg-white  w-full h-[70%] flex gap-10  p-4 py-10 shadow-md rounded-lg"
        style={{ boxShadow: "0px 4px 0px 0px #9b9bff" }}>
        <div className="flex text-3xl gap-5 p-10 px-14 cursor-pointer hover:scale-105 transition-all hover:shadow-lg shadow-primary bg-primary h-fit items-center justify-center rounded-md flex-col" onClick={()=>{navigate('/tpc/roadmaps/CSE')}}>
          <LuComputer />
          <p className="text-lg">CSE</p>
        </div>
        <div className="flex text-3xl gap-5 p-10 px-14 cursor-pointer hover:scale-105 transition-all hover:shadow-lg shadow-primary bg-primary h-fit items-center justify-center rounded-md flex-col" onClick={()=>{navigate('/tpc/roadmaps/ECE')}}>
          <MdOutlineSelectAll />
          <p className="text-lg">ECE</p>
        </div>
        <div className="flex text-3xl gap-5 p-10 px-14 cursor-pointer hover:scale-105 transition-all hover:shadow-lg shadow-primary bg-primary h-fit items-center justify-center rounded-md flex-col" onClick={()=>{navigate('/tpc/roadmaps/EEE')}}>
          <MdElectricBolt />
          <p className="text-lg">EEE</p>
        </div>
      </div>
    </div>
  );
}
