import React from "react";
import EventCard from "../../components/Card";
import Heading from "../../components/Heading";
import posterimg from "../../assets/images/testposter.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Events() {
  const internships = [];
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/events/get-all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setEvents(res.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-4  w-full h-full custom-scrollbar flex flex-col gap-8 overflow-y-auto">
      <div
        className="bg-white  w-full h-fit  p-4 py-10 shadow-md rounded-lg"
        style={{ boxShadow: "0px 4px 0px 0px #9b9bff" }}>
        <div className="flex justify-between items-center mb-10">
          <Heading>College Events</Heading>
          {/* <button
            className="px-6 py-2 bg-primary text-xl text-black rounded-xl font-bold hover:bg-opacity-80 transition duration-300 cursor-pointer"
            style={{ boxShadow: "0px 4px 5px 2px rgba(0, 0, 0, 0.2)" }}>
            View All
          </button> */}
        </div>

        <div className="flex px-5 gap-5 w-full h-fit items-start justify-start">
          <div className="overflow-x-auto custom-scrollbar flex gap-5">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                desc={event.desc}
                poster={event.poster_url}
                isPoster={true}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="bg-white w-full h-fit p-4 py-10 shadow-md mb-20 rounded-lg"
        style={{ boxShadow: "0px 4px 0px 0px #9b9bff" }}>
        <div className="flex justify-between items-center mb-10">
          <Heading>Internships</Heading>
          {/* <button
            className="px-6 py-2 bg-primary text-xl text-black rounded-xl font-bold hover:bg-opacity-80 transition duration-300 cursor-pointer"
            style={{ boxShadow: "0px 4px 5px 2px rgba(0, 0, 0, 0.2)" }}>
            View All
          </button> */}
        </div>

        <div className="flex gap-5  w-full h-fit items-center justify-start">
          {internships.length === 0 ? (
            <div className="text-center w-full h-full text-2xl font-bold text-gray-400">
              No internships available
            </div>
          ) : (
            internships.map((internship, index) => (
              <EventCard
                key={index}
                title={internship.title}
                desc={internship.desc}
                poster={internship.poster}
                isPoster={true}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
