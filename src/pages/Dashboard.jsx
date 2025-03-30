import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import ProfileBar from "../components/ProfileBar";
import { useContext } from "react";
import { LoadingContext } from "../ContextStore";
import Loader from "../components/Loader";

export default function Dashboard() {
  const [loading, setLoading] = useContext(LoadingContext);
  return (
    <>
      <div className="w-screen h-screen  p-8 flex justify-center  items-center gap-10">
        <Sidebar active={"Dashboard"} />
        <div className="w-full h-full flex flex-col max-w-[90%] grow-0 gap-8 overflow-hidden">
          <div className="flex gap-10 justify-between px-10 items-center">
            <Search />
            <ProfileBar />
          </div>
          <div className="w-full h-[90%] relative">
            {loading && (
              <div className=" absolute z-10 w-full h-full flex justify-center items-center bg-white">
                <Loader />
              </div>
            )}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
