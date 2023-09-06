import {useFormik} from "formik";

export function LoginForm2() {

  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit:( values , {resetForm}) => {
      console.log("formik values on submit",values) 
      resetForm({values:""})
    },validate: values => {
      let errors = {};
      if(!values.email){
          errors.email = "Email is required";
      }
      if(!values.password){
          errors.password = "Password is required"; 
      }
      return errors;
  }
    
    }
  )

  // console.log("formik values",formik.values)
 
  return (
    <div className='flex flex-col '>
        <div>
          <p className='font-bold text-azul-oscuro text-3xl mb-8'>  
            Le damos la bienvenida.
          </p>
          <p className='text-2xl mb-16'>Si ya tiene cuenta</p>

          
          <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
            {/* <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/> */}
            <div className=' mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center '>
              {/* <Search className="mx-1h-5 w-5 text-zinc-500" /> */}
              <input
                id="email"
                name='email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                className='flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent'
                placeholder='Email'
              />
            </div>
            <div className='  mx-1 border-2  px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center'>
              <input
                id="password"
                name='password'
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                className='flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent'
                placeholder='password'
              />
            </div>

            <div className=' mx-1 border border-zinc-500 px-3 py-4 bg-celeste text-white gap-2 rounded-lg w-[25rem] flex items-center  justify-center'>
              {/* <Search className="mx-1h-5 w-5 text-zinc-500" /> */}

              <button type='submit'
               
              >
                Ingresar
              </button>
            </div>
            {/* <div className='text-2xl mb-16 flex flex-row gap-1'>¿No tiene cuenta? <Link className='text-celeste underline' to='/Registro'> Registrese</Link></div> */}
          </form>
        </div>
      

      {/* <p>No tiene cuenta? <a href="#">Registrese</a></p> */}
    </div>
  );
}
