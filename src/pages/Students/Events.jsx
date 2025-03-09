import React from "react";
import EventCard from "../../components/EventCard";
import Heading from "../../components/Heading";
import posterimg from "../assets/images/testposter.jpg";
export default function Events() {

  const events = [
    { title: "Advent", desc: "Advent is an event of IEEE", poster: "/assets/images/testposter.jpg" },
    { title: "Advent", desc: "Advent is an event of IEEE", poster: "/assets/images/testposter.jpg" },
    { title: "Advent", desc: "Advent is an event of IEEE", poster: "/assets/images/testposter.jpg"},
  ];


  const internships = [
    { title: "Advent", desc: "Advent is an event of IEEE", poster: "/assets/images/testposter.jpg" },
    { title: "Advent", desc: "Advent is an event of IEEE", poster: "/assets/images/testposter.jpg" },
    { title: "Advent", desc: "Advent is an event of IEEE", poster: "/assets/images/testposter.jpg"},
  ];

  return (
    <div className="p-4">
  
      <div className="bg-white w-full min-h-80 mb-6 p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <Heading>College Events</Heading>
          <button
            className="px-6 py-2 bg-primary text-xl text-black rounded-xl font-bold hover:bg-opacity-80 transition duration-300 cursor-pointer"
            style={{ boxShadow: "0px 4px 5px 2px rgba(0, 0, 0, 0.2)" }}
          >
            View All
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mt-2 w-full h-full items-start justify-start">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              desc={event.desc}
              poster={event.poster}
              isPoster={true}
            />
          ))}
        </div>
      </div>

      
      <div className="bg-white w-full min-h-80 mt-6 p-3 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <Heading>Internships</Heading>
          <button
            className="px-6 py-2 bg-primary text-xl text-black rounded-xl font-bold hover:bg-opacity-80 transition duration-300 cursor-pointer"
            style={{ boxShadow: "0px 4px 5px 2px rgba(0, 0, 0, 0.2)" }}
          >
            View All
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mt-2 w-full h-full items-start justify-start">
          {internships.map((internship, index) => (
            <EventCard
              key={index}
              title={internship.title}
              desc={internship.desc}
              poster={internship.poster}
              isPoster={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
