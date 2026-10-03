import { useState } from "react";
function NavLinks() {
  const [active, setActive] = useState("Home");
  const [openMenu, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex w-full flex-col md:flex-row md:justify-end justify-center mt-5 md:mt-0">
        <div className={openMenu ? "nav-links mx-5 active" : "nav-links mx-5"}>
          <a
            href="#home"
            className={active === "Home" ? "active mr-5" : "mr-5"}
            onClick={() => setActive("Home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={active === "About" ? "active mr-5" : "mr-5"}
            onClick={() => setActive("About")}
          >
            About
          </a>
          <a
            href="#menu"
            className={active === "Menu" ? "active mr-5" : "mr-5"}
            onClick={() => setActive("Menu")}
          >
            Menu
          </a>
          <a
            href="#contact"
            className={active === "Contact" ? "active" : ""}
            onClick={() => setActive("Contact")}
          >
            Contact
          </a>
        </div>
        <button
          className={
            openMenu
              ? "absolute md:relative menuToggle mx-5 active"
              : "absolute md:relative menuToggle mx-5"
          }
          onClick={() => setMenuOpen(!openMenu)}
        >
          {openMenu ? "✕" : "☰"}
        </button>
      </div>
    </>
  );
}

export default NavLinks;
