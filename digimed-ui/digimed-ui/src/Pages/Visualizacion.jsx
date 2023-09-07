import React from 'react';
import { PDFViewer, PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Define un componente de React para el documento PDF
const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4">
      <View className="m-10 p-10 flex-grow-1">
        <Text>Pciente:</Text>
        <Text>{data.fullName}</Text>
        <Text>DNI N°:</Text>
        <Text>{data.documentNumber}</Text>
      </View>

      <View className="m-10 p-10 flex-grow-1">
        <Text>Datos de Solicitud:</Text>
        <Text className='mr-2'>Cobertura:</Text>
        <Text>{data.selectedCobertura}</Text>

        <Text className='mr-2'>Plan:</Text>
        <Text>{data.selectedPlan}</Text>

        <Text className='mr-2'>N° Afiliado:</Text>
        <Text>{data.afiliado}</Text>

        <Text className="font-bold text-blue-800 mr-2">{data.selectedOption}</Text>
        <Text> es Laboral</Text>

        <Text className='mr-2'>Medico tratante:</Text>
        <Text>{data.selectedProfesional}</Text>

        <Text className='mr-2'>Medicamento:</Text>
        <Text>{data.selectedMedicamento}</Text>

        <Text className='mr-2'>Dosis:</Text>
        <Text>{data.selectedDosis}</Text>
             
      </View>
    </Page>
  </Document>
);

function Visualizacion() {
  // Simplemente renderiza el componente PDF con los datos que necesitas
  const data = {
    // Puedes obtener estos datos de alguna fuente, como el estado o props
    fullName: 'Nombre Completo del Usuario',
    email: 'correo@example.com',
    selectedCobertura: 'Cobertura seleccionada',
    selectedPlan: 'Plan seleccionado',
    // Agrega otros datos según tus necesidades
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