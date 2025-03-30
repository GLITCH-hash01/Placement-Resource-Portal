import maindash from "../../assets/images/maindash.png";
import roadmap from "../../assets/images/roadmap.png";
import arrowserv1 from "../../assets/images/arrowserv1.png";

import ServiceCard from "../../components/ServiceCard";

export default function Services() {
  return (
    <>
      <div
        className="p-10 px-20 flex flex-col gap-10 w-fit h-fit"
        id="services">
        <div className="relative w-fit h-fit">
          <img src={arrowserv1} alt="" className="absolute -right-[95%] -top-5 " />
          <h2 className=" bg-primary font-bold text-4xl flex w-fit pr-3 items-start justify-start ">
            Services
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5 py-10 px-20">
          <ServiceCard
            color={"bg-white"}
            title={"Dashboard"}
            img={maindash}
            text={"text-black"}
            colortext={"text-black"}
            text1={"bg-primary"}
          />
          <ServiceCard
            color={"bg-black"}
            title={"Academics"}
            img={maindash}
            text={"text-white"}
            colortext={"text-primary"}
            text1={"bg-white"}
          />
          <ServiceCard
            color={"bg-black"}
            title={"Roadmap"}
            img={roadmap}
            text={"text-white"}
            colortext={"text-primary"}
            text1={"bg-white"}
          />
          <ServiceCard
            color={"bg-white"}
            title={"Events"}
            img={maindash}
            text={"text-black"}
            colortext={"text-black"}
            text1={"bg-primary"}
          />
        </div>
      </div>
    </>
  );
}
