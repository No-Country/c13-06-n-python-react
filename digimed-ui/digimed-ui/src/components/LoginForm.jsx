// import Alert from '@mui/material/Alert';
import Registro from '../Pages/Registro';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Notification } from './Notification';
import axios from 'axios';
import { HamburgerMenu } from './HamburgerMenu';
// import { useHistory } from 'react-router-dom';

export function LoginForm() {
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
  const enter = (e) => {
    e.preventDefault();
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
            localStorage.setItem('token', resp.data.access_token);
            navigate('/servicios');
          }
          // history.push('/servicios');
          // window.location.href = '/servicios'
        })
        .catch((error) => {
          setShowAlertEmail(true);
        });
    }
  };
 

  return (
    <div className='flex flex-col h-screen '>
      {showLoginForm ? (
        <div>
          <div className='hidden  md:block'>

          <p className='md:font-bold md:text-azul-oscuro  md:text-3xl md:mb-8'>
            Le damos la bienvenida.
          </p>
          </div>
          <div className='hidden md:block'>
          <p className='text-2xl mb-16'>Si ya tiene cuenta</p>

          </div>
          <form action='' className='flex flex-col mt-10 md:mt-1 gap-6 justify-center'>
            {/* <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/> */}
            <div className=' mx-auto md:mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-full md:w-[25rem] flex items-center '>
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
            <div className='  mx-auto md:mx-1 border border-zinc-500  px-3 py-4 gap-2 rounded-lg w-full md:w-[25rem] flex items-center'>
              <input
                onChange={handlepassword}
                type='password'
                name='password'
                value={password}
                className='flex-1 p-0 text-zinc-900  placeholder-zinc-600 border-0 bg-transparent'
                placeholder='password'
              />
            </div>

            {/* <div className=' mx-auto md:mx-1 border border-zinc-500 px-3 py-4 text-white gap-2 rounded-lg w-[18rem] md:w-[25rem] flex items-center  justify-center'>

          

            </div> */}
     
             {/* <Search className="mx-1h-5 w-5 text-zinc-500" /> */} 
            <button onClick={enter} className={(email && password) ? ' mx-auto md:mx-1 border border-zinc-500 px-3 py-4 bg-celeste text-white gap-2 rounded-lg w-full md:w-[25rem] flex items-center justify-center' : 'mx-auto md:mx-1 border border-zinc-500 px-3 py-4 bg-blue-500 text-white font-bold rounded-lg w-full md:w-[25rem] flex items-center justify-center opacity-50 cursor-not-allowed'} disabled={(email && password) ? false : true}>
              Ingresar
            </button>
            {ShowAlertEmail ? <Notification title="Error" message="Usuario o contrasenha invalidos"/> : null}
              



            
            <div className='mt-10 md:mt-1 md:text-2xl  flex flex-row gap-1 justify-center'>
                ¿No tiene cuenta? 
              <Link className='text-celeste underline' to='/Registro'> 
                 Registrese
              </Link>
            </div>
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
