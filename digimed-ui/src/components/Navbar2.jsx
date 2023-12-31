import logoSVG from "../assets/logo.svg";
import menuLogo from "../assets/iconamoon_menu-burger-horizontal-bold.svg"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import Cookies from 'js-cookie';
import axios from 'axios';


export function Navbar2({ isLoggedIn = false, setisLoggedIn, profileImg, setProfileImg}) {
  const [openMenu , setOpenMenu] = useState(false)

  const cerrarSesion = (e) => {
		Cookies.remove('data');
    setisLoggedIn(false);
	};
  
  if(isLoggedIn){
    const cookies = JSON.parse(Cookies.get('data'));
    React.useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/api/v1/user/${cookies['user.id']}`,{
        headers: {Authorization: `Bearer ${cookies.access_token}`} 
      }).then((resp) => {
        if(resp.status === 200){
          setProfileImg(resp.data.patient.profile_img)
        }
      }).catch((error) => {
        console.log(error)
      });
    }, []);
  }  

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

    const token = isLoggedIn;
    

  return (
    <div className= {isLoggedIn ? "flex items-center pl-4 bg-blue-800 md:bg-destacar mb-[6rem] h-[5.625rem] max-w-6xl md:ml-20 mr-[rem] md:relative justify-between md:justify-end":"flex items-center bg-mobile-bg md:bg-destacar mb-[6rem] h-[5.625rem] w-full md:ml-20 ] md:relative justify-between md:justify-end"}>
      <div className=" w-[6.2rem] h-[6.2rem] mt-10 md:w-[10.3rem] md:h-[10.3rem] md:absolute lg:-left-20 lg:-top-4 md:-mt-1 md:ml-10">
        <Link to="/">
          <img src={logoSVG} alt="" className="" />
        </Link>
      </div>
      
      {openMenu ? <div className=" text-lg gap-3 shadow-2xl z-10 justify-start  absolute right-[5.5rem] top-10  md:p-0 w-[10rem] py-4 md:py-0 rounded-xl flex flex-col   md:mt-0 bg-white md:bg-transparent md:flex md:flex-row md:gap-[2.375rem] md:justify-end  pl-4 md:mr-36">
        <Link to="/home">Home</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
      </div> : <div className=" hidden md:flex gap-[2.375rem] justify-end  items-center mr-20">
        <Link to="/home">Home</Link>
        <Link to="/about">Quienes somos</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
      </div> }
      
      <div className="px-5 md:hidden" >
        <button onClick={toggleMenu} className="cursor-pointer px-[0.75rem] py-[0.90rem] bg-celeste rounded-lg">
        {
          openMenu ? <div className="w-[1.5rem] h-[1.5rem] bg-celeste"> 
            <span className=" text-white text-xl">X</span>
          </div>  : <img src={menuLogo} alt="" className="w-[1.5rem] h-[1.5rem]"/>
        }
        {/* <HamburgerMenu/> */}
        </button>  
      </div>
     
      { token ? (
            <div className=' hidden md:flex mx-2'>
              <Avatar closeSession={cerrarSesion} profileImg={profileImg}/>
            </div>
          ): null}
        
      
    </div>
  );
  }



