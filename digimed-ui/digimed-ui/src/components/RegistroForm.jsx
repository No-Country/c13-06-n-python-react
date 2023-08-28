import React from "react";

function RegistroForm() {
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          alert("Las contraseñas no coinciden.");
          return;
        }
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre completo:
        <input type="text" name="fullName" />
      </label>
      <label>
        Tipo de identificación:
        <input type="text" name="identificationType"/>
      </label>
      <label>
        Número de identificación:
        <input type="numer" name="identificationNumber" />
      </label>
      <label>
        Correo:
        <input type="email" name="email" />
      </label>
      <label>
        Contraseña:
        <input type="password" name="password" />
      </label>
      <label>
        Confirmar contraseña:
        <input type="password" name="confirmPassword" />
      </label>
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegistroForm;