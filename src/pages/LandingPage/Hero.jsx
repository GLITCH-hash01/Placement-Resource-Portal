import vector from "../../assets/vector main.png";
export default function Hero() {
  return (
    <>
      <div className=" absolute bottom-85 left-22 text-black  ">
    <h1 className="text-7xl leading-24 font-primary font-bold text-left "> Placement Resource <br/>Portal</h1>
      </div>
      <div className="absolute bottom-27
     right-23">
        <img src={vector} className="size-130"></img>

      </div>
    </>
  );
}
