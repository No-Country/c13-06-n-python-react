export function LoginForm() {
    return (<div className="flex flex-col gap-4">
        <p className="font-bold text-azul-oscuro text-3xl">Le damos la bienvenida</p>
        <p>Si ya tiene cuenta</p>
        <form action="" className="flex flex-col gap-4">
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Contraseña"/>
            <button>ingresar</button>
        </form>
        <p>No tiene cuenta? <a href="#">Registrese</a></p>
    </div>  );
}

