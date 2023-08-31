import hero from '../assets/image_hero.png'

const Image=()=> {
    return (  <div className="flex ">
        <div className=" text-azul-oscuro">
       <img src={hero} alt="" className="h-[36rem] w-[50.5rem] mb-[5.25rem] -ml-[5rem] object-cover"/>   
    </div>
    </div>);
}

export default Image;