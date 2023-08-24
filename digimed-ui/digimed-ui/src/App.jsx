import './App.css';
import Home from "./Pages/Home";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
   <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element = {<Home/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

