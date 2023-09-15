import React from "react";
import contacto from "../assets/contacto.png";
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import youtube from '../assets/youtube.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg'


function Contacto() {
  return (
    <div style={{display:'flex'}}>
      <img
        src={contacto}
        alt="contacto"
        style={{ width: "728px", height: "500px", margin: "10px", marginBottom: "100px" }}
      />
      <div style={{marginLeft:'40px'}}>
      <h1 style={{fontFamily:'Roboto', fontSize:'34px', fontWeight: 'bold', marginBottom:'40px'}}>Encuéntranos en</h1>
      <div style={{width: "335px", height: "415px", display: "flex", flexDirection: "column",
         justifyContent: "space-around", backgroundColor: "#A0DFFF", padding: "20px"}}>
        <div >
          <a href="https://www.facebook.com/" target={"_blank"}rel=' noopener noreferrer' 
          style={{ display: 'flex', alignItems: 'center',textDecoration: 'none' }}>
            <img src={facebook} alt="Facebook" />
            <p style={{marginLeft:'10px'}}>/Digimed</p>
          </a>
        </div>
        <div >
          <a href="https://www.instagram.com" target={"_blank"}rel=' noopener noreferrer'
          style={{ display: 'flex', alignItems: 'center',textDecoration: 'none' }}>
            <img src={instagram} alt="Instagram" />
            <p style={{marginLeft:'10px'}}>@Digimed</p>
          </a>
        </div>
        <div >
          <a href="https://www.youtube.com" target={"_blank"}rel=' noopener noreferrer'
          style={{ display: 'flex', alignItems: 'center',textDecoration: 'none' }}>
            <img src={youtube} alt="YouTube" />
            <p style={{marginLeft:'10px'}}>@Digimedinfo</p>
          </a>
        </div>
        <div >
          <a href="https://www.linkedin.com" target={"_blank"}rel=' noopener noreferrer'
          style={{ display: 'flex', alignItems: 'center',textDecoration: 'none' }}>
            <img src={linkedin} alt="LinkedIn" />
            <p style={{marginLeft:'10px'}}>/Digi-med</p>
          </a>
        </div>
        <div >
          <a href="https://twitter.com" target={"_blank"}rel=' noopener noreferrer'
          style={{ display: 'flex', alignItems: 'center',textDecoration: 'none' }}>
            <img src={twitter} alt="Twitter" />
            <p style={{marginLeft:'10px'}}>@Digemedsoluciones</p>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contacto;