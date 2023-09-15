import { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Form from '../components/Form';
import Pdf from '../components/Pdf';   

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
    <div className='px-4'>
      
    { show &&

      <PDFViewer style={{width:'100%',height:'90vh'}}>
       <Pdf data={data}/>
      </PDFViewer>
    }

    {
      showForm &&
       <Form data={data} updateData={updateData} setShowForm={setShowForm} show={show} setShow={setShow}/>
    }
          </div>
        ) 
      } 


export default Solicitudes;