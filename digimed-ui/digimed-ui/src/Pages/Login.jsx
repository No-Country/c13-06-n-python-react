import { LoginForm } from "../components/LoginForm";
import Image from "../components/image";
import hero from '../assets/image_hero.png'
// import Solicitudes from "./Solicitudes";

export function Login() {
    return (  <div className="flex ">
        <Image/>

        <LoginForm/>

    </div>);
}

