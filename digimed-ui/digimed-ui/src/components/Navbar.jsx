import React, { useState } from "react";
import Logo from "../assets/Logo1.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hidden md:block">

        <img src={Logo} />
        </div>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/servicio"> Servicio </Link>
          <Link to="/about"> Quienes somos </Link>
          <Link to="/contact"> Contacto </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/servicio"> servicio </Link>
        <Link to="/about"> Quienes somos </Link>
        <Link to="/contact"> Contacto </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;