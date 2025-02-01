import vector from "../../assets/vector main.png";
import { FaArrowCircleRight } from "react-icons/fa";
export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center gap-30">
      <div className="flex flex-col justify-center items-left gap-10">
      <h1 className="text-7xl leading-24 font-primary font-bold text-left "> Placement Resource <br/>Portal</h1>
      <p className="font-primary text-left w-170 h-fit">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
        do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id 
        est laborum.</p>
        <button className="bg-primary px-8 text-2xl border-2 rounded-2xl max-w-60 h-15 font-primary font-bold 
        border-black py-2 cursor-pointer flex gap-2 items-center justify-center"style={{boxShadow:"0px 4px 0px    0px#000"}}>Get Started<span className="-rotate-45 text-2xl"><FaArrowCircleRight/></span></button>
      </div>
      <img src={vector} className="size-130"></img>
      </div>
      
      
     
    </>
  );
}
