import React, { useEffect, useState, useContext } from "react";
import Heading from "../../../components/Heading";
import { IoCompassOutline } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoArrowForwardCircle } from "react-icons/io5";
import axios from "axios";
import { LoadingContext } from "../../../ContextStore";

export default function Roadmaps() {
  const [loading, setLoading] = useContext(LoadingContext);
  const [data, setData] = useState([
    {
      year: "",
      icon: "",
      title: "",
    },
  ]);
  const [dep, setDep] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setDep(user.department);
    axios
      .get(`/roadmaps/get/${user.department}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data.roadmaps);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  }, []);

  const icondata = [
    {
      icon: <IoCompassOutline size={100} />,

      link: "",
    },
    {
      icon: <FaCalendarCheck size={50} />,

      link: "",
    },
    {
      icon: <PiStudentBold size={60} />,
      link: "",
    },
    {
      icon: <MdOutlineWorkHistory size={70} />,
      link: "",
    },
  ];

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
        <div className="absolute top-[50%] gap-20 h-72 w-full flex items-center justify-center    -translate-y-[50%]">
          {data.map((item, index) => (
            <div className="h-full flex flex-col items-center justify-center gap-10 ">
              <div
                className="bg-primary cursor-pointer text-black font-primary px-3 py-2 rounded-xl font-bold text-center border-black border-2"
                style={{ boxShadow: "0px 4px 0px 0px #000000" }}>
                <p>Year {item.year}</p>
              </div>
              <div className=" bg-white h-25 text-md items-center justify-center w-25 rounded-full flex flex-center">
                {icondata[index].icon}
              </div>
              <div
                className="bg-primary text-black font-primary px-3 py-2 rounded-xl font-bold text-center"
                style={{ boxShadow: "0px 4px 5px 0px #000000" }}>
                <a
                  href={`/student/roadmaps/roadmap/${dep}/${index + 1}`}
                  className="flex items-center justify-center gap-2">
                  {item.course}{" "}
                  <span className=" text-xl bg-black  -rotate-45 text-white rounded-full">
                    <IoArrowForwardCircle />
                  </span>{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
