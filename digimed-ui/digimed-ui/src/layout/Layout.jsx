// import Footer from "../components/Footer";
import { Footer2 } from '../components/Footer2';
// import Navbar from "../components/Navbar";
import { Navbar2 } from '../components/Navbar2';
// import Solicitudes from "../Pages/Solicitudes";
// import Registro from "../Pages/Registro";

export function Layout({ children }) {
  return (
    <>
      <div className='w-full  md:w-[80rem] mx-auto px-4 md:px-20 pb-4 md:pt-10 flex flex-col  justify-between'>
        <div className=''>

        <Navbar2 />
        </div>
        <div className='lg:max-w-7xl flex justify-center'>{children}</div>
       <div className='hidden md:block'>
        <Footer2 />

</div>
      </div>
    </>
  );
}
