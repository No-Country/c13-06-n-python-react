import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      // flexDirection: 'row',
      display: 'flex',
      // flexDirection: 'column',
      backgroundColor: '#E4E4E4',
      color:'green',
      fontSize:'50px',
      
    },
    section: {
  
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    
  });
 

const Pdf = ({data}) => {
  return (
    <Document style={{}}>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Cobertura:{data.selectedCobertura}</Text>
      </View>
      <View style={styles.section}>
        <Text>Plan: {data.selectedPlan}</Text>
      </View>
      <View style={styles.section}>
        <Text>N° Afiliado: {data.afiliado}</Text>
      </View>
      <View style={styles.section}>
        <Text>Es laboral?: {data.selectedOption}</Text>
      </View>
      <View style={styles.section}>
        <Text>Profesional: {data.selectedProfesional}</Text>
      </View>
      <View style={styles.section}>
        <Text>Medicamento: {data.selectedMedicamento}</Text>
        <View style={styles.section}>
        <Text>Dosis: {data.selectedDosis}</Text>
      </View>
      </View>
    </Page>
  </Document>
  )
}

export default Pdf;