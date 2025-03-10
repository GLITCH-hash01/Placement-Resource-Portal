import { FaRegCommentAlt } from "react-icons/fa";
import React from "react";

export default function QueryCard({ desc, response_count, onClick }) {
  return (
    <div
      className="flex flex-col p-4 bg-primary rounded-md cursor-pointer gap-3"
      onClick={onClick}>
      <p className="text-ellipsis hover:underline ">{desc}</p>
      <span className="flex gap-3 items-center">
        <FaRegCommentAlt /> {response_count}
      </span>
    </div>
  );
}
