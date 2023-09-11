import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const Form=({data, updateData,setShow, show, setShowForm})=> {
//   const navigate = useNavigate();

  const handleCoberturaChange = (event) => {
    updateData('selectedCobertura', event.target.value);
  };

  const handlePlanChange = (event) => {
    updateData('selectedPlan', event.target.value);
  };

  const handleAfiliadoChange = (event) => {
    updateData('afiliado', event.target.value);
  };

//   const handleOptionClick = (option)=> {
//     setSelectedOption(option);
//   };

  const handleProfesionalChange = (event) => {
    updateData('selectedProfesional', event.target.value);
  };

  const handleMedicamentoChange = (event) => {
    updateData('selectedMedicamento', event.target.value);
  };

  const handleDosisChange = (event) => {
    updateData('selectedDosis', event.target.value);
  };
  
  console.log('selectedCobertura:', data.selectedCobertura, 'selectedPlan:', data.selectedPlan, 
  'afiliado:', data.afiliado,'selectedOption:', data.selectedOption, 'selectedProfesional:', data.selectedProfesional, 
  'selectedMedicamento:', data.selectedMedicamento, 'selectedDosis:', data.selectedDosis  );


  const handleConfirmarSolicitud  = (e) => {
    e.preventDefault();
    if (!data.selectedCobertura || !data.selectedPlan || !data.afiliado ||
      !data.selectedProfesional || !data.selectedMedicamento ||!data.selectedDosis ){
        alert('Por favor, complete todos los campos antes de confirmar la solicitud.');
      }
    else {
      // console.log('selectedCobertura:', data.selectedCobertura, 'selectedPlan:', data.electedPlan, 
      // 'selectedOption:', data.selectedOption, 'afiliado:', data.afiliado,'selectedProfesional:', data.selectedProfesional, 
      // 'selectedMedicamento:', data.selectedMedicamento, 'selectedDosis:', data.electedDosis  );

      // axios.post('http://127.0.0.1:5000/api/v1/visualizacion', {
      //   "selectedCobertura":selectedCobertura,
      //   "selectedPlan":selectedPlan,
      //   "selectedOption":selectedOption,
      //   "selectedProfesional":selectedProfesional,
      //   "selectedMedicamento": selectedMedicamento,
      //   "selectedDosis": selectedDosis
      // }).then((resp) => {
        setShow(true)
        setShowForm(false)
        console.log('Confirmacion de solicitud recibida');
        console.log(`${show}`)
        // navigate('/Solicitudes');
        // }).catch((error) => {
            //   console.log('error');
            // });
        }
  };
  return (
    <div>
  <p className="text-azul-claro text-center font-roboto font-bold text-2xl mb-16">
    Solicitud de receta
  </p>
  <div className="flex items-center justify-center space-x-8">
    <div className="w-10/12 h-100 ml-16 mr-16 flex-shrink-0 border rounded-lg bg-destacar shadow-md p-8 flex items-center justify-center mb-16">
      <div className="flex flex-col w-full">
       
        <div className='flex'>
        <div className="flex mb-4">
          <select
            className="mx-1 px-3 py-4 gap-2  mr-14 w-[25rem]"
            value={data.selectedCobertura}
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
            value={data.selectedPlan}
            onChange={handlePlanChange}
            >
            <option value="">Plan</option>
            <option value="Basico">Basico</option>
            <option value="Especializado">Especializado</option>
            <option value="Empresarial">Empresarial</option>
          </select>
        </div>
        </div>
       
        <div className="flex items-center mb-4">
        <input
          className="mx-1 px-3 py-4 mr-14 w-[25rem]"
          placeholder="N° Afiliado"
          type="number"
          name="afiliado"
          value={data.afiliado}
          onChange={handleAfiliadoChange} // Cambio aquí
        />
        {/* <div className="flex items-center mb-4">
          <h1 className="mr-2">¿Es laboral?</h1>
          <div 
            className={`option-circle mr-2 ${data.selectedOption === 'Si' ?  'selected' : ''}`}
            onClick={() => handleOptionClick('Si')}
            >
            Sí
          </div>
          <div
            className={`option-circle mr-4 ${data.selectedOption === 'No' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('No')}
            >
            No
          </div>
          {data.selectedOption && (
            <p className="font-bold text-blue-800">Seleccionaste {data.selectedOption}</p> )}    
        </div> */}
            </div>
         
        <div className="flex items-center justify-between mb-4">
          <select
            className="mx-1 px-3 py-4 gap-2 w-full"
            value={data.selectedProfesional}
            onChange={handleProfesionalChange}
          >
            <option value="">Profesional</option>
            <option value="Rodrigo Caceres: Especialista en Ortopedia">Rodrigo Caceres</option>
            <option value="Laura Betancur: Especialista en Neurocirugia">Laura Betancur</option>
            <option value="Roxana Arrieta: Especialista en Cardiologia">Roxana Arrieta</option>
            <option value="Juan Mauricio Venstre: Médico General">Juan Mauricio Venstre</option>
            <option value="Alicia Rodriguez: Médico General">Alicia Rodriguez</option>
          </select>
          {data.selectedProfesional && <p>Seleccionaste:  {data.selectedProfesional}</p>}
     
        </div>

        <div className="flex items-center justify-between mb-4">
          <select
            className="mx-1 px-3 py-4 gap-2 w-full"
            value={data.selectedMedicamento}
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
            value={data.selectedDosis}
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
        <button
        onClick={(e) => {
           handleConfirmarSolicitud(e);
        }}>Confirmar solicitud
        </button>
      </div>
      </div>

      {/* Botón Confirmar Solicitud */}
    </div>
  </div>
</div>

  );
}

export default Form;