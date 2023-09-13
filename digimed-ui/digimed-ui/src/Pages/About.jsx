import React from "react";
import Elvis from '../assets/Elvis.png';
import Antoni from '../assets/Antoni.png';
import Ana from '../assets/Ana.png';
import Andres from '../assets/Andres.png';
import Javier from '../assets/Javier.png';
import Valeria from '../assets/Valeria.png';


function About() {
  
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{fontFamily:'Roboto', fontSize:'34px', fontWeight: 'bold', marginBottom:'40px'}}>¿Quiénes Somos?</h1>
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr", 
        gap: "20px", 
        maxWidth: "100%",
        width: "100%",
        background: '#A0DFFF',
        border: "1px solid #ccc",
        marginBottom: '80px'
      }}>
        
        <div style={{ display: "flex", marginTop:'10px', flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <img
            src={Elvis}
            alt="Digimed"
            style={{ width: "118px", height: "118px", margin: "10px" }}
          />
          <div>
            <p style={{ fontWeight: "bold" }}>Elvis Segovia</p>
            <p>Desarrollador Full Stack</p>
          </div>
        </div>

        <div style={{ display: "flex", marginTop:'10px', flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <img
            src={Antoni}
            alt="Digimed"
            style={{ width: "118px", height: "118px", margin: "10px" }}
          />
          <div>
            <p style={{ fontWeight: "bold" }}>Antoni Pérez</p>
            <p>Desarrollador web</p>
          </div>
        </div>

        <div style={{ display: "flex", marginTop:'10px', flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <img
            src={Ana}
            alt="Digimed"
            style={{ width: "118px", height: "118px", margin: "10px" }}
          />
          <div>
            <p style={{ fontWeight: "bold" }}>Ana Benegas</p>
            <p>Tester</p>
          </div>
        </div>

        
        <div style={{ display: "flex", marginBottom:'10px', flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <img
            src={Andres}
            alt="Digimed"
            style={{ width: "118px", height: "118px", margin: "10px" }}
          />
          <div>
            <p style={{ fontWeight: "bold" }}>Andres Mejia</p>
            <p>Desarrollador Full Stack</p>
          </div>
        </div>

        <div style={{ display: "flex",marginBottom:'10px', flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <img
            src={Javier}
            alt="Digimed"
            style={{ width: "118px", height: "118px", margin: "10px" }}
          />
          <div>
            <p style={{ fontWeight: "bold" }}>Javier Brizuela</p>
            <p>Desarrollador Backend</p>
          </div>
        </div>

        <div style={{ display: "flex",marginBottom:'10px', flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <img
            src={Valeria}
            alt="Digimed"
            style={{ width: "118px", height: "118px", margin: "10px" }}
          />
          <div>
            <p style={{ fontWeight: "bold" }}>Valeria Landa</p>
            <p>Diseñadora UX UI</p>
          </div>
        </div>
      </div>
    </div>
      );
    }

export default About;