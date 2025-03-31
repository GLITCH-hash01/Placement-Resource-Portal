import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Heading from "../../components/Heading";
import Card from "../../components/Card";
import { LoadingContext } from "../../ContextStore";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useContext(LoadingContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/events/internships/latest", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setEvents(res.data.events);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Failed to fetch events");
      });
  }, []);

  return (
    <div className="p-4 w-full h-full custom-scrollbar flex flex-col gap-8 overflow-y-auto">
      <div
        className="bg-white w-full h-fit p-4 py-10 shadow-md mb-20 rounded-lg"
        style={{ boxShadow: "0px 4px 0px 0px #9b9bff" }}>
        <div className="flex justify-between items-center mb-10">
          <Heading>Events</Heading>
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
                  onClick={() => {
                    window.open(event.know_more, "_blank");
                  }}
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
