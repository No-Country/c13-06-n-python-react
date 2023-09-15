import { LoginForm } from "../components/LoginForm";
import hero from '../assets/image_hero.png'

export function Test() {
    return (  <div className="flex ">
        <div className=" text-azul-oscuro">
       <img src={hero} alt="" className="h-[36rem] w-[50.5rem] mb-[5.25rem] -ml-[5rem] object-cover"/>
      <p className="font-bold text-2xl  mb-[2.8rem]"> TESt Aprovechamos la tecnología para hacer la vida más fácil.</p>
        </div>

        <LoginForm/>

    </div>)
}