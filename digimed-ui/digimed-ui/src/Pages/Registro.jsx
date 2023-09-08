import React, { useState } from 'react';
// import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
//import hero from '../assets/image_hero.png';
import Image from '../components/Image';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

function Registro({
  // setShowLoginForm,
  // setShowRegistro,
  email,
  password,
  handleemail,
  handlepassword,
}) {
  // const history = useHistory();

  const [fullName, setFullName] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  // const goBack = () => {
  //   setShowLoginForm(true);
  //   setShowRegistro(false);
  // };
  /* console.log(email, password) */

  const handlefullName = (e) => {
    setFullName(e.target.value);
  };

  const handledocumentType = (e) => {
    setDocumentType(e.target.value);
  };

  const handledocumentNumber = (e) => {
    setDocumentNumber(e.target.value);
  };

  const handleconfirmPassword = (e) => {
    setconfirmPassword(e.target.value);
  };
  // const handleemail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlepassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (
      email === '' ||
      password === '' ||
      fullName === '' ||
      documentType === '' ||
      confirmPassword === '' ||
      documentNumber === ''
    ) {     
      console.log('Por favor, completa todos los campos.');
    } else if 
    
    (email &&
    password  && 
    fullName &&
    documentType &&
    confirmPassword &&
    documentNumber &&

      password !== confirmPassword) {
      console.log('Las contraseñas no coinciden.');
    } else {
      console.log('fullName:', email, 'Contraseña:', password)
      axios.post('http://127.0.0.1:5000/api/v1/register', {
        "name":fullName.split(' ')[0],
        "last_name":fullName.split(' ')[1],
        "dni":documentNumber,
        "member":"02355",
        "email": email,
        "password": password
      }).then((resp) => {
        console.log('Usuario registrado con exito');
        // history.push('/');
        //window.location.href = '/';
      }).catch((error) => {
        console.log('error');
      });
    }
  };
  return (
    <div className='flex '>
      <div className=' flex text-azul-oscuro'>
        <div className='flex flex-col'>
          <Image />
          <p className='font-bold text-2xl  mb-[2.8rem]'>
            Aprovechamos la tecnología para hacer la vida más fácil.
          </p>
        </div>
        <div className='flex justify-center items-center h-screen'>
          <div className='flex flex-col  '>
            <p className='font-bold text-azul-oscuro text-3xl mt-28 mb-6'>Registro</p>
            <p className='text-2xl mb-8'>Por favor, complete el formulario</p>
            <form action='' className='flex flex-col gap-6'>
              <div className=' mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center '>
                <input
                  className='flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent'
                  placeholder='Nombre y Apellido'
                  type='text'
                  name='fullName'
                  value={fullName}
                  onChange={handlefullName}
                />
              </div>
              <div className='flex space-x-4'>
              <div className=' mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[12rem] flex items-center '>
                <input
                  className='flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent'
                  placeholder='Tipo de ID'
                  type='text'
                  name='documentType'
                  value={documentType}
                  onChange={handledocumentType}
                />
              </div>
              <div className=' mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[12rem] flex items-center '>
                <input
                  className='flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent'
                  placeholder='Numero de ID'
                  type='number'
                  name='documentNumber'
                  value={documentNumber}
                  onChange={handledocumentNumber}
                />
              </div>
              </div>
              <div className=' mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center '>
                <input
                  className='flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent'
                  placeholder='Email'
                  type='email'
                  name='email'
                  value={email}
                  onChange={handleemail}
                />
              </div>
              <div className=' mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center '>
                <input
                  className='flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent'
                  placeholder='password'
                  type='password'
                  name='password'
                  value={password}
                  onChange={handlepassword}
                />
              </div>
              <div className=' mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center '>
                <input
                  className='flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent'
                  placeholder='Repetir password'
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={handleconfirmPassword}
                />
              </div>
              <div className=' mx-1 border border-zinc-500 px-3 py-4 bg-celeste text-white gap-2 rounded-lg w-[25rem] flex items-center  justify-center'>
                <button
                  onClick={(e) => {
                    handleRegistration(e);
                  }}
                >
                  Confirmar Registro
                </button>
                   </div>
                   <div className='text-2xl mb-16 flex flex-row gap-1'>volver al  <Link className='text-celeste underline' to='/'> Login</Link></div>
            </form>
          </div>
        </div>
      </div>
      {/* <RegistroForm /> */}
    </div>
  );
}

export default Registro;
