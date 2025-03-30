import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import { useParams } from "react-router-dom";
import axios from "axios";




export default function Note() {
  const { course } = useParams();
  const [Modules, setModules] = useState([]);

  useEffect(() => {
    axios
      .get(`/notes/course/modules/${course}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.modules);
        setModules(res.data.modules);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col w-full h-full py-10  p-8 overflow-y-scroll custom-scrollbar ">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <Heading>{course}</Heading>
          </div>
          <div className="flex gap-5 mb-8 bg-four p-12 rounded-3xl ">
            <div className="flex gap-5 overflow-y-scroll custom-scrollbar">
              {Modules.map((module, index) => (
                <Card key={index} title={`Module ${module}`} desc={""} />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-8 mb-10">
          <Heading>Placement Notes</Heading>
          <div className="flex gap-5 bg-four p-12 rounded-3xl">
            <div className="  flex gap-5  overflow-y-scroll custom-scrollbar">
              {PlacementNotes.CSE.map((note, index) => (
                <Card
                  key={index}
                  title={note.title}
                  desc={note.description}
                  onClick={() => {
                    window.location.href += "/note";
                  }}
                />
              ))}
            </div>
          </div>
        </div> */}
        {/* <div className="absolute -top-[-135px] -right-[-120px] bg-gray-200 text-black px-5 py-2 rounded-2xl shadow-md">
          S5
        </div> */}
      </div>
    </>
  );
}
