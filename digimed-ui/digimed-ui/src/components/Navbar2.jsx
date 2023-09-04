import logo from '../assets/Logo1.png'
import logoSVG from '../assets/logo.svg'

export function Navbar2() {
    return (<div className='flex items-center  bg-destacar mb-[6rem] h-[5.625rem] w-full ml-20 mr-[rem] relative justify-end'>
            <div className="absolute -left-20 -top-4">
                <img src={logoSVG} alt="" className="" />
            </div>
        
           
                <div className="flex gap-[2.375rem] justify-end  items-center mr-36">
                    <a href="/#">Home</a>
                    <a href="#">Nosotros</a>
                    <a href="/servicios">Servicios</a>
                    <a href="#">Contacto</a>
                </div>
       
       
    </div>  );
}
