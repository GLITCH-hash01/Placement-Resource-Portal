import React from "react";
import QueryCard from "../../components/QueryCard";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

export default function Query() {
  const queryRef = useRef(null);
  const [queries, setQueries] = useState([]);
  const fetchQueries = () => {
    const token = localStorage.getItem("token");
    axios
      .get("/queries/get/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setQueries(res.data.queries);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchQueries();
  }, []);

  const postQuery = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "/queries/add",
        {
          query_title: "Query",
          query_desc: queryRef.current.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        queryRef.current.value = "";
        fetchQueries();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex w-full h-full flex-col gap-5 overflow-hidden">
      <div className="flex gap-5 justify-between relative">
        <textarea
          name=""
          ref={queryRef}
          id=""
          placeholder="Ask your questions..."
          className="bg-four w-full rounded-md p-4"></textarea>
        <button
          className="bg-primary text-white px-6 cursor-pointer py-2 rounded-md absolute bottom-3 right-3"
          onClick={postQuery}>
          Post Query
        </button>
      </div>
      <div className="flex w-full  h-full flex-col gap-5 ">
        <h3 className="text-xl font-semibold">Your Questions</h3>
        <div className="w-full h-fit overflow-y-auto flex flex-col gap-5">
          {queries.map((query, index) => (
            <QueryCard
              desc={query.query_desc}
              response_count={query.responses.length}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
