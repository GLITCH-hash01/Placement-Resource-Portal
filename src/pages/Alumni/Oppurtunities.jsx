import React, { useEffect } from "react";
import Heading from "../../components/Heading";
import { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaFolder } from "react-icons/fa";

export default function Oppurtunities() {
  const [oppurtunityWindow, setoppurtunityWindow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [oppurtunities, setOppurtunities] = useState([]);

  const title = useRef();
  const description = useRef();

  function fetchOppurtunities() {
    const access_token = localStorage.getItem("token");
    axios
      .get("/events/me/get", {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.events);
        setOppurtunities(res.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchOppurtunities();
  }, []);

  function addNotes(event) {
    event.stopPropagation();
    console.log("Adding notes");

    const formData = new FormData();
    formData.append("title", title.current.value);
    formData.append("desc", description.current.value);
    formData.append("poster", selectedFile);

    axios
      .post("/events/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        setoppurtunityWindow(false);
        fetchOppurtunities();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }
  return (
    <div className="flex flex-col items-center gap-3 justify-center h-full w-full ">
      <div className="flex items-start justify-between w-full">
        <Heading>Oppurtunities</Heading>
        <button
          onClick={() => setoppurtunityWindow(true)}
          className="bg-primary hover:bg-four  transition-all duration-150 delay-100 ease-in-out px-4 border-2 rounded-xl text-2xl font-primary font-bold border-black py-2 cursor-pointer flex items-center justify-center w-fit gap-3">
          Add Oppurtunity
        </button>
      </div>
      <div className="w-full h-full flex-col rounded-xl bg-white flex p-4 max-[400px]:bg-blue-400 ">
        {/* <p className="text-primary ">You haven't uploaded any notes yet </p> */}
        {oppurtunities.length > 0 ? (
          oppurtunities.map((oppurtunity, index) => (
            <div
              className="flex justify-between w-full items-center border-b py-2 border-primary h-fit px-5"
              key={index}>
              <FaFolder />
              <a href={oppurtunity.poster_url} className="hover:underline">
                {oppurtunity.title}
              </a>
              <p>{oppurtunity.desc}</p>
            </div>
          ))
        ) : (
          <p className="text-primary ">You haven't uploaded any oppurtunities yet </p>
        )}
      </div>
      {oppurtunityWindow && (
        <div
          className="fixed w-screen z-0 h-screen backdrop-blur-xs top-0 left-0 flex items-center justify-center"
          onClick={() => setoppurtunityWindow(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="z-10 w-110 rounded-xl justify-around  items-center p-7  h-3/4 bg-white border-2 flex flex-col border-primary">
            <h2 className="text-3xl font-semibold">Add new Oppurtunity</h2>
            <form action="" className="py-3 flex gap-5 flex-col w-full text-xl">
              <input
                ref={title}
                type="text"
                placeholder="Title"
                className="border-b-2 border-primary outline-0 "
              />
              <textarea
                ref={description}
                placeholder="Description"
                className="border-b-2 border-primary outline-0 "
              />

              <input
                onChange={(e) => setSelectedFile(e.target.files[0])}
                placeholder="Upload File"
                type="file"
                className="appearance-none bg-priamry"
              />
            </form>
            <button
              className="w-full rounded-xl bg-primary py-3 cursor-pointer "
              onClick={addNotes}>
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
