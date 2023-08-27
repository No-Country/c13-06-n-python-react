import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export function Layout({ children }) {
  return (
    <>
      <div className="max-w-7xl mx-auto h-screen px-20 pb-4 pt-10 flex flex-col justify-between">
        <Navbar />
        <div className="max-w-7xl">{children}</div>
        <Footer />
      </div>
    </>
  );
}
