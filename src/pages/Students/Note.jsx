import React, { useEffect, useState, useContext } from "react";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LoadingContext } from "../../ContextStore";
import { toast } from "react-toastify";

export default function Note() {
  const { course } = useParams();
  const [Modules, setModules] = useState([]);
  const [loading, setLoading] = useContext(LoadingContext);

  useEffect(() => {
    axios
      .get(`/notes/course/modules/${course}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setModules(res.data.modules);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(`Error fetching modules ${err.message}`);
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
              {Modules.length === 0 ? (
                <div className="flex flex-col justify-center items-center w-full h-full">
                  <h1 className="text-xl font-primary  text-center">
                    No Notes availabale for this course yet. Please check back
                    later.
                  </h1>
                </div>
              ) : (
                Modules.map((module, index) => (
                  <Card key={index} title={`Module ${module}`} desc={""} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
