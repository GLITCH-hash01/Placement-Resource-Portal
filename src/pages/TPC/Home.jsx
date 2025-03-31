import React, { useContext, useEffect } from "react";
import Heading from "../../components/Heading";
import Card from "../../components/Card";
import { useState } from "react";
import axios from "axios";
import { LoadingContext } from "../../ContextStore";
import { toast } from "react-toastify";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useContext(LoadingContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/notes/placements/latest", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setNotes(res.data.placements);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        toast.error(`Error fetching courses ${err.message}`);
      });



    axios
      .get("/events/internships/latest", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setEvents(res.data.events);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        toast.error(`Error fetching courses ${err.message}`);
      });
  }, []);
  return (
    <div className="p-4  w-full h-full custom-scrollbar flex flex-col gap-8 overflow-y-auto">
      <div
        className="bg-white  w-full h-fit  p-4 py-10 shadow-md rounded-lg"
        style={{ boxShadow: "0px 4px 0px 0px #9b9bff" }}>
        <div className="flex justify-between items-center mb-10">
          <Heading>Latest Placements Notes</Heading>
          <button
            onClick={() => (window.location.href = "/tpc/notes")}
            className="px-6 py-2 bg-primary text-xl text-black rounded-xl font-bold hover:bg-opacity-80 transition duration-300 cursor-pointer"
            style={{ boxShadow: "0px 4px 5px 2px rgba(0, 0, 0, 0.2)" }}>
            View All
          </button>
        </div>

        <div className="flex px-5 gap-5 w-full h-fit items-start justify-start">
          <div className="overflow-x-auto custom-scrollbar flex gap-5">
            {Array.isArray(notes) && notes.length === 0 ? (
              <div className="text-center w-full h-full text-2xl font-bold text-gray-400">
                No Notes available
              </div>
            ) : (
              notes.map((note, index) => (
                <Card
                  key={index}
                  title={note.title}
                  desc={note.name}
                  onClick={() => (window.location.href = note.doc_url)}
                />
              ))
            )}
          </div>
        </div>
      </div>

      <div
        className="bg-white w-full h-fit p-4 py-10 shadow-md mb-20 rounded-lg"
        style={{ boxShadow: "0px 4px 0px 0px #9b9bff" }}>
        <div className="flex justify-between items-center mb-10">
          <Heading>Latest Internships</Heading>
          {/* <button
            onClick={() => (window.location.href = "/tpc/events")}
            className="px-6 py-2 bg-primary text-xl text-black rounded-xl font-bold hover:bg-opacity-80 transition duration-300 cursor-pointer"
            style={{ boxShadow: "0px 4px 5px 2px rgba(0, 0, 0, 0.2)" }}>
            View All
          </button> */}
        </div>

        <div className="flex gap-5  w-full h-fit items-center justify-start">
          {events.length === 0 ? (
            <div className="text-center w-full h-full text-2xl font-bold text-gray-400">
              No Internships available
            </div>
          ) : (
            <div className="overflow-x-auto custom-scrollbar flex gap-5">
              {events.map((event, index) => (
                <Card
                  key={index}
                  title={event.title}
                  desc={event.desc}
                  poster={event.poster_url}
                  onClick={() =>
                    (window.location.href = event.know_more
                      ? event.know_more
                      : "https://www.google.com")
                  }
                  isPoster={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
