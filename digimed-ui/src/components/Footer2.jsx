import { Facebook } from "./Facebook";
import { Instagram } from "./Instagram";
import { Linkedin } from "./Linkedin";
import { Twitter } from "./Twitter";
import { Youtube } from "./Youtube";

export function Footer2() {
    return ( 
        <div className="mb-10  text-center hidden md:block">
        <span className="font-bold text-2xl text-azul-oscuro mb-[2.8rem]">
          Aprovechamos la tecnología para hacer la vida más fácil.
        </span>
    <div className="">
        <div className="h-[0.125rem] bg-azul-oscuro mt-6"></div>
        <div className="flex justify-between mt-[1.5rem] items-center">
        <p className="">Todos los derechos reservados @ Digimed.com | Terminos y condiciones</p>
        <div className="flex gap-5 ">      
        <a href="https://www.facebook.com/" target={"_blank"}rel=' noopener noreferrer' 
          style={{ display: 'flex', alignItems: 'center',textDecoration: 'none' }}><Facebook /></a>
        <a href="https://www.instagram.com" target={"_blank"}rel=' noopener noreferrer'
          style={{ display: 'flex', alignItems: 'center',textDecoration: 'none' }}><Instagram/></a>
        <a href="https://www.youtube.com" target={"_blank"}rel=' noopener noreferrer'
          style={{ display: 'flex', alignItems: 'center',textDecoration: 'none' }}><Youtube/></a>
        <a href="https://www.linkedin.com" target={"_blank"}rel=' noopener noreferrer'
          style={{ display: 'flex', alignItems: 'center',textDecoration: 'none' }}><Linkedin/></a>
        <a href="https://twitter.com" target={"_blank"}rel=' noopener noreferrer'
          style={{ display: 'flex', alignItems: 'center',textDecoration: 'none' }}><Twitter/></a>
        </div>
        </div>
        </div>
    </div> );
}
