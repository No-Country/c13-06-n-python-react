import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './layout/Layout';
import { Login } from './Pages/Login';
import Registro from './Pages/Registro';
import Servicios from './Pages/Servicios';
import Solicitudes from './Pages/Solicitudes';
import About from './Pages/About';
import Protected from './components/Protected';
import Home from './Pages/Home';
import Contacto from './Pages/Contacto';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);

  return (
   <div className={isLoggedIn ? "App bg-white  max-w-fit mx-auto h-full" : "App bg-white md:bg-white   mx-auto h-full"}>
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element = {
              <Layout>
                <Login isLoggedIn={setisLoggedIn}/>
              </Layout>
            }
          />
          <Route path="/registro"
            element = {
              <Layout>
                <Registro />
              </Layout>
            }
          />
           <Route path="/about"
            element = {
              <Layout>
                <About/>
              </Layout>
            }
          />
           <Route path="/home"
            element = {
              <Layout>
                <Home/>
              </Layout>
            }
          />
          <Route path="/contacto"
            element = {
              <Layout>
                <Contacto/>
              </Layout>
            }
          />
          <Route path="/servicios" 
            element = {
              <Protected isLoggedIn={isLoggedIn}>
                <Layout isLoggedIn={isLoggedIn}>
                  <Servicios/>
                </Layout>
              </Protected>
            } 
          />
          <Route path="/solicitudes"
            element = {
              <Protected isLoggedIn={isLoggedIn}>
                <Layout isLoggedIn={isLoggedIn}>
                  <Solicitudes/>
                </Layout>
              </Protected>
            }
          />
        </Routes>       
      </BrowserRouter>
    </div>
   
  )
}

export default App