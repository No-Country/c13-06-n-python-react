import React from 'react';
import logo from '../assets/Logo1.png'
import logoSVG from '../assets/logo.svg'
import { Avatar } from './Avatar';

export function Navbar2() {
    const [showMenu, setShowMenu] = React.useState(false);
    const token = localStorage.getItem('token');
    return (
      <React.Fragment>
        <div className='flex items-center  bg-destacar mb-[6rem] h-[5.625rem] w-full ml-20 mr-[rem] relative justify-end'>
          <div className="absolute -left-20 -top-4">
            <img src={logoSVG} alt="" className="" />
          </div>
          <div className={showMenu ? "flex gap-[2.375rem] justify-end  items-center mr-6" : "flex gap-[2.375rem] justify-end  items-center mr-24" }>
            <a href="/#">Home</a>
            <a href="#">Nosotros</a>
            <a href="/servicios">Servicios</a>
            <a href="#">Contacto</a>
          </div>
          { token ? (
            <div className='flex mx-2'>
              <Avatar />
            </div>
          ): null}
        </div>
      </React.Fragment>
    );
}
