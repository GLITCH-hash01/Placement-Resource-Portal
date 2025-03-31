import React, { useEffect, useState, useContext } from "react";
import roadmapimg from "../../../assets/images/roadmapimg.png";
import iconroad from "../../../assets/images/iconroad.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { LoadingContext } from "../../../ContextStore";
import axios from "axios";

export default function Roadmap() {
  const [loading, setLoading] = useContext(LoadingContext);
  const { dep, year } = useParams();
  const [roadmap, setRoadmap] = useState({
    roadmap: {
      title: "",
      year: "",
      courses: [],
    },
  });

  useEffect(() => {
    axios
      .get(`/roadmaps/get/${dep}?year=${year}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setRoadmap(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="w-full relative h-full text-black rounded-lg bg-white flex gap-10 shadow-lg p-10 shadow-primary items-center ">
        <div className="w-1/2 flex flex-col gap-8">
          <div className="flex bg-primary p-5 max-w-90 text-3xl rounded-lg relative shadow ">
            <h1 className="font-bold ">{roadmap.roadmap.title}</h1>
            <div className="w-8 h-8 rounded-md -bottom-3 absolute rotate-45 bg-primary "></div>
          </div>
          <div className="flex flex-col gap-3">
            {roadmap.roadmap.courses.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <img src={iconroad} alt="Bullet" className=" h-6" />
                  <span className="flex-1">{item.course_title}</span>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={() =>
                      (window.location.href = item.course_resources)
                    }
                    className="bg-primary px-8 text-sm gap-2 border-1 rounded-xl w-28 h-8 font-primary font-bold border-black cursor-pointer flex items-center justify-center"
                    style={{ boxShadow: "0px 4px 0px 0px #000" }}>
                    Resources
                    <span className="-rotate-40 bg-black rounded-full text-l">
                      <FaArrowCircleRight className="text-white" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 grow h-fit">
          <img src={roadmapimg} alt="roadmapimg" className="w-full h-125" />
        </div>
      </div>
    </>
  );
}
