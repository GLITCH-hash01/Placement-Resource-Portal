import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

import Card from "../../components/Card";
import { LoadingContext } from "../../ContextStore";
import Heading from "../../components/Heading";
import { toast } from "react-toastify";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useContext(LoadingContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/notes/latest", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setNotes(res.data.notes);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(`Error fetching notes: ${err.message}`);
      });
  }, []);
  return (
    <div className="p-4 w-full h-full custom-scrollbar flex flex-col gap-8 overflow-y-auto">
      <div
        className="bg-white w-full h-fit p-4 py-10 shadow-md rounded-lg"
        style={{ boxShadow: "0px 4px 0px 0px #9b9bff" }}>
        <div className="flex justify-between items-center mb-10">
          <Heading>Notes</Heading>
        </div>

        <div className="flex px-5 gap-5 w-full h-fit items-start justify-start">
          <div className="overflow-x-auto custom-scrollbar flex gap-5">
            {notes.map((note, index) => (
              <Card
                key={index}
                title={note.title}
                desc={note.name}
                onClick={() => (window.location.href = note.doc_url)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
