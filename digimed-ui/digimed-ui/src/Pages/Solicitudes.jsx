import { useState } from "react";
import React from "react";
import Select from "react-select";
import '../styles/Solicitudes.css'

const cobertura = [
    {label: 'Genérica:', value:'Cobertura Genérica:'},
    {label: 'Especializada', value:'Cobertura Especializada'},
    {label: 'Total', value:'Cobertura Total'},  
]

const plan = [
    {label: 'Basico', value:'Plan Basico:'},
    {label: 'Especializado', value:'Plan Especializado'},
    {label: 'Empresarial', value:'Plan Empresarial'},  
] 

function Solicitudes() {
// const [selectCobertura, setSelectCobertura] = useState();
const [selectedOption, setSelectedOption] = useState(null); 

const handleOptionClick = (option) => {
  setSelectedOption(option);
};

 const handleSelectChange = ({value}) =>{
    console.log(value);
    // setSelectCobertura(value);
 }

  return (
  <div className="p-2">
    <h1>Solicitud de receta</h1>
    <form>
    {/* <p>Cobertura: {selectCobertura}</p> */}
    <Select 
        defaultValue={{label:'Cobertura', value:'Cobertura'}}    
        options={cobertura}
        onChange={handleSelectChange}
    />
      <Select 
        defaultValue={{label:'Plan', value:'plan'}}    
        options={plan}
        onChange={handleSelectChange}
    />
    <input type="text" placeholder="N° Afiliado"/>
    <div>
      <div className="option-container">
        <h1>¿Es laboral?</h1>
        <div
          className={`option-circle ${selectedOption === 'si' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('si')}
        >
          Sí
        </div>
        <div
          className={`option-circle ${selectedOption === 'no' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('no')}
        >
          No
        </div>
      </div>
      <p>Seleccionaste: {selectedOption}</p>
    </div>
    </form>
  </div>
  );
}

export default Solicitudes;