import React, { useEffect, useContext } from "react";
import Heading from "../../components/Heading";
import { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaFolder } from "react-icons/fa";
import { LoadingContext } from "../../ContextStore";
import { MdDeleteOutline } from "react-icons/md";

export default function Notes() {
  const [noteWindow, setNoteWindow] = useState(false);
  const [notes, setNotes] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useContext(LoadingContext);
  const title = useRef();

  function deleteNote(id) {
    const access_token = localStorage.getItem("token");
    if (access_token === null) {
      window.location.href = "/login";
    }
    axios
      .delete(`/notes/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        fetchNotes();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
  }

  function fetchNotes() {
    const access_token = localStorage.getItem("token");
    if (access_token === null) {
      window.location.href = "/login";
    }
    axios
      .get("/notes/me/get", {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.notes);
        setLoading(false);
        setNotes(res.data.notes);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function addNotes(event) {
    event.stopPropagation();

    const formData = new FormData();
    formData.append("title", title.current.value);
    formData.append("note", selectedFile);

    axios
      .post("/notes/upload/placement", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        fetchNotes();
        setNoteWindow(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.msg);
      });
  }
  return (
    <div className="flex flex-col items-center gap-3 justify-center shadow h-full w-full">
      <div className="flex items-start justify-between w-full">
        <Heading>Notes</Heading>
        <button
          onClick={() => setNoteWindow(true)}
          className="bg-primary hover:bg-four transition-all duration-150 delay-100 ease-in-out px-4 border-2 rounded-xl text-2xl font-primary font-bold border-black py-2 cursor-pointer flex items-center justify-center w-fit gap-3">
          Add Notes
        </button>
      </div>
      <div className="w-full h-full flex-col rounded-xl bg-white flex p-4 ">
        {/* <p className="text-primary ">You haven't uploaded any notes yet </p> */}
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <div
              className="flex justify-between w-full items-center border-b py-2 border-primary h-fit px-5"
              key={index}>
              <FaFolder />
              <a href={note.doc_url} className="hover:underline">
                {note.title}
              </a>
              <div className="flex gap-4 items-center cursor-pointer">
                <a
                  onClick={() => {
                    deleteNote(note.id);
                  }}
                  className="hover:text-red-500 flex gap-1 items-center ">
                  <MdDeleteOutline />
                </a>
                <span className="text-gray-400">|</span>
                <p>{note.submitted_on}</p>
              </div>
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
            className="z-10 w-110 rounded-xl justify-around  items-center p-7  h-3/4 bg-white border-2 flex flex-col border-primary">
            <h2 className="text-3xl font-semibold">Add new notes</h2>
            <form action="" className="py-3 flex gap-5 flex-col w-full text-xl">
              <input
                ref={title}
                type="text"
                placeholder="Title"
                className="border-b-2 border-primary outline-0 "
              />
              <input
                onChange={(e) => setSelectedFile(e.target.files[0])}
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
