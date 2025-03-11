import React from "react";
import Heading from "../../components/Heading";
import Card from "../../components/Card";
import posterimg from "../../assets/images/testposter.jpg";

export default function Home() {
  const events = [
    { title: "Advent", desc: "Advent is an event of IEEE", poster: posterimg },
    { title: "Advent", desc: "Advent is an event of IEEE", poster: posterimg },
    { title: "Advent", desc: "Advent is an event of IEEE", poster: posterimg },
    { title: "Advent", desc: "Advent is an event of IEEE", poster: posterimg },
    { title: "Advent", desc: "Advent is an event of IEEE", poster: posterimg },
    { title: "Advent", desc: "Advent is an event of IEEE", poster: posterimg },
  ];

  return (
    <div className="p-4 w-full h-full custom-scrollbar flex flex-col gap-8 overflow-y-auto">
      <div
        className="bg-white w-full h-fit p-4 py-10 shadow-md mb-20 rounded-lg"
        style={{ boxShadow: "0px 4px 0px 0px #9b9bff" }}
      >
        <div className="flex justify-between items-center mb-10">
          <Heading>Events</Heading>
          {/* <button
                className="px-6 py-2 bg-primary text-xl text-black rounded-xl font-bold hover:bg-opacity-80 transition duration-300 cursor-pointer"
                style={{ boxShadow: "0px 4px 5px 2px rgba(0, 0, 0, 0.2)" }}>
                View All
              </button> */}
        </div>

        <div className="flex gap-5 w-full h-fit items-center justify-start">
          {events.length === 0 ? (
            <div className="text-center w-full h-full text-2xl font-bold text-gray-400">
              No Events available
            </div>
          ) : (
            <div className="overflow-x-auto custom-scrollbar flex gap-5">
              {events.map((event, index) => (
                <Card
                  key={index}
                  title={event.title}
                  desc={event.desc}
                  poster={event.poster}
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