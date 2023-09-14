import React, { useRef } from 'react';
import avatar from '../assets/avatar.svg'

const Profile = () => {
    const hiddenFileInput = useRef(null);

    const handleClick = event => {
      hiddenFileInput.current.click();
    };

    const handleChange = event => {
      const fileUploaded = event.target.files[0];
      handleFile(fileUploaded);
    };
  
  return (
    <div className='relative'>
      <p className="text-azul-claro text-center font-roboto font-bold text-2xl mb-16">Perfil</p>
      <div className="flex items-center justify-center space-x-8">
        <img src={avatar} className="absolute top-0 left-0 w-40 h-40 rounded-full bg-blue-500" />
        <button className="absolute top-24 left-24 rounded-full bg-cyan-500 text-white mt-4" onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-cyan-500 fill-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </button>
        <input
          type="file"
          onChange={handleChange}
          ref={hiddenFileInput}
          style={{display: 'none'}}
        />
        <div className="w-10/12 h-100 ml-16 mr-16 flex-shrink-0 border rounded-lg bg-destacar shadow-md p-8 flex items-center justify-center mb-16">
          <div className="flex flex-col w-full">
            <div className="flex items-center m-4">
              <input
                className="mx-1 px-3 py-4 gap-2 w-[25rem]"
                type="text"
                placeholder="Nombre"
              />
              <input
                className="mx-1 px-3 py-4 ml-4 gap-2 w-[25rem]"
                type="text"
                placeholder="Apellido"
              />
            </div>
            <div className="flex items-center m-4">
              <input
                className="mx-1 px-3 py-4 gap-2 w-[25rem]"
                type="text"
                placeholder="DNI"
              />
              <input
                className="mx-1 px-3 py-4 ml-4 gap-2 w-[25rem]"
                type="text"
                placeholder="Correo"
              />  
            </div>
            <button className="mx-1 border border-zinc-500 px-3 py-4 bg-celeste text-white gap-2 rounded-lg w-full flex items-center  justify-center">Guardar Cambios</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;