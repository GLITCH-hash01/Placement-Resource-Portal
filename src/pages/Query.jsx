import React, { useEffect, useState, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { FaRegCommentAlt } from "react-icons/fa";
import QueryCard from "../components/QueryCard";
import axios from "axios";
import { LoadingContext } from "../ContextStore";
import { toast } from "react-toastify";
import profileimg from "../assets/images/profile.png";

export default function Query() {
  const { id } = useParams();
  const commentRef = useRef(null);
  const [query, setQuery] = useState({});
  const [loading, setLoading] = useContext(LoadingContext);

  const fetchResponses = () => {
    axios
      .get(`/queries/get/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setQuery(res.data.query);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(`Error fetching responses ${err.message}`);
      });
  };

  const postResponse = () => {
    axios
      .post(
        `/queries/respond/${id}`,
        {
          response: commentRef.current.value,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        commentRef.current.value = "";
        setLoading(false);
        toast.success("Response posted successfully");
        fetchResponses();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(`Error posting response ${err.message}`);
      });
  };
  useEffect(() => {
    console.log(id);
    axios
      .get(`/queries/get/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.query);
        setQuery(res.data.query);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(`Error fetching query ${err.message}`);
      });
  }, []);

  return (
    <div className="flex w-full h-full flex-col gap-5 overflow-hidden p-5 px-10 bg-white shadow-lg rounded-xl ">
      <div className="flex flex-col w-full h-fit gap-3">
        <div className="flex gap-3 items-center">
          <span className="w-10 h-10 bg-primary rounded-full">
            <img src={profileimg} />
          </span>
          <div className="flex flex-col ">
            <div className="flex gap-3 items-center">
              <p className="text-xl font-semibold">{query.submitted_by?.username}</p>
              <span className="w-2 h-2 rounded-full bg-gray-600"></span>
              <p className="text-sm">{query.submitted_on}</p>
            </div>
            <p className="text-sm">{query.submitted_by?.role}</p>
          </div>
        </div>
        <p className="text-2xl ">{query.query_desc}</p>
        <div className="flex w-full gap-3 items-center justify-between">
          <span className="flex gap-3 items-center">
            <FaRegCommentAlt /> {query.response_count} Comments
          </span>
        </div>
      </div>
      <div className="flex gap-5 w-full max-h-50 ">
        <div className="flex flex-col gap-3 w-full">
          <textarea
            name=""
            ref={commentRef}
            id=""
            className="w-full p-3 rounded-lg outline-primary border border-primary"
            placeholder="Post your thoughts"></textarea>
          <button
            className="w-full h-10 bg-primary rounded-lg cursor-pointer shrink-0  "
            onClick={postResponse}>
            Post
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full py-3 overflow-hidden">
        <p className="text-xl font-medium">Comments</p>
        <div className="flex flex-col gap-3 overflow-y-auto w-full h-full">
          {query.responses?.length > 0 ? (
            query.responses?.map((response, index) => (
              <QueryCard
                desc={response.response}
                response_count={0}
                timestamp={response.responded_on}
                author={response.responded_by.username}
                authortype={response.responded_by.role}
                response={false}
              />
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
