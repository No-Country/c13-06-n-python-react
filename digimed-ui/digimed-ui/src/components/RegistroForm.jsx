import { useState } from 'react';

function RegistroForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    documentType: '',
    documentNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    console.log("estos son los datos",formData)
  };

  const handleRegistration = () => {
    if (
      formData.fullName &&
      formData.documentType &&
      formData.documentNumber &&
      formData.email &&
      formData.password &&
      formData.confirmPassword
    ) {
      if (formData.password === formData.confirmPassword) {
       
        alert('Usuario registrado exitosamente.');
      } else {
        alert('Las contraseñas no coinciden.');
      }
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col">
      <p className="font-bold text-azul-oscuro text-3xl mb-8">Registro</p>
        <p className="text-2xl mb-16">Por favor, complete el formulario</p>
        <form action="" className="flex flex-col gap-6">
        <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center ">
        <input
          className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
          placeholder="Nombre y Apellido"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[12rem] flex items-center ">
        <input
          className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
          placeholder="Tipo de ID"
          type="text"
          name="documentType"
          value={formData.documentType}
          onChange={handleInputChange}
        />
      </div>
      <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[12rem] flex items-center ">
        <input
          className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
          placeholder="Numero de ID"
          type="number"
          name="documentNumber"
          value={formData.documentNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center ">
        <input
          className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center ">
        <input
          className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
          placeholder="Contraseña"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        </div>
        <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center ">
        <input
          className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
          placeholder="Repetir Contraseña"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <div className=" mx-1 border border-zinc-500 px-3 py-4 bg-celeste text-white gap-2 rounded-lg w-[25rem] flex items-center  justify-center">
      <button onClick={handleRegistration}>Confirmar Registro</button>
      </div>
      </form>
      </div>
    </div>
  );
}

export default RegistroForm;