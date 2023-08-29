import Solicitudes from "../Pages/Solicitudes";
import Footer from "../components/Footer";
import { Footer2 } from "../components/Footer2";
import Navbar from "../components/Navbar";
import { Navbar2 } from "../components/Navbar2";

export function Layout({ children }) {
  return (
    <>
      <div className="w-[80rem] mx-auto  px-20 pb-4 pt-10 flex flex-col  justify-between">
      <Navbar2/>
        <div className="max-w-7xl">{children}</div>
       <Footer2/>
      </div>
    </>
  );
}
