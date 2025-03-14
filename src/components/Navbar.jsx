import Logo from "../assets/PRPLogo.png";
import Button from "./Button";


export default function Navbar() {

  return (
    <>
      <nav className="w-screen fixed h-fit flex justify-around items-center gap-10 z-10 p-4">
        <img src={Logo} alt="" className="w-15 h-15" />
        <div className="w-190 h-fit py-3 bg-white border-2 font-primary font-bold text-2xl border-black rounded-xl flex gap-5 items-center justify-center">
          <a href="" className="px-3 bg-primary">
            Home
          </a>
          <a href="" className="px-3 hover:bg-primary transition-colors">
            About
          </a>
          <a href="" className="px-3 hover:bg-primary transistion-colors">
            Services
          </a>
          <a href="" className="px-3 hover:bg-primary transistion-colors">
            Contact Us
          </a>
        </div>
        <Button onClick={() => (window.location.href = "/login")}>
          Log in
        </Button>
      </nav>
    </>
  );
}
