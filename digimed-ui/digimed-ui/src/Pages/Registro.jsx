import React from "react";
import RegistroForm from "../components/RegistroForm";
import hero from '../assets/image_hero.png';

function Registro() {
  
  return (
  <div>
    <img src={hero} alt="" className="h-[36rem] w-[50.5rem]  -ml-[5rem] object-cover"/>
    <RegistroForm />
  </div>
  );
}

export default Registro;