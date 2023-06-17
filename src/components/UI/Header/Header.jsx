import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import { COLORS } from "../../../styles/color";
import Logo from "../../../assets/unieum_logo.svg";
import PcHeader from "./PcHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <AppBar
      sx={{
        bgcolor: COLORS.gray0,
        boxShadow: 0,
        borderBottom: 1,
        borderColor: COLORS.headerBorder,
      }}
      position="static"
    >
      <Container disableGutters={true} maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: "1 1 0" }}></Box>
          <Box
            sx={{
              flex: "1 1 0",
              display: "flex",
              justifyContent: "center",
              flexWrap: "no-wrap",
            }}
          >
            <Link to="/">
              <Button>
                <img src={Logo} style={{ width: 50 }} />
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              flex: "1 1 0",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "no-wrap",
            }}
          >
            {matches ? <PcHeader /> : <MobileHeader />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
