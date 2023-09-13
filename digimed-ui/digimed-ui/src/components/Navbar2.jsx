import logo from "../assets/Logo1.png";
import logoSVG from "../assets/logo.svg";
import { HamburgerMenu } from "./HamburgerMenu";
import menuLogo from "../assets/iconamoon_menu-burger-horizontal-bold.svg"
import { useState } from "react";


export function Navbar2() {
const [openMenu , setOpenMenu] = useState(false) 

const toggleMenu = () => {
  setOpenMenu(!openMenu)
  console.log(openMenu ? 'open' : 'close')
}

  return (
    <div className="  flex items-center bg-mobile-bg md:bg-destacar mb-[6rem] h-[5.625rem] w-full md:ml-20 mr-[rem] md:relative justify-between md:justify-end">
      <div className=" w-[6.2rem] h-[6.2rem] mt-10 md:w-[10.3rem] md:h-[10.3rem] md:absolute lg:-left-20 lg:-top-4 md:-mt-1 md:ml-10">
        <img src={logoSVG} alt="" className="" />
      </div>
      
      {openMenu ? <div className=" text-lg gap-3 shadow-2xl z-10 absolute right-[5.5rem] top-10  md:p-0 w-[12rem] py-4 md:py-0 rounded-xl flex flex-col   md:mt-0 bg-white md:bg-transparent md:flex md:flex-row md:gap-[2.375rem] md:justify-end  items-center md:mr-36">
        <a href="/#">Home</a>
        <a href="#">Nosotros</a>
        <a href="/servicios">Servicios</a>
        <a href="#">Contacto</a>
      </div> : <div className=" hidden md:flex gap-[2.375rem] justify-end  items-center mr-36">
        <a href="/#">Home</a>
        <a href="#">Nosotros</a>
        <a href="/servicios">Servicios</a>
        <a href="#">Contacto</a>
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
    </div>
  );
  }

// import React from 'react';
// import logo from '../assets/Logo1.png'
// import logoSVG from '../assets/logo.svg'
// import { Avatar } from './Avatar';

// export function Navbar2() {
//     const [showMenu, setShowMenu] = React.useState(false);
//     const token = localStorage.getItem('token');
//     return (
//       <React.Fragment>
//         <div className='flex items-center  bg-destacar mb-[6rem] h-[5.625rem] w-full ml-20 mr-[rem] relative justify-end'>
//           <div className="absolute -left-20 -top-4">
//             <img src={logoSVG} alt="" className="" />
//           </div>
//           <div className={showMenu ? "flex gap-[2.375rem] justify-end  items-center mr-6" : "flex gap-[2.375rem] justify-end  items-center mr-24" }>
//             <a href="/#">Home</a>
//             <a href="#">Nosotros</a>
//             <a href="/servicios">Servicios</a>
//             <a href="#">Contacto</a>
//           </div>
//           { token ? (
//             <div className='flex mx-2'>
//               <Avatar />
//             </div>
//           ): null}
//         </div>
//       </React.Fragment>
//     );
// }
