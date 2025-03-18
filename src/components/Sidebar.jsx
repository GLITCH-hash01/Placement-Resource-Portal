import Logo from "../assets/PRPLogo.png";
import { MdLogout } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { CgNotes } from "react-icons/cg";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { RiRoadMapLine } from "react-icons/ri";
import { useEffect, useState } from "react";

export default function Sidebar({ active = "" }) {
  const [NavLinks, setNavLinks] = useState([]);
  const [activeLink, setActiveLink] = useState(active);
  const StudenNav = [
    {
      name: "Dashboard",
      icon: <RxDashboard />,
      link: "/dashboard",
    },
    {
      name: "Notes",
      icon: <CgNotes />,
      link: "/notes",
    },
    {
      name: "Query",
      icon: <MdOutlineContactSupport />,
      link: "/query",
    },
    {
      name: "Events",
      icon: <MdEventNote />,
      link: "/events",
    },
    {
      name: "Roadmap",
      icon: <RiRoadMapLine />,
      link: "/roadmaps",
    },
  ];
  const FacultyNav = [
    {
      name: "Dashboard",
      icon: <RxDashboard />,
      link: "/dashboard",
    },
    {
      name: "Notes",
      icon: <CgNotes />,
      link: "/notes",
    },
    {
      name: "Query",
      icon: <MdOutlineContactSupport />,
      link: "/query",
    },
  ];
  const AlumniNav = [
    {
      name: "Dashboard",
      icon: <RxDashboard />,
      link: "/dashboard",
    },
    {
      name: "Query",
      icon: <MdOutlineContactSupport />,
      link: "/query",
    },
    {
      name: "Events",
      icon: <MdEventNote />,
      link: "/oppurtunities",
    },
  ];
  const TPCNav=[
    {
      name: "Dashboard",
      icon: <RxDashboard />,
      link: "/dashboard",
    },
    {
      name: "Notes",
      icon: <CgNotes />,
      link: "/notes",
    },
    {
      name:"Roadmap",
      icon:<RiRoadMapLine />,
      link:"/roadmaps"
    }
  ]

  useEffect(() => {
    // console.log(window.location.pathname);
    // if (localStorage.getItem("token") === null) {
    //   window.location.href = "/login";
    // }
    var user = JSON.parse(localStorage.getItem("user"));
    if (user.role === "student") {
      setNavLinks(StudenNav);
    } else if (user.role === "faculty") {
      setNavLinks(FacultyNav);
    } else if (user.role === "alumni") {
      setNavLinks(AlumniNav);
    }
  }, []);
  useEffect(() => {
    if (NavLinks.length > 0) {
      for (let i = 0; i < NavLinks.length; i++) {
        console.log(NavLinks[i].link, window.location.pathname);
        if (window.location.pathname.includes(NavLinks[i].link)) {
          setActiveLink(NavLinks[i].name);
        }
      }
    }
  }, [NavLinks]);

  function handleLinkClick(link) {
    setActiveLink(link);
    var role = JSON.parse(localStorage.getItem("user")).role;
    window.location.pathname = role + link;
  }

  return (
    <>
      <div
        className=" shrink-0 w-19 h-[90vh] rounded-xl bg-white border-2 border-black flex flex-col justify-between items-center py-8 max-h-[1800px]"
        style={{ boxShadow: "0px 4px 0px 0px #9b9bff" }}>
        <img src={Logo} alt="" className="size-12" />
        <div className="flex w-full h-fit  flex-col gap-5 items-center">
          {NavLinks.map((item, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(item.link)}
              className={
                "flex size-10  rounded-full  items-center justify-center text-2xl hover:bg-primary cursor-pointer transition  " +
                (activeLink === item.name ? "bg-primary" : "bg-transparent")
              }>
              {item.icon}
            </button>
          ))}
        </div>
        <button
          className="flex size-10 bg-primary rounded-md cursor-pointer shadow-xl  items-center justify-center text-2xl"
          onClick={() => {
            window.location.href = "/login";
            localStorage.clear();
          }}>
          <MdLogout />
        </button>
      </div>
    </>
  );
}
