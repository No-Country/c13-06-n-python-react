import React from "react";
import RegistroForm from "../components/RegistroForm";
import hero from '../assets/image_hero.png';

function Registro() {
  
  return (
    <div className="flex ">
    <div className=" text-azul-oscuro">
    <img src={hero} alt="" className="h-[36rem] w-[40.5rem] mb-[5.25rem] -ml-[5rem] object-cover"/>
    <p className="font-bold text-2xl  mb-[2.8rem]">Aprovechamos la tecnología para hacer la vida más fácil.</p>
  </div>
    <RegistroForm />
  </div>
  );
}

export default Registro;