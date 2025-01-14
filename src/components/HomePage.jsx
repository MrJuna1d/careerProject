import Featured from "./Featured";
import Footer from "./Footer";
import Hero from "./Hero";
import Jcl from "./Jcl";
import Navbar from "./Navbar";

export default function HomePage() {
  console.log("homepage");
  return (
    <div>
      <div className="bg-[#E8E8E833]">
        <Navbar />
        <Hero />
      </div>
      <Jcl />
      <Featured />
    </div>
  );
}
