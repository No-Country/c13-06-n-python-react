import { LoginForm } from '../components/LoginForm';
import Image from '../components/Image';
import hero from '../assets/image_hero.png';
// import Solicitudes from "./Solicitudes";

export function Login({ isLoggedIn }) {
  return (
    <div className='flex '>
      <Image />

      <LoginForm setisLoggedIn={isLoggedIn}/>
    </div>
  );
}
