import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <header
        className="flex justify-center px-4"
        style={{ borderBottom: "1px solid rgb(205, 205, 205)" }}
      >
        <Navbar />
      </header>
      <main>{children}</main>
      <footer
        className="footer flex justify-center px-12 py-6"
        style={{ background: "rgb(238, 238, 238)" }}
      >
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
