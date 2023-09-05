import './App.css';
// import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './layout/Layout';
import { Login } from './Pages/Login';
import { Test } from './Pages/Test';
import Registro from './Pages/Registro';
import Servicios from './Pages/servicios';
import Solicitudes from './Pages/Solicitudes';




function App() {


  return (
   <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element = {<Layout><Login/></Layout>} />
        <Route path="/registro" element = {<Layout><Registro/></Layout>} />
        <Route path="/servicios" element = {<Layout><Servicios/></Layout>} />
        <Route path="/solicitudes" element = {<Layout><Solicitudes/></Layout>} />

        {/* <Route path="/test" element = {<Layout><Test/></Layout>} /> */}
        </Routes>       
      </BrowserRouter>
    </div>
  )
}

export default App