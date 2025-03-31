import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect, useRef,useContext } from "react";

import QueryCard from "../../components/QueryCard";
import { LoadingContext } from "../../ContextStore";

export default function Query() {
  const queryRef = useRef(null);
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useContext(LoadingContext);

  const funcOnClick = (id) => {
    window.location.href = window.location.href + `/${id}`;
  };

  const fetchQueries = () => {
    const token = localStorage.getItem("token");
    axios
      .get("/queries/get/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setQueries(res.data.queries);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Failed to fetch queries");
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
    <div className="flex w-full h-full flex-col gap-5 overflow-hidden bg-white p-3 shadow-md border rounded-md">
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
      <div className="flex w-full max-h-[73%]  h-full flex-col gap-5 ">
        <h3 className="text-xl font-semibold">Questions</h3>
        <div className="w-full h-fit overflow-y-auto flex flex-col gap-5">
          {queries.map((query, index) => (
            <QueryCard
              desc={query.query_desc}
              response_count={query.responses.length}
              author={query.submitted_by.username}
              authortype={query.submitted_by.role}
              timestamp={query.submitted_on}
              key={index}
              onClick={()=>funcOnClick(query.query_id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
