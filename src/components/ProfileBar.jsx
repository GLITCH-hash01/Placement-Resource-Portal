import React, { useEffect, useState } from "react";

import Profileimg from "../assets/images/profile.png";

export default function ProfileBar() {
  const [user, setUser] = useState({
    name: "John Doe",
    role: "student",
  });
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long", // Full day name (e.g., Monday)
    year: "numeric",
    month: "long", // Full month name (e.g., March)
    day: "numeric",
  });

  useEffect(() => {
    var userdetails = JSON.parse(localStorage.getItem("user"));
    if (userdetails != null) {
      setUser({
        name: userdetails.username,
        role: userdetails.role,
        dep: userdetails.department,
      });
    }
  }, []);
  return (
    <div className="w-full  border h-13 rounded-md justify-between p-4 items-center flex bg-white  shadow-md">
      <div className="flex flex-col">
        <p>{formattedDate}</p> 
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex text-md flex-col  justify-center">
          <p className="text-lg font-semibold leading-3">{user.name}</p>
          <p className="text-sm leading-5">
            {user.role},{user.dep}
          </p>
        </div>
        <img src={Profileimg} alt="" className="size-9" />
      </div>
    </div>
  );
}
