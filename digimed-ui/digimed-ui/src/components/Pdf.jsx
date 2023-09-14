import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import Logo1 from '../assets/Logo1.png'


 
const Pdf =({data})=>{
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [documentNumber, setDocumentNumber] = useState('');
    const [email, setEmail] = useState('');

    const cookies = JSON.parse(Cookies.get('data'));

    React.useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/api/v1/user/${cookies['user.id']}`,{
        headers: {Authorization: `Bearer ${cookies.access_token}`} 
      }).then((resp) => {
        if(resp.status === 200){
          setName(resp.data.patient.name)
          setLastName(resp.data.patient.last_name)
          setDocumentNumber(resp.data.patient.dni)
          setEmail(resp.data.user.email)
        }
      }).catch((error) => {
        console.log(error)
      });
    }, []);

    const currentDate = new Date().toLocaleDateString();

 return (
    <Document >
    <Page size="A4" >
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image src={Logo1} style={{ width: '150px', height: '150px' }} />
      <View style={{ flexDirection: 'colum', fontStyle: 'italic', textAlign: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <Text style={{ fontSize: '15px', fontStyle:'bold', color: 'darkblue' }}>{data.selectedProfesional}</Text>
        <Text style={{ fontSize: '12px', color: 'darkblue' }}>N° Licencia: 847253819</Text>
        <Text style={{ fontSize:'15px', color: 'darkblue'}}>Digimed</Text>
        <Text style={{ fontSize: '12px', color: 'darkblue' }}>Av. Toleto Circunvalar 8va 117</Text>
        <Text style={{ fontSize: '12px', color: 'darkblue' }}>Telefonos: 27764853 - 753883322</Text>
      </View>
      </View>
        <View style={{ borderTop: '1px solid black', marginBottom: '20px' }}></View>
      <View style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px', color: 'darkblue' }}>
        <Text>Paciente: {name} {lastName}</Text>
    </View>
    <View style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px', color: 'darkblue' }}>
        <Text>N° DNI:{documentNumber}</Text>
        <Text>correo electronico: {email}</Text>
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
      <View style={{ textAlign: 'center', marginBottom: '5px' }}>
        <Text>Formua Medica</Text>
      </View>
      <View style={{ textAlign: 'center' }}>
        <Text>Medicamento: {data.selectedMedicamento}</Text>
        <View style={{ textAlign: 'center', marginBottom: '60px'}}>
        <Text >Dosis: {data.selectedDosis}</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
      <View style={{ marginLeft: '20px', flexDirection: 'column', alignItems: 'center',fontSize: '12px' }}>
        <Text style={{ borderBottom: '1px solid black', paddingBottom: '5px' }}>{currentDate}</Text>
        <Text >Fecha </Text>
      </View>
      <View style={{ marginRight: '20px', flexDirection: 'column', alignItems: 'center',fontSize: '12px' }}>
        <Text style={{ borderBottom: '1px solid black', paddingBottom: '5px'}}> {data.selectedProfesional}</Text>
        <Text >Profesional</Text>
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