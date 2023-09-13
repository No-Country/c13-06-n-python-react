import { LoginForm } from "../components/LoginForm";
import Image from "../components/Image";
import hero from "../assets/image_hero.png";
// import Solicitudes from "./Solicitudes";

export function Login() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col">
        <div className="hidden md:block">
          <Image />
        </div>
        <div className="mb-10 flex text-center">
          <span className="text-azul-oscuro font-semibold text-xl">
            Aprovechamos la tecnología para hacer la vida más fácil.
          </span>
        </div>
      </div>

      <LoginForm />
    </div>
  );
}
