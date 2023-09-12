import { Page, Text, View, Document } from '@react-pdf/renderer';
 


const Pdf = ({data}) => {
  return (
    <Document >
    <Page size="A4" >
      <View style={{ textAlign: 'center', marginTop: '40px', marginBottom: '20px', color: 'darkblue' }}>
        <Text>{data.selectedProfesional}</Text>
        <View style={{ borderBottom: '1px solid black', marginTop: '40px' }}></View>
      </View>
      <View style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Text>Cobertura:{data.selectedCobertura}</Text>
      </View>
      <View style={{ textAlign: 'center', marginBottom: '20px' }} >
        <Text>Plan: {data.selectedPlan}</Text>
      </View>
      <View style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Text>N° Afiliado: {data.afiliado}</Text>
      </View>
      <View style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Text>Es laboral?: {data.selectedOption}</Text>
      </View>
      <View style={{ textAlign: 'center', marginBottom: '5px' }}>
        <Text>Formua Medica</Text>
      </View>
      <View style={{ textAlign: 'center' }}>
        <Text>Medicamento: {data.selectedMedicamento}</Text>
        <View style={{ textAlign: 'center', marginBottom: '100px'}}>
        <Text >Dosis: {data.selectedDosis}</Text>
      </View>

      <View >
      <View style={{ textAlign: 'center', marginBottom: '80px'}}>
        <Text >Fecha </Text>
      </View>
      <View style={{ textAlign: 'center', marginBottom: '80px'}}>
        <Text > {data.selectedProfesional}</Text>
      </View>
      </View>

      <View style={{ borderTop: '1px solid black', marginTop: '20px' }}></View>
      <View style={{ fontSize:'10px' ,paddingTop: '10px', fontStyle: 'italic' }}>
        <Text >Una empresa dedicada al servicio de los demás</Text>
        <Text>Todo a tus manos para mejores resultados</Text>
        <Text style={{ color: 'darkblue', fontSize:'20px' }}>Digimed</Text>
      </View>
      </View>
    </Page>
  </Document>
  )
}

export default Pdf;