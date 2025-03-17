import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegCommentAlt } from "react-icons/fa";
import QueryCard from "../components/QueryCard";
import axios from "axios";
export default function Query() {
  const { id } = useParams();
  const [query, setQuery] = useState({});
  useEffect(() => {
    console.log(id);
    axios
      .get(`/queries/get/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setQuery(res.data.query);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex w-full h-full flex-col gap-5 overflow-hidden p-5 px-10 bg-white shadow-lg rounded-xl ">
      <div className="flex flex-col w-full h-fit gap-3">
        <p className="text-2xl ">{query.query_desc}</p>
        <div className="flex w-full gap-3 items-center justify-between">
          {/* <span className="h-2 w-2 rounded-full bg-gray-400"></span> */}
          <span className="flex gap-3 items-center">
            <FaRegCommentAlt /> {query.response_count} Comments
          </span>
          <span>{query.submitted_on}</span>
        </div>
      </div>
      <div className="flex gap-5 w-full max-h-50 ">
        <span className="w-10 h-10 bg-primary rounded-full"></span>
        <div className="flex flex-col gap-3 w-full">
          <textarea
            name=""
            id=""
            className="w-full p-3 rounded-lg outline-primary border border-primary"
            placeholder="Post your thoughts"></textarea>
          <button className="w-full h-10 bg-primary rounded-lg cursor-pointer shrink-0  ">
            Post
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full py-3 overflow-hidden">
        <p className="text-xl font-medium">Comments</p>
        <div className="flex flex-col gap-3 overflow-y-auto w-full h-full">
          {query.responses?.length > 0 ? (
            query.responses?.map((response, index) => (
              <QueryCard desc={response.response} response_count={0} />
            ))
          ) : (
            <div className="w-full flex h-full justify-center items-center">
              <p>No Comments Available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
