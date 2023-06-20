import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <header className="flex justify-center bg-base-100 border-b border-base-200">
        <Navbar />
      </header>
      <main className="flex justify-center px-4 py-12">{children}</main>
      <footer className="flex justify-center bg-base-200 p-8">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
