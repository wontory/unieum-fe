import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { COLORS } from "./color";

// A custom theme for this app
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: COLORS.mainblue,
        dark: "#42a5f5",
      },
    },
    typography: {
      fontFamily: "'Pretendard Variable', san-serif",
      h1: {
        fontSize: "48px",
        fontWeight: 600,
        lineHeight: "1.19",
      },
      h2: {
        fontSize: "36px",
        fontWeight: 600,
        lineHeight: "1.19",
      },
      h3: {
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "1.19",
      },
      body1: {
        fontSize: "18px",
        fontWeight: 600,
        lineHeight: "1.19",
      },
      body2: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "1.19",
      },
    },
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: "18px",
            fontWeight: 600,
            padding: "16px 32px",
            lineHeight: "1.19",
            borderRadius: "4px",
          },
          contained: {
            color: COLORS.gray0,
            boxShadow: "none",
            fontWeight: 600,
            "&:hover": {
              color: COLORS.mainblue,
              background: "#EEF3FF",
              border: "1px solid #A9C1F6",
              boxShadow: "0px 0px 12px 0px rgba(109,148,235,0.25)",
              borderRadius: "4px",
            },
          },
        },
      },
      //TODO 61px 높이 괜칞은지 물어보기
      MuiToolbar: {
        styleOverrides: {
          root: {
            "@media (min-width: 600px)": {
              minHeight: "61px",
            },
          },
        },
      },
    },
  })
);

export default theme;
