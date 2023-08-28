import './App.css';
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './layout/layout';
import { Login } from './Pages/Login';


function App() {


  return (
   <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element = {<Layout><Login/></Layout>} />
       
        </Routes>       
      </BrowserRouter>
    </div>
  )
}

export default App

