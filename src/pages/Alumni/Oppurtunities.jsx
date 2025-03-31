import React, { useEffect } from "react";
import Heading from "../../components/Heading";
import { useState, useRef, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaFolder, FaLink } from "react-icons/fa";
import { LoadingContext } from "../../ContextStore";

export default function Oppurtunities() {
  const [oppurtunityWindow, setoppurtunityWindow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [oppurtunities, setOppurtunities] = useState([]);
  const [isInternship, setIsInternship] = useState(false);
  const [loading, setLoading] = useContext(LoadingContext);

  const title = useRef();
  const know_more = useRef();

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
        setOppurtunities(res.data.events);
        setLoading(false);
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

    formData.append("poster", selectedFile);
    formData.append("category", isInternship ? "internship" : "event");
    formData.append("know_more", know_more.current.value);

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
              <a
                href={
                  oppurtunity?.know_more?.startsWith("http")
                    ? oppurtunity.know_more
                    : `https://${oppurtunity.know_more}`
                }
                target="_blank"
                className="hover:underline text-ellipsis flex gap-1 items-center ">
                <FaLink />
                {oppurtunity.know_more}
              </a>
            </div>
          ))
        ) : (
          <p className="text-primary ">
            You haven't uploaded any oppurtunities yet{" "}
          </p>
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
              <input
                ref={know_more}
                type="text"
                placeholder="Link"
                className="border-b-2 border-primary outline-0 "
              />
              <div className="flex items-center w-full   gap-3">
                <input
                  value={isInternship}
                  onChange={(e) => setIsInternship(e.target.checked)}
                  type="checkbox"
                  placeholder="Title"
                  className="border-b-2 border-primary cursor-pointer outline-0 "
                />
                <span>is this for an internship oppurtunity?</span>
              </div>

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
