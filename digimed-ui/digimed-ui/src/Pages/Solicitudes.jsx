import React, { useState } from 'react';


function Solicitudes() {
  const [selectedCobertura, setSelectedCobertura] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedProfesional, setSelectedProfesional] = useState('');
  const [selectedMedicamento, setSelectedMedicamento] = useState('');  
  const [selectedDosis, setSelectedDosis] = useState('');
  
  const handleCoberturaChange = (event) => {
    setSelectedCobertura(event.target.value);
  };

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleProfesionalChange = (event) => {
    setSelectedProfesional(event.target.value);
  };

  const handleMedicamentoChange = (event) => {
    setSelectedMedicamento(event.target.value);
  };

  const handleDosisChange = (event) => {
    setSelectedDosis(event.target.value);
  };

  return (
    <div>
  <p className="text-azul-claro text-center font-roboto font-bold text-2xl mb-16">
    Solicitud de receta
  </p>
  <div className="flex items-center justify-center space-x-8">
    <div className="w-10/12 h-100 ml-16 mr-16 flex-shrink-0 border rounded-lg bg-destacar shadow-md p-8 flex items-center justify-center mb-16">
      <div className="flex flex-col w-full">
       
        <div className="flex mb-4">
          <select
            className="mx-1 px-3 py-4 gap-2 w-[25rem]"
            value={selectedCobertura}
            onChange={handleCoberturaChange}
          >
            <option value="">Cobertura Médica</option>
            <option value="Genérica">Genérica</option>
            <option value="Especializada">Especializada</option>
            <option value="Total">Total</option>
          </select>
        </div>

        
        <div className="flex items-center mb-4">
          <select
            className="mx-1 px-3 py-4 gap-2 w-[25rem]"
            value={selectedPlan}
            onChange={handlePlanChange}
          >
            <option value="">Plan</option>
            <option value="Basico">Basico</option>
            <option value="Especializado">Especializado</option>
            <option value="Empresarial">Empresarial</option>
          </select>
        </div>
       
        <div className="flex items-center mb-4">
          <input
            className="mx-1 px-3 py-4 gap-2 w-[25rem]"
            type="text"
            placeholder="N° Afiliado"
          />
        </div>
        <div className="flex items-center mb-4">
          <h1 className="mr-2">¿Es laboral?</h1>
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
              
        <div className="flex items-center justify-between mb-4">
          <select
            className="mx-1 px-3 py-4 gap-2 w-full"
            value={selectedProfesional}
            onChange={handleProfesionalChange}
          >
            <option value="">Profesional</option>
            <option value="Rodrigo Caceres: Especialista en Ortopedia">Rodrigo Caceres</option>
            <option value="Laura Betancur: Especialista en Neurocirugia">Laura Betancur</option>
            <option value="Roxana Arrieta: Especialista en Cardiologia">Roxana Arrieta</option>
            <option value="Juan Mauricio Venstre: Médico General">Juan Mauricio Venstre</option>
            <option value="Alicia Rodriguez: Médico General">Alicia Rodriguez</option>
          </select>
          {selectedProfesional && <p>Seleccionaste:  {selectedProfesional}</p>}
     
        </div>

        <div className="flex items-center justify-between mb-4">
          <select
            className="mx-1 px-3 py-4 gap-2 w-full"
            value={selectedMedicamento}
            onChange={handleMedicamentoChange}
          >
            <option value="">Medicamento</option>
            <option value="Ibuprofeno 500mg tableta">Ibuprofeno 500mg tableta</option>
            <option value="Acetaminofen 500mg capsula">Acetaminofen 500mg capsula</option>
            <option value="Acetaminofen 250mg Gotas">Acetaminofen 250mg Gotas</option>
            <option value="Acetaminofen 1000ml Jarabe">Acetaminofen 1000ml jarabe</option>
            <option value="Omeprazol 200mg capsula">Omeprazol 200mg capsula</option>
            <option value="Ribufloxina 120ml Jarabe">Ribufloxina 120ml Jarabe</option>
            <option value="Acetato de Aluminio 200ml jarabe">Acetato de Aluminio 200ml jarabe</option>
          </select>
        </div>

        <div className="flex items-center justify-between mb-4">
          <select
            className="mx-1 px-3 py-4 gap-2 w-full"
            value={selectedDosis}
            onChange={handleDosisChange}
          >
            <option value="">Dosis</option>
            <option value="Cada 4 horas durante 3 días">C/4hs</option>
            <option value="Cada 8 horas durante 7 días">C/8hs</option>
            <option value="Cada 6 horas durante 5 días">C/6hs</option>
            <option value="Cada 12 horas durante 7 días">C/12hs</option>
            <option value="Cada 8 horas durante 3 días">C/8hs</option>
          </select>
          
        </div>
      <div className="mx-1 border border-zinc-500 px-3 py-4 bg-celeste text-white gap-2 rounded-lg w-full flex items-center  justify-center">
        <button>Confirmar solicitud</button>
      </div>
      </div>

      {/* Botón Confirmar Solicitud */}
    </div>
  </div>
</div>

  );
}

export default Solicitudes;