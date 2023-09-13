import React from "react";
import home from '../assets/home.png';
import { Link } from "react-router-dom";


function Contacto() {
  return (
    <div style={{display:'flex'}}>
      <img
        src={home}
        alt="home"
        style={{ width: "728px", height: "500px", margin: "10px", marginBottom: "100px" }}
      />
      <div style={{marginLeft:'40px'}}>
      <h1 style={{fontFamily:'Roboto', fontSize:'34px', fontWeight: 'bold', marginBottom:'40px'}}>¡Bienvenido!</h1>
      <div style={{width: "335px", height: "415px", backgroundColor: "#A0DFFF", padding: "20px"}}>
        <div >   
            <p style={{marginLeft:'10px'}}>mas de 20 años de experiencia brindando las mejores soluciones con la tecnologia disponible para todos nuestros clientes.</p>
            <p style={{marginLeft:'10px', marginTop:'10px'}}>Con Digimed podras acceder a nuestros servicios online y puedes descargar tu receta de medicamentos de manera instantanea</p>
            <p style={{marginLeft:'10px', marginTop:'10px', fontWeight:'bold'}}>Si deseas mas informacion puedes contactarnos</p>
            <div style={{marginTop:'40px'}}><Link style={{marginLeft:'10px', color:'blue', fontWeight:'bold', fontSize:'20px', textDecoration: 'underline'}} 
            to='/contacto'> Contactanos aquí!</Link></div>
                  
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contacto;