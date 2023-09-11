import './App.css';
// import Home from "./Pages/Home";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './layout/Layout';
import { Login } from './Pages/Login';
import { Test } from './Pages/Test';
import Registro from './Pages/Registro';
import Servicios from './Pages/Servicios';
import Solicitudes from './Pages/Solicitudes';
import Protected from './components/Protected';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  return (
   <div className="App">
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
                <Registro/>
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