import React, { useState, useEffect, useContext } from "react";
import { LoadingContext } from "../../../ContextStore";
import Heading from "../../../components/Heading";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";

export default function Roadmap_dep() {
  const { dep } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useContext(LoadingContext);
  const [noteWindow, setNoteWindow] = useState(false);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [roadmaps, setRoadmaps] = useState([]);

  const fetchRoadmaps = () => {
    const access_token = localStorage.getItem("token");
    if (access_token === null) {
      window.location.href = "/login";
    }
    axios
      .get(`/roadmaps/get/${dep}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setRoadmaps(res.data.roadmaps);
        console.log(res.data.roadmaps);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setEditWindow = (title, year) => {
    setTitle(title);
    setYear(year);
    setNoteWindow(true);
  };

  const updateRoadmap = () => {
    const access_token = localStorage.getItem("token");
    if (access_token === null) {
      window.location.href = "/login";
    }
    axios
      .put(
        `/roadmaps/update/${dep}`,
        { year: year, course: title },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        fetchRoadmaps();
        setNoteWindow(false);
        setTitle("");
        setYear(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRoadmaps();
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 justify-center shadow h-full w-full">
      <div className="flex items-start justify-between w-full">
        <Heading>{dep}</Heading>
      </div>
      <div className="w-full h-full flex-col rounded-xl bg-white flex p-4 ">
        {roadmaps.length > 0 ? (
          roadmaps.map((roadmap, index) => (
            <div
              className="flex justify-between w-full items-center border-b py-2 border-primary h-fit px-5"
              key={index}>
              <a
                className="hover:underline cursor-pointer"
                onClick={() => navigate(`${roadmap.year}`)}>
                Year {roadmap.year}
              </a>
              <a className="hover:underline cursor-pointer" onClick={() => navigate(`${roadmap.year}`)}>
                {roadmap.course}
              </a>
              <span className="flex">
                <span
                  className="flex rounded-md  cursor-pointer hover:border-four border border-white  p-3"
                  onClick={() => {
                    setEditWindow(roadmap.course, roadmap.year);
                  }}>
                  <MdOutlineModeEditOutline />
                </span>
              </span>
            </div>
          ))
        ) : (
          <p className="text-primary ">You haven't uploaded any notes yet </p>
        )}
      </div>
      {noteWindow && (
        <div
          className="fixed w-screen z-0 h-screen backdrop-blur-xs top-0 left-0 flex items-center justify-center"
          onClick={() => setNoteWindow(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="z-10 w-110 rounded-xl justify-around  items-center p-7  h-fit bg-white border-2 flex flex-col border-primary">
            <h2 className="text-3xl font-semibold">Year {year}</h2>
            <form action="" className="py-3 flex gap-5 flex-col w-full text-xl">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
                className="border-b-2 border-primary outline-0 "
              />
            </form>
            <button
              className="w-full rounded-xl bg-primary py-3 cursor-pointer "
              onClick={() => {
                updateRoadmap();
              }}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
