import Logo from "../assets/PRPLogo.png";

export default function Navbar() {
  return (
    <>
      <nav className="w-screen h-20 bg-white flex ">
        <img src={Logo} alt="" className="w-10 h-10" />
        <div className="bg-white w-140 h-18 border-2 border-black rounded-xl flex  gap-5 font-primary ">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Contact Us</a>
        </div>
        
      </nav>
    </>
  );
}
