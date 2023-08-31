// import Alert from '@mui/material/Alert';
import Registro from '../Pages/Registro';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [ShowAlertEmail, setShowAlertEmail] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleemail = (e) => {
    setEmail(e.target.value);
  };

  const handlecontraseña = (e) => {
    setContraseña(e.target.value);
  };

  /* console.log(email, password) */

  const registrarUser = () => {
    setShowRegistro(true);
    setShowLoginForm(false);
  };
  const timeOutAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const timeOutUser = () => {
    setTimeout(() => {
      setShowAlertEmail(false);
    }, 2000);
  };
  const enter = () => {
    if (email === '' || contraseña === '') {
      setShowAlert(true);
      timeOutAlert();
    } else {
      axios
        .post('http://localhost:3001/login', {
          email: email,
          password: password,
        })
        .then((resp) => {
          setIsAllowed(true);
          navigate('/Home');
        })
        .catch((error) => {
          setShowAlertEmail(true);
          timeOutUser();
        });
    }
  };
  const navigate = useNavigate();

  return (
    <div className='flex flex-col '>
      {showAlert && alert('Por favor, completa todos los campos.')}
      {ShowAlertEmail &&
        alert('Email no existe, por favor verifica e ingresa nuevamente')}

      {showLoginForm ? (
        <div>
          <p className='font-bold text-azul-oscuro text-3xl mb-8'>
            Le damos la bienvenida.
          </p>
          <p className='text-2xl mb-16'>Si ya tiene cuenta</p>
          <form action='' className='flex flex-col gap-6'>
            {/* <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Contraseña"/> */}
            <div className=' mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center '>
              {/* <Search className="mx-1h-5 w-5 text-zinc-500" /> */}
              <input
                onChange={handleemail}
                type='email'
                name='email'
                value={email}
                className='flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent'
                placeholder='Email'
              />
            </div>
            <div className='  mx-1 border-2  px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center'>
              <input
                onChange={handlecontraseña}
                type='password'
                name='password'
                value={contraseña}
                className='flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent'
                placeholder='Contraseña'
              />
            </div>

            <div className=' mx-1 border border-zinc-500 px-3 py-4 bg-celeste text-white gap-2 rounded-lg w-[25rem] flex items-center  justify-center'>
              {/* <Search className="mx-1h-5 w-5 text-zinc-500" /> */}

              <button
                onClick={() => {
                  enter();
                }}
              >
                Ingresar
              </button>
            </div>
            <button
              onClick={() => {
                registrarUser();
              }}
            >
              Registrar Usuario
            </button>
          </form>
        </div>
      ) : (
        <Registro
          setShowLoginForm={setShowLoginForm}
          setShowRegistro={setShowRegistro}
          email={email}
          contraseña={contraseña}
          handleemail={handleemail}
          handlecontraseña={handlecontraseña}
        />
      )}

      {/* <p>No tiene cuenta? <a href="#">Registrese</a></p> */}
    </div>
  );
}
