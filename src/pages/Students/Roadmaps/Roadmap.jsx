import React from 'react'
import roadmapimg from "../../../assets/images/roadmapimg.png";
import iconroad from "../../../assets/images/iconroad.png";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Roadmap() {
  return (
    <>
        <div className="w-full h-full text-black rounded-lg bg-white flex gap-10 shadow-lg p-10 shadow-primary items-center ">
            
            <div className="w-1/2 flex flex-col gap-8">
            <h1 className="font-bold ">Foundation and Exploration</h1>
              {[
                "Focus Communication and Basic Skills",
                "Improve English Communication and Presentation Skills",
                "Learn the Basics of Programming (e.g., Python, C/C++)",
                "Explore engineering fields by joining college clubs, workshops, or hackathons"
              ].map((text, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center gap-4">
                    <img
                      src={iconroad}
                      alt="Bullet"
                      className="w-6 h-6"
                    />
                    <span className="flex-1">{text}</span>
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      className="bg-primary px-8 pl-8 text-s border-1 rounded-xl w-28 h-10 font-primary font-bold border-black cursor-pointer flex items-center justify-center"
                      style={{ boxShadow: "0px 4px 0px 0px #000" }}>
                      Resources
                      <span className="-rotate-40 text-l">
                        <FaArrowCircleRight className='text-white' />
                      </span>
                    </button>
                  </div>
                </div>
              ))}

            </div>
            <div className="relative grow h-fit">
              <img
                src={roadmapimg}
                alt="roadmapimg"
                className="w-full h-125"
              />
            </div>
        </div>
    </>
  )
}
