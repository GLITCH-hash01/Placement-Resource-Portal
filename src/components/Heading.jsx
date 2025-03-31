import React from "react";
import star from "../assets/images/star.png";

export default function Heading({ children }) {
  return (
    <h3 className="heading-1 relative px-1">
      {children}
      <img src={star} alt="" className="absolute -bottom-5 -right-8" />
    </h3>
  );
}
