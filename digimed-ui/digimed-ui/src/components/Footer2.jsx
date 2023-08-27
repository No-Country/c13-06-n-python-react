import { Facebook } from "./Facebook";
import { Instagram } from "./Instagram";
import { Linkedin } from "./Linkedin";
import { Twitter } from "./Twitter";
import { Youtube } from "./Youtube";

export function Footer2() {
    return ( <div className="">
        <div className="h-[0.125rem] bg-azul-oscuro"></div>
        <div className="flex justify-between mt-8 items-center">
        <p className="">Todos los derechos reservados @ Digimed.com | Terminos y condiciones</p>
        <div className="flex gap-5 ">      
        <Facebook />
        <Instagram/>
        <Youtube/>
        <Linkedin/>
        <Twitter/>
        </div>
        </div>
    </div> );
}
