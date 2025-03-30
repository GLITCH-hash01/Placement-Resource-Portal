import Logo from "../assets/PRPLogo.png";
import Button from "./Button";

export default function Navbar() {
  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth", // Adds smooth scrolling
      });
    } else {
      console.error(`Element with selector "${selector}" not found.`);
    }
  };
  const NavList=[
    { name: "Home", id: "#home" },
    { name: "About", id: "#about" },
    { name: "Services", id: "#services" },
    { name: "Contact Us", id: "#contact" },
  ];
  return (
    <>
      <nav className="w-screen fixed h-fit flex justify-around items-center gap-10 z-10 p-4">
        <img src={Logo} alt="" className="w-15 h-15" />
        <div className="w-190 h-fit py-3 bg-white border-2 font-primary font-bold text-2xl border-black rounded-xl flex gap-5 items-center justify-center">
          {
            NavList.map((item) => (
              <a
                key={item.id}
                className="px-3 hover:bg-primary transition-colors cursor-pointer"
                onClick={() => scrollToSection(item.id)}>
                {item.name}
              </a>
            ))
          }
          {/* <a
            className="px-3 hover:bg-primary transistion-colors cursor-pointer"
            onClick={() => window.scrollTo(0)}>
            Home
          </a>
          <a
            className="px-3 hover:bg-primary transition-colors"
            onClick={() => scrollToSection("#about")}>
            About
          </a>
          <a
            className="px-3 hover:bg-primary transistion-colors"
            onClick={() =>
              scrollToSection("#services")
            }>
            Services
          </a>
          <a
            className="px-3 hover:bg-primary transistion-colors"
            onClick={() =>
              scrollToSection("#contact")
            }>
            Contact Us
          </a> */}
        </div>
        <Button onClick={() => (window.location.href = "/login")}>
          Log in
        </Button>
      </nav>
    </>
  );
}
