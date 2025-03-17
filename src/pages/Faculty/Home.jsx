import React from "react";
import Heading from "../../components/Heading";
import Card from "../../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/notes/latest", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setNotes(res.data.notes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="p-4 w-full h-full custom-scrollbar flex flex-col gap-8 overflow-y-auto">
      <div
        className="bg-white w-full h-fit p-4 py-10 shadow-md rounded-lg"
        style={{ boxShadow: "0px 4px 0px 0px #9b9bff" }}>
        <div className="flex justify-between items-center mb-10">
          <Heading>Notes</Heading>
          {/* <button
                className="px-6 py-2 bg-primary text-xl text-black rounded-xl font-bold hover:bg-opacity-80 transition duration-300 cursor-pointer"
                style={{ boxShadow: "0px 4px 5px 2px rgba(0, 0, 0, 0.2)" }}>
                View All
              </button> */}
        </div>

        <div className="flex px-5 gap-5 w-full h-fit items-start justify-start">
          <div className="overflow-x-auto custom-scrollbar flex gap-5">
            {notes.map((note, index) => (
              <Card key={index} title={note.title} desc={note.name} onClick={()=>window.location.href=note.doc_url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
