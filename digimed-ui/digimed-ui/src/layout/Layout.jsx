// import Footer from "../components/Footer";
import { Footer2 } from "../components/Footer2";
// import Navbar from "../components/Navbar";
import { Navbar2 } from "../components/Navbar2";
// import Solicitudes from "../Pages/Solicitudes";
// import Registro from "../Pages/Registro";

export function Layout({ children, isLoggedIn, setisLoggedIn }) {
  return (
    <>
      <div className="w-full flex flex-col  mx-auto  pb-4  justify-between md:w-[80rem] md:px-20  md:pt-10 ">
        <div className=" w-screen md:w-[80rem] ">
          <Navbar2 isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
        </div>
        <div className="lg:max-w-7xl flex justify-center">{children}</div>
        <div className="hidden md:block">
          <Footer2 />
        </div>
      </div>
    </>
  );
}
