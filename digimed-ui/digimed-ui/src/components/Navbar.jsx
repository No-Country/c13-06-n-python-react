import React from "react";
import Logo from "../assets/Logo1.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {
  
  return (
      
    <div >
      <div style={{background:'#e6f2ff', textAlign:'right', marginRight:'1rem', 
      marginLeft:'1rem', marginBottom:'1rem', marginTop:'1rem', flexDirection:'row'}} >
      <img src={Logo} style={{position:'relative', height:'8rem' }}/>
        <Link style={{marginRight:'2rem'}} to="/"> Home </Link>
        <Link style={{marginRight:'2rem'}} to="/Servicios"> Servicios </Link>
        <Link style={{marginRight:'2rem'}} to="/About"> Quienes somos </Link>
        <Link style={{marginRight:'2rem'}}to="/contacto"> Contacto </Link>
        <button>
          <ReorderIcon />
        </button>
      </div>
    </div>
    
  );
}

export default Navbar;