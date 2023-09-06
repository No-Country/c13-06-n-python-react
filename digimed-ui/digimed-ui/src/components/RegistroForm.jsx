import { useFormik } from "formik";
import axios from 'axios';

export function RegistroForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      documentType: "",
      documentNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values, { resetForm }) => {
      console.log("formik values on submit", values);
      axios
        .post("http://127.0.0.1:5000/api/v1/register", {
          name: values.fullName.split(" ")[0],
          last_name: values.fullName.split(" ")[1],
          dni: values.documentNumber,
          member: "02355",
          email: values.email,
          password: values.password,
        })
        .then((resp) => {
          console.log("Usuario registrado con exito");
          // history.push('/');
          //window.location.href = '/';
        })
        .catch((error) => {
          console.log("error",error);
        });
      resetForm({ values: "" });
    },
    validate: (values) => {
      let errors = {};
      if (!values.fullName) {
        errors.fullName = "Nombre y Apellido es requerido";
      }
      if (!values.documentType) {
        errors.documentType = "Tipo de ID es requerido";
      }
      if (!values.documentNumber) {
        errors.documentNumber = "Numero de ID es requerido";
      }
      if (!values.email) {
        errors.email = "Email es requerido";
      }
      if (!values.password) {
        errors.password = "Contraseña es requerida";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Confirmar Contraseña es requerida";
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Las contraseñas no coinciden";
      }
      return errors;
    },
  });

  return (
    <div className="flex justify-center ">
      <div className=" ">
        <p className="font-bold text-azul-oscuro text-3xl mb-8">Registro</p>
        <p className="text-2xl mb-16">Por favor, complete el formulario</p>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
          <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center ">
            <input
              className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              placeholder="Nombre y Apellido"
            />
          </div>
          <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[12rem] flex items-center ">
            <input
              className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
              id="documentType"
              name="documentType"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.documentType}
              placeholder="Tipo de ID"
            />
          </div>
          <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[12rem] flex items-center ">
            <input
              className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
              id="documentNumber"
              name="documentNumber"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.documentNumber}
              placeholder="Numero de ID"
            />
          </div>
          <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center ">
            <input
              className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center ">
            <input
              className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
              placeholder="Contraseña"
              id="password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center ">
            <input
              className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
              placeholder="Repetir Contraseña"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </div>
          <div className=" mx-1 border border-zinc-500 px-3 py-4 bg-celeste text-white gap-2 rounded-lg w-[25rem] flex items-center  justify-center">
            <button type="submit">Confirmar Registro</button>
          </div>
        </form>
      </div>
    </div>
  );
}
