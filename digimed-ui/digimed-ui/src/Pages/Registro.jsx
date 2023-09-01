import React, { useState } from 'react';
import hero from '../assets/image_hero.png';
import Image from '../components/image';

function Registro({
  setShowLoginForm,
  setShowRegistro,
  email,
  contraseña,
  handleemail,
  handlecontraseña,
}) {
  const [fullName, setFullName] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [confirmContraseña, setConfirmContraseña] = useState('');

  const goBack = () => {
    setShowLoginForm(true);
    setShowRegistro(false);
  };
  /* console.log(email, contraseña) */

  const handlefullName = (e) => {
    setFullName(e.target.value);
  };

  const handledocumentType = (e) => {
    setDocumentType(e.target.value);
  };

  const handledocumentNumber = (e) => {
    setDocumentNumber(e.target.value);
  };

  const handleconfirmContraseña = (e) => {
    setConfirmContraseña(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault;
    if (
      email === '' ||
      contraseña === '' ||
      fullName === '' ||
      documentType === '' ||
      confirmContraseña === '' ||
      documentNumber === ''
    ) {
      console.log('Entro if')
      alert('Por favor, completa todos los campos.');
    } else if (contraseña !== confirmContraseña) {
      console.log('Entro Else if')
      alert('Las contraseñas no coinciden.');
    } else {
      console.log('entro else')
      axios
        .post('http://localhost:5000/api/v1/register', {
          fullName: fullName,
          documentType: documentType,
          documentNumber: documentNumber,
          email: email,
          contraseña: contraseña,
          confirmContraseña: confirmContraseña        
        })
        .then((resp) => {
          alert('Usuario registrado con exito');
        })
        .catch((error) => {
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
            <p className='font-bold text-azul-oscuro text-3xl mb-8'>Registro</p>
            <p className='text-2xl mb-16'>Por favor, complete el formulario</p>
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
                  placeholder='Contraseña'
                  type='password'
                  name='contraseña'
                  value={contraseña}
                  onChange={handlecontraseña}
                />
              </div>
              <div className=' mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center '>
                <input
                  className='flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent'
                  placeholder='Repetir Contraseña'
                  type='password'
                  name='confirmContraseña'
                  value={confirmContraseña}
                  onChange={handleconfirmContraseña}
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
                 <button
                   onClick={() => {
                    goBack();
                  }}
            >
              Volver al login
            </button>
            </form>
          </div>
        </div>
      </div>
      {/* <RegistroForm /> */}
    </div>
  );
}

export default Registro;
