import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../components/Image';
import axios from 'axios';
import Alert from '../components/Alert';


function Registro() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);

  const [fullName, setFullName] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

 
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
  const handleemail = (e) => {
    setEmail(e.target.value);
  };
  const handlepassword = (e) => {
    setPassword(e.target.value);
  };

  console.log('fullName:', fullName, 'password:', password, 'email:', 
      email, 'documentType:', documentType, 'documentNumber:', documentNumber, 'confirmPassword:', confirmPassword );
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
      setAlert({ message: 'Por favor, completa todos los campos.', type: 'error' });
    } else if 
    
    (email &&
    password  && 
    fullName &&
    documentType &&
    confirmPassword &&
    documentNumber &&

      password !== confirmPassword) {
      console.log('Las contraseñas no coinciden.');
      setAlert({ message: 'Las contraseñas no coinciden.', type: 'error' });
    } else {
      console.log('fullName:', fullName, 'documentType:', documentType, 'documentNumber:', documentNumber, 'confirmPassword:', confirmPassword );
      axios.post('http://ec2-107-22-50-137.compute-1.amazonaws.com:5000/api/v1/register', {
        "name":fullName.split(' ')[0],
        "last_name":fullName.split(' ')[1],
        "dni":documentNumber,
        "member":"02355",
        "email": email,
        "password": password
      }).then((resp) => {
        console.log('Usuario registrado con exito');
        setAlert({ message: 'Usuario registrado con éxito', type: 'success' });
        navigate('/')

      }).catch((error) => {
        setAlert({ message: 'Error al registrar usuario', type: 'error' });
        console.log('error');
      });
    }
  };
  return (
    <div className="flex px-4 flex-col md:flex-row ">
      <div className=" flex flex-col ">
        <div className="  hidden md:block">
          <Image />
        </div>
              
          
      </div>
        <div className="flex justify-center ">
          <div className="flex flex-col  ">
            <p className="font-bold text-azul-oscuro text-3xl  mb-6">
              Registro
            </p>
            <p className="text-2xl mb-8">Por favor, complete el formulario</p>
            <form action="" className="flex flex-col gap-6">
              <div className=" mx-auto border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-full md:w-[25rem] flex items-center ">
                <input
                  className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
                  placeholder="Nombre y Apellido"
                  type="text"
                  name="fullName"
                  value={fullName}
                  onChange={handlefullName}
                />
              </div>
              <div className="flex flex-col gap-6 md:flex-row md:gap-3">
                <div className=" mx-1 border border-zinc-500 px-3  py-4 gap-2 rounded-lg w-full md:w-[12rem] flex items-center ">
                  <input
                    className="flex-1 p-0 text-zinc-900  placeholder-zinc-600 border-0 bg-transparent"
                    placeholder="Tipo de ID"
                    type="text"
                    name="documentType"
                    value={documentType}
                    onChange={handledocumentType}
                  />
                </div>
                <div className=" mx-1 border border-zinc-500 px-3  py-4 gap-2 rounded-lg w-full md:w-[12rem] flex items-center ">
                  <input
                    className="flex-1 p-0 text-zinc-900 placeholder:mr-4  placeholder-zinc-600 border-0 bg-transparent"
                    placeholder="Numero de ID"
                    type="number"
                    name="documentNumber"
                    value={documentNumber}
                    onChange={handledocumentNumber}
                  />
                </div>
              </div>
              <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-full md:w-[25rem] flex items-center ">
                <input
                  className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleemail}
                />
              </div>
              <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-full md:w-[25rem] flex items-center ">
                <input
                  className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
                  placeholder="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlepassword}
                />
              </div>
              <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-full md:w-[25rem] flex items-center ">
                <input
                  className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
                  placeholder="Repetir password"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleconfirmPassword}
                />
              </div>
                {alert && <Alert message={alert.message} type={alert.type} />}
              <div className=' mx-1 border border-zinc-500 px-3 py-4 bg-celeste text-white gap-2 rounded-lg w-full md:w-[25rem] flex items-center  justify-center '>
                <button
                  onClick={(e) => {
                    handleRegistration(e);
                  }}
                >
                  Confirmar Registro
                </button>
              </div>
              <div className="mt-10 md:mt-1 md:text-2xl mb-16 flex flex-row gap-1 justify-center">
                volver al{" "}
                <Link className="text-celeste underline" to="/">
                  {" "}
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      {/* <RegistroForm /> */}
    </div>
  );
}

export default Registro;