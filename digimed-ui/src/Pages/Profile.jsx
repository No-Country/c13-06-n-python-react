import React, { useRef, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import avatar from '../assets/avatar.svg'
import { useNavigate } from 'react-router-dom';

const Profile = ({profileImg, setProfileImg}) => {
  const [patientId, setPatientId] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFile, setSelectedFile] = useState('')
  const hiddenFileInput = useRef(null);
  const cookies = JSON.parse(Cookies.get('data'));
  const Navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlelastName = (e) => {
    setLastName(e.target.value);
  };

  const handledocumentNumber = (e) => {
    setDocumentNumber(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onSelectFile = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(await convertToBase64(e.target.files[0]))
  }


  const handleUpdateProfile = (e) => {
    e.preventDefault();

    axios.put(`${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/api/v1/patients/${patientId}`, {
      name: name,
      last_name: lastName,
      dni: documentNumber,
      profile_img: profileImg
    },
    {
      headers: {
        Authorization: `Bearer ${cookies.access_token}`
      }
    }).then((resp) => {
      console.log(resp.status)
      if(resp.status === 200){
        Navigate('/servicios');
      }
    }).catch((error) => {
      console.log(error)
    });
  }
 
  React.useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/api/v1/user/${cookies['user.id']}`,{
      headers: {Authorization: `Bearer ${cookies.access_token}`} 
    }).then((resp) => {
      if(resp.status === 200){
        setPatientId(resp.data.patient.id)
        setName(resp.data.patient.name)
        setLastName(resp.data.patient.last_name)
        setDocumentNumber(resp.data.patient.dni)
        setEmail(resp.data.user.email)
        setProfileImg(resp.data.patient.profile_img)
      }
    }).catch((error) => {
      console.log(error)
    });
  }, []);

  React.useEffect(() => {
    if (!selectedFile) {
        setProfileImg(avatar)
        return
    }
    try{
      const objectUrl = URL.createObjectURL(selectedFile)
      setProfileImg(objectUrl)
      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
    }catch(error){
      setProfileImg(selectedFile)
    }
  }, [selectedFile])

  return (
    <div className='relative'>
      <p className="text-azul-claro text-center font-roboto font-bold text-2xl mb-16">Perfil</p>
      <div className="flex items-center justify-center space-x-8">
        <img src={profileImg} className="absolute top-0 left-0 w-40 h-40 rounded-full bg-blue-500" />
        <button className="absolute top-24 left-24 rounded-full bg-cyan-500 text-white mt-4" onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-cyan-500 fill-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </button>
        <input
          type="file"
          onChange={onSelectFile}
          ref={hiddenFileInput}
          style={{display: 'none'}}
          accept="image/*"
        />
        <div className="w-10/12 h-100 ml-16 mr-16 flex-shrink-0 border rounded-lg bg-destacar shadow-md p-8 flex items-center justify-center mb-16">
          <div className="flex flex-col w-full">
            <div className="flex items-center m-4">
              <input
                className="mx-1 px-3 py-4 gap-2 w-[25rem]"
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={handleName}
              />
              <input
                className="mx-1 px-3 py-4 ml-4 gap-2 w-[25rem]"
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={handlelastName}
              />
            </div>
            <div className="flex items-center m-4">
              <input
                className="mx-1 px-3 py-4 gap-2 w-[25rem]"
                type="text"
                placeholder="DNI"
                value={documentNumber}
                onChange={handledocumentNumber}
              />
              <input
                className="mx-1 px-3 py-4 ml-4 gap-2 w-[25rem]"
                type="text"
                placeholder="Correo"
                value={email}
                onChange={handleEmail}
                disabled
              />  
            </div>
            <button className="mx-1 border border-zinc-500 px-3 py-4 bg-celeste text-white gap-2 rounded-lg w-full flex items-center  justify-center" onClick={handleUpdateProfile}>Guardar Cambios</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;