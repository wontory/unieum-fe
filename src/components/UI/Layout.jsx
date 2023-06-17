import styled from "@emotion/styled";

import { Container } from "@mui/material";

import Header from "./Header/Header";
import Footer from "./Footer";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
});

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container
        maxWidth="lg"
        disableGutters={true}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
