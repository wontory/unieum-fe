import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <header className="flex justify-center bg-base-100 border-b border-gray-100">
        <Navbar />
      </header>
      <main className="flex justify-center px-4 py-12">{children}</main>
      <footer className="flex justify-center bg-gray-100 p-8">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
