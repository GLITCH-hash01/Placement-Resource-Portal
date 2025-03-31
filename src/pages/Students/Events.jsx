import React from "react";
import EventCard from "../../components/Card";
import Heading from "../../components/Heading";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LoadingContext } from "../../ContextStore";
import { toast } from "react-toastify";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useContext(LoadingContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/events/get-all", {
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
        toast.error(`Error fetching events ${err.message}`);
      });
    axios
      .get("/events/internships/latest", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.events);
        setInternships(res.data.events);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(`Error fetching internships ${err.message}`);
      });
  }, []);

  return (
    <div className="p-4  w-full h-full custom-scrollbar flex flex-col gap-8 overflow-y-auto">
      <div
        className="bg-white  w-full h-fit  p-4 py-10 shadow-md rounded-lg"
        style={{ boxShadow: "0px 4px 0px 0px #9b9bff" }}>
        <div className="flex justify-between items-center mb-10">
          <Heading>College Events</Heading>
        </div>

        <div className="flex px-5 gap-5 w-full h-fit items-start justify-start">
          <div className="overflow-x-auto custom-scrollbar flex gap-5">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                desc={event.desc}
                poster={event.poster_url}
                onClick={() => {
                  window.open(
                    event.know_more
                      ? event.know_more
                      : "https://www.google.com",
                    "_blank"
                  );
                }}
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
        </div>

        <div className="flex gap-5  w-full h-fit items-center justify-start">
          {internships?.length === 0 ? (
            <div className="text-center w-full h-full text-2xl font-bold text-gray-400">
              No internships available
            </div>
          ) : (
            internships?.map((internship, index) => (
              <EventCard
                key={index}
                title={internship.title}
                desc={internship.desc}
                poster={internship.poster_url}
                onClick={() =>
                  window.open(
                    internship.know_more.startsWith("http")
                      ? internship.know_more
                      : "https://" + internship.know_more,
                    "_blank"
                  )
                }
                isPoster={true}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
