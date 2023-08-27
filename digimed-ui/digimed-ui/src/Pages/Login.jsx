import { LoginForm } from "../components/LoginForm";
import hero from '../assets/image_hero.png'

export function Login() {
    return (  <div className="flex ">
        <div className=" text-azul-oscuro">
       <img src={hero} alt="" className="h-[36rem] w-[50.5rem]  -ml-[5rem] object-cover"/>
     
        </div>

        <LoginForm/>

    </div>);
}

