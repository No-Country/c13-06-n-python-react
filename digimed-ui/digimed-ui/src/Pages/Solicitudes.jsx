import { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Form from '../components/Form';
import Pdf from '../components/pdf';   

function Solicitudes() {
  const [show, setShow] = useState(false)
  const [showForm, setShowForm] = useState(true)
    const [data, setData] = useState({
      selectedCobertura: '', 
      selectedPlan: '',
      afiliado: '',
      selectedOption: '',
      selectedProfesional: '',
      selectedMedicamento: '',
      selectedDosis: '',
    });
  
    const updateData = (key, value) => {
      setData({
        ...data,
        [key]: value,
      });
    };

  return (
  //   <div>
  // <p className="text-azul-claro text-center font-roboto font-bold text-2xl mb-16">
  //   Solicitud de receta
  // </p>
  // <div className="flex  items-center justify-center space-x-8">
  //   <div className="w-10/12 h-100 ml-16 mr-16 flex-shrink-0 border rounded-lg bg-destacar shadow-md p-8 flex items-center justify-center mb-16">
  //     <div className="flex flex-col w-full">
       
  //       <div className='flex flex-col md:flex-row'>
  //       <div className="flex mb-4">
  //         <select
  //           className="mx-1 px-3 py-4 gap-2  mr-14 w-full md:w-[25rem]"
  //           value={selectedCobertura}
  //           onChange={handleCoberturaChange}
  //         >
  //           <option value="">Cobertura Médica</option>
  //           <option value="Genérica">Genérica</option>
  //           <option value="Especializada">Especializada</option>
  //           <option value="Total">Total</option>
  //         </select>
  //         </div>
        
  //       <div className="flex items-center mb-4">
  //         <select
  //           className="mx-1 px-3 py-4 gap-2 w-full md:w-[25rem]"
  //           value={selectedPlan}
  //           onChange={handlePlanChange}
  //           >
  //           <option value="">Plan</option>
  //           <option value="Basico">Basico</option>
  //           <option value="Especializado">Especializado</option>
  //           <option value="Empresarial">Empresarial</option>
  //         </select>
  //       </div>
  //       </div>
       
  //       <div className="flex items-center mb-4">
  //       <input
  //         className="mx-1 px-3 py-4 mr-14 w-full md:w-[25rem]"
  //         placeholder="N° Afiliado"
  //         type="number"
  //         name="afiliado"
  //         value={afiliado}
  //         onChange={handleAfiliadoChange} // Cambio aquí
  //       />






        {/* <div className="flex items-center mb-4">
          <h1 className="mr-2">¿Es laboral?</h1>
          <div 
            className={`option-circle mr-2 ${selectedOption === 'Si' ?  'selected' : ''}`}
            onClick={() => handleOptionClick('Si')}
            >
            Sí
          </div>
          <div
            className={`option-circle mr-4 ${selectedOption === 'No' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('No')}
            >
            No
          </div>
          {selectedOption && (
            <p className="font-bold text-blue-800">Seleccionaste {selectedOption}</p> )}    
        </div> */}







    //         </div>
         
    //     <div className="flex items-center justify-between mb-4">
    //       <select
    //         className="mx-1 px-3 py-4 gap-2 w-full"
    //         value={selectedProfesional}
    //         onChange={handleProfesionalChange}
    //       >
    //         <option value="">Profesional</option>
    //         <option value="Rodrigo Caceres: Especialista en Ortopedia">Rodrigo Caceres</option>
    //         <option value="Laura Betancur: Especialista en Neurocirugia">Laura Betancur</option>
    //         <option value="Roxana Arrieta: Especialista en Cardiologia">Roxana Arrieta</option>
    //         <option value="Juan Mauricio Venstre: Médico General">Juan Mauricio Venstre</option>
    //         <option value="Alicia Rodriguez: Médico General">Alicia Rodriguez</option>
    //       </select>
    //       {selectedProfesional && <p>Seleccionaste:  {selectedProfesional}</p>}
     
    //     </div>



      
    // { show &&

    //   <PDFViewer style={{width:'100%',height:'90vh'}}>
    //    <Pdf data={data}/>
    //   </PDFViewer>
    // }

    // {
    //   showForm &&
    //    <Form data={data} updateData={updateData} setShowForm={setShowForm} show={show} setShow={setShow}/>
    // }
    //       </div>
    // 
        ) 
      } 


export default Solicitudes;