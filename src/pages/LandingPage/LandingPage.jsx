import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Happen from "./Happen";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
      <div className="w-fit h-fit scroll-smooth">
        <Navbar />
        <Hero />
        <Services />
        <Happen />
        <Footer />
      </div>
    </>
  );
}
