import React, { useState, useEffect, useRef, useContext } from "react";
import { LoadingContext } from "../../../ContextStore";
import Heading from "../../../components/Heading";
import { useParams } from "react-router-dom";
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { FaLink } from "react-icons/fa6";
export default function Roadmap_dep() {
  const { dep, year } = useParams();
  const [loading, setLoading] = useContext(LoadingContext);
  const [noteWindow, setNoteWindow] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [id, setId] = useState(0);
  const [roadmaps, setRoadmaps] = useState([]);

  const setEditWindow = (title, url, id) => {
    setTitle(title);
    setUrl(url);
    setId(id);
    setNoteWindow(true);
  };

  const fetchRoadmaps = () => {
    axios
      .get(`/roadmaps/get/${dep}?year=${year}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.roadmap.courses);
        setRoadmaps(res.data.roadmap.courses);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRoadmapCourse = (id) => {
    axios
      .delete(`/roadmaps/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        toast.success(res.data.msg);
        fetchRoadmaps();
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
        console.log(err);
      });
  };
  const updateRoadmapCourse = (id) => {
    if (id == -1) {
      axios
        .post(
          `/roadmaps/upload/${dep}/${year}`,
          {
            courses: [
              {
                course_title: title,
                course_resources: url,
              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          toast.success(res.data.msg);
          setNoteWindow(false);
          fetchRoadmaps();
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.msg);
        });
    } else {
      axios
        .put(
          `/roadmaps/update/course/${id}`,
          { course_title: title, course_resources: url },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setNoteWindow(false);
          fetchRoadmaps();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    fetchRoadmaps();
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 justify-center shadow h-full w-full">
      <div className="flex items-start justify-between w-full">
        <Heading>Courses</Heading>
        <button
          onClick={() => {
            setTitle("");
            setUrl("");
            setId(-1);
            setNoteWindow(true);
          }}
          className="bg-primary hover:bg-four transition-all duration-150 delay-100 ease-in-out px-4 border-2 rounded-xl text-2xl font-primary font-bold border-black py-2 cursor-pointer flex items-center justify-center w-fit gap-3">
          Add course
        </button>
      </div>
      <div className="w-full h-full flex-col rounded-xl bg-white flex p-4 ">
        {roadmaps.length > 0 ? (
          roadmaps.map((roadmap, index) => (
            <div
              className="flex justify-between w-full items-center border-b py-2 border-primary h-fit px-5"
              key={index}>
              <a>{roadmap.course_title}</a>
              <a
                href={roadmap.course_resources}
                className="hover:underline flex gap-1 items-center ">
                <FaLink />
                {roadmap.course_resources}
              </a>
              <span className="flex gap-2">
                <span
                  className="flex rounded-md cursor-pointer hover:border-four border border-white  p-3"
                  onClick={() => {
                    setEditWindow(
                      roadmap.course_title,
                      roadmap.course_resources,
                      roadmap.course_id
                    );
                  }}>
                  <MdOutlineModeEditOutline />
                </span>
                <span
                  className="flex rounded-md cursor-pointer hover:text-red-500 hover:border-four border border-white  p-3"
                  onClick={() => {
                    deleteRoadmapCourse(roadmap.course_id);
                  }}>
                  <MdDeleteOutline />
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
            <h2 className="text-3xl font-semibold">
              {id == -1 ? "Add Course" : "Edit Course"}
            </h2>
            <form action="" className="py-3 flex gap-5 flex-col w-full text-xl">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
                className="border-b-2 border-primary outline-0 "
              />
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                placeholder="Resource Link"
                className="border-b-2 border-primary outline-0 "
              />
            </form>
            <button
              className="w-full rounded-xl bg-primary py-3 cursor-pointer "
              onClick={() => {
                updateRoadmapCourse(id);
              }}>
              {id == -1 ? "Add" : "Update"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
