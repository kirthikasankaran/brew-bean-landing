import { useState, useEffect } from "react";
import Logo from "../assets/logo.jpg";
import NavLinks from "./NavLinks";
function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={
        scrolled
          ? "fixed navbar block md:flex justify-between py-5 border-b-[#cfdf5a] border-b-1 items-center"
          : "navbar block md:flex justify-between py-5 border-b-[#cfdf5a] border-b-1 items-center"
      }
    >
      <div className="logo md:ml-5 md:block flex justify-center">
        <a href="#home">
          <img src={Logo} />
        </a>
      </div>
      <NavLinks />
    </nav>
  );
}

export default Navbar;
