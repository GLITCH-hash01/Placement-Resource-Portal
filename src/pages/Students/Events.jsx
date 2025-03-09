import React from 'react';
import EventCard from "../../components/EventCard";
import Heading from "../../components/Heading";

export default function Events() {
  return (
    <div>
     
      <div className="bg-white w-full h-80 mb-6 p-4">
        <div className="flex justify-between items-center mb-10">
        <div>
            <Heading>College Events</Heading>
          </div>
          <button className="px-6 py-2 bg-primary text-xl text-black rounded-xl font-bold hover:primary cursor-pointer"
            style={{ boxShadow: "0px 4px 5px 2px #000000" }}
          >
            View All
          </button>
        </div>
        <div className="flex gap-15 mt-4">
          <EventCard isReversed={false} />
          <EventCard isReversed={true} />
          <EventCard isReversed={false} />
        </div>
      </div>

      
      <div className="bg-white w-full h-80 mt-6">
        <div className="flex justify-between items-center mb-10">
        <div>
            <Heading>Internships</Heading>
          </div>
          <button className="px-6 py-2 bg-primary text-xl text-black rounded-xl font-bold hover:bg-primary cursor-pointer"
            style={{ boxShadow: "0px 4px 5px 2px #000000" }}
          >
            View All
          </button>
        </div>
        <div className="flex gap-15 mt-4">
          <EventCard isReversed={true} />
          <EventCard isReversed={false} />
          <EventCard isReversed={true} />
        </div>
      </div>
    </div>
  );
}
