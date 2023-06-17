import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import Logo from "../../assets/unieum_logo.svg";

const Copyright = () => {
  return (
    <>
      <Typography variant="body2" color="text.secondary" fontSize={"12px"}>
        아피스 대표 황준걸 서울특별시 동작구 상도로 60가길 2
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize={"12px"}>
        {"Copyright © "}
        <Link color="inherit" href="">
          Apis
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Box>
            <img src={Logo} style={{ width: 50 }} />
            <Typography variant="body2">
              문의: 우측 하단 채널톡 또는 카카오톡 채널 @유니음
            </Typography>
          </Box>
          <Box>
            <Copyright />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
