import React from "react";

function RegistroForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        identificationType: '',
        identificationNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          alert("Las contraseñas no coinciden.");
          return;
        }
    }
  return (
    <div>
    <h1>Registro de Usuario</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Nombre completo:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      </label>
      <label>
        Tipo de identificación:
        <input type="text" name="identificationType" value={formData.identificationType} onChange={handleChange} />
      </label>
      <label>
        Número de identificación:
        <input type="text" name="identificationNumber" value={formData.identificationNumber} onChange={handleChange} />
      </label>
      <label>
        Correo:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Contraseña:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <label>
        Confirmar contraseña:
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      </label>
      <button type="submit">Registrarse</button>
    </form>
    </div>
  );
}

export default RegistroForm;