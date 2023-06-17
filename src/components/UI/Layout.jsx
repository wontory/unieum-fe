import { Container } from "@mui/material";

import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        disableGutters={true}
        sx={{
          height: "calc(100vh - 198px)",
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
