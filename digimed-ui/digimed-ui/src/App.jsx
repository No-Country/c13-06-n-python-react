import './App.css';
// import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './layout/Layout';
import { Login } from './Pages/Login';
// import {Solicitudes} from './Pages/Solicitudes';
// import {Registro} from './Pages/Registro';


function App() {


  return (
   <div className="App">
      <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" element = {<Login/>} />
        </Routes> 
        </Layout>      
      </BrowserRouter>
    </div>
  )
}

export default App