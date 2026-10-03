import { useState } from "react";
import Logo from "../assets/logo.jpg";
import NavLinks from "./NavLinks";
function Footer() {
  const [active, setActive] = useState("Home");
  return (
    <>
      <div className="footerContainer flex flex-col py-4 md:py-8">
        <div className="logo flex justify-center">
          <a href="#home">
            <img src={Logo} />
          </a>
        </div>
        <div className="copyright pt-4 text-xs">
          <p>Copyright &copy; 2026 Brew-Bean | All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
