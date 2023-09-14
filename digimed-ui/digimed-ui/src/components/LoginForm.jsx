// import Alert from '@mui/material/Alert';
import Registro from '../Pages/Registro';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Notification } from './Notification';
import axios from 'axios';
import Cookies from 'js-cookie';
// import { useHistory } from 'react-router-dom';

export function LoginForm({ setisLoggedIn }) {
  // const history = useHistory();
  const navigate = useNavigate();
  // const [isAllowed, setIsAllowed] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [ShowAlertEmail, setShowAlertEmail] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleemail = (e) => {
    setEmail(e.target.value);
  };

  const handlepassword = (e) => {
    setPassword(e.target.value);
  };
  /* console.log(email, password) */

  // const registrarUser = () => {
  //   setShowRegistro(true);
  //   setShowLoginForm(false);
  // };
  const timeOutAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const timeOutUser = () => {
    setTimeout(() => {
      setShowAlertEmail(false);
    }, 5000);
  };

  if(Cookies.get('data')){
    Cookies.remove('data');
  }

  const enter = (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      setShowAlert(true);
      timeOutAlert();
      console.log('Completa los campos')
    } else {
      axios.post(`${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/api/v1/login`, {
          email: email,
          password: password,
        })
        .then((resp) => {
          if(resp.status === 200){
            Cookies.set('data', JSON.stringify(resp.data), { expires: 3 });
            setisLoggedIn(true);
            navigate('/servicios');
          }
        })
        .catch((error) => {
          setShowAlertEmail(true);
        });
    }
  };
 

  return (
    <div className='flex flex-col '>
      {showLoginForm ? (
        <div>
          <p className='font-bold text-azul-oscuro text-3xl mb-8'>
            Le damos la bienvenida.
          </p>
          <p className='text-2xl mb-16'>Si ya tiene cuenta</p>
          <form action='' className='flex flex-col gap-6'>
            {/* <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/> */}
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
                onChange={handlepassword}
                type='password'
                name='password'
                value={password}
                className='flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent'
                placeholder='password'
              />
            </div>

              {/* <Search className="mx-1h-5 w-5 text-zinc-500" /> */}

            <button onClick={enter} className={(email && password) ? 'mx-1 border border-zinc-500 px-3 py-4 bg-celeste text-white gap-2 rounded-lg w-[25rem] flex items-center justify-center' : 'mx-1 border border-zinc-500 px-3 py-4 bg-blue-500 text-white font-bold rounded-lg w-[25rem] flex items-center justify-center opacity-50 cursor-not-allowed'} disabled={(email && password) ? false : true}>
              Ingresar
            </button>
            {ShowAlertEmail ? <Notification title="Error" message="Usuario o contrasenha invalidos"/> : null}
            <div className='text-2xl mb-16 flex flex-row gap-1'>¿No tiene cuenta? <Link className='text-celeste underline' to='/Registro'> Registrese</Link></div>
          </form>
        </div>
      ) : (
        <Registro
          setShowLoginForm={setShowLoginForm}
          setShowRegistro={setShowRegistro}
          email={email}
          password={password}
          handleemail={handleemail}
          handlepassword={handlepassword}
        />
      )}

      {/* <p>No tiene cuenta? <a href="#">Registrese</a></p> */}
    </div>
  );
}
