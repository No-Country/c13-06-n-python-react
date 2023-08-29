export function LoginForm() {
  return (
    <div className="flex flex-col ">
      <p className="font-bold text-azul-oscuro text-3xl mb-8">
        Le damos la bienvenida.
      </p>
      <p className="text-2xl mb-16">Si ya tiene cuenta</p>
      <form action="" className="flex flex-col gap-6">
        <div className=" mx-1 border border-zinc-500 px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center ">
          <input
            type="text"
            className="flex-1 p-0 text-zinc-900 placeholder-zinc-600  bg-transparent  focus:outline-none"
            placeholder="Email "
          />
        </div>
        <div className="  mx-1 border-2  px-3 py-4 gap-2 rounded-lg w-[25rem] flex items-center">
          <input
            type="password"
            className="flex-1 p-0 text-zinc-900 placeholder-zinc-600  bg-transparent focus: outline-none"
            placeholder="Contraseña"
          />
        </div>


        <div className=" mx-1 border border-zinc-500 px-3 py-4 bg-celeste text-white gap-2 rounded-lg w-[25rem] flex items-center  justify-center">
          <button>Ingresar</button>
        </div>
      </form>

      {/* <p>No tiene cuenta? <a href="#">Registrese</a></p> */}
    </div>
  );
}
