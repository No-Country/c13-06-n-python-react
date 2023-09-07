import React, { useState } from 'react';
import { PDFViewer, PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Define un componente de React para el documento PDF
const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4">
   
      <View style={{ fontWeight: 'bold', color: 'darkblue', textAlign: 'center', marginTop:'20px',marginBottom:'20px' }} >
        <Text style={{fontSize:'25px'}}>Medico tratante:</Text>
        <Text>{data.selectedProfesional}</Text>
        <Text >DIGIMED</Text>
        
      </View>
      <hr style={{ border: '1px solid black', marginBottom:'20px' }} />

      <View style={{ marginLeft:'20px', marginTop:'20px',marginBottom:'40px' }} >
        <Text style={{ fontWeight: 'bold', fontSize:'25px'}}>Paciente:</Text>
        <Text>{data.fullName}</Text>
        <Text>DNI N°:</Text>
        <Text>{data.documentNumber}</Text>
        
      </View>

      <View style={{ textAlign: 'center', marginBottom: '1rem', marginBottom:'80px'}} >
             
        <Text>Datos de Solicitud:</Text>
        <Text>Cobertura:</Text>
        <Text >{data.selectedCobertura}</Text>

        <Text >Plan:</Text>
        <Text style={{marginBottom:'10px'}}>{data.selectedPlan}</Text>

        <Text >N° Afiliado:</Text>
        <Text>{data.afiliado}</Text>

        <Text >{data.selectedOption}</Text>
        <Text style={{marginBottom:'20px'}}> es Laboral</Text>

        
        <Text >Medicamento:</Text>
        <Text>{data.selectedMedicamento}</Text>

        <Text >Dosis:</Text>
        <Text >{data.selectedDosis}</Text>
             
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <View style={{ fontWeight: 'bold', marginLeft:'20px',marginTop:'20px',marginBottom:'20px' }} >
        <Text>{new Date().toLocaleDateString()}</Text>
        <View style={{ borderBottom: '1px solid darkblue', width: '100%' }} />
        <Text >fecha</Text>
      </View>

      <View style={{ fontWeight: 'bold', marginLeft:'200px',marginTop:'20px',marginBottom:'20px' }} >
        <Text >Medico tratante:</Text>
        <Text>{data.selectedProfesional}</Text>
        <View style={{ borderBottom: '1px solid darkblue', width: '100%' }} />
        <Text style={{ textAlign: 'center' }}>Firma</Text>
      </View>
      </View>
      <View style={{ fontWeight: 'bold', textAlign:'center',marginTop:'60px',color: 'darkblue',
      fontStyle: 'italic', fontSize: '12px', marginBottom:'20px' }} >
         <View style={{ borderBottom: '1px solid black', width: '100%', marginBottom:'20px'}} />
        <Text >Comprometidos con tu salud</Text>
        <Text >Resolucion 8 de medicina del 2006</Text>
        <Text >todo al alcance de tus manos</Text>
        <Text >Digimed</Text>
      </View>
    </Page>
  </Document>
);

function Visualizacion() {
  
  const data = {
    fullName: 'HHHHHH',
    email: 'correo@example.com',
    selectedCobertura: 'Cobertura seleccionada',
    selectedPlan: 'Plan seleccionado',
    
  };


  return (
    <div>
      <h1>DIGIMED</h1>
      <PDFViewer width="1000" height="600">
        <MyDocument data={data} />
      </PDFViewer>
      <PDFDownloadLink document={<MyDocument data={data} />} fileName="solicitud.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Cargando documento...' : 'Descargar PDF'
        }
      </PDFDownloadLink>
    </div>
  );
}

export default Visualizacion;