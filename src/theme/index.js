import { createTheme } from "@mui/material";

// Global theme configuration
export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: '"Poppins", sans-serif',  // or any other font you prefer
    },
  },
});

// For dark theme
export const darkTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: '"Poppins", sans-serif',  // Set the font family for dark theme
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#F7FAFF",
      white: "#0D175D",
      semiWhite: "white",
      active: "#DFFE23",
      icon: "#72799B",
      cardBg: "#303030",
      cardBg2: "#373737",
      cardBg3: "#9BB1C0",
      border: "#ACACAC29",
      border2: "#aca9a9a8",
      grid: "#E5E5E5",
    },
    secondary: {
      main: "#303030",
    },
    background: {
      main: "#F7FAFF",
      cardBg: "#829DB0",
      btnBg: "#313852",
      listItemBg: "#ffffff",
      inputBg: "#dedeef42",
      inputLabelBg: "#d3d9f2",
    },
    text: {
      white: "#ffffff",
      black: "#303030",
    },
    icon: {
      iconBg: "#EDEDEF",
      lightIconBg: "#D3DFF3",
      darkIconBg: "#303030",
      iconColor: "gray",
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  },
});

// For light theme
export const lightTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: '"Gilroy", sans-serif',  // Set the font family for light theme
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#F7FAFF",
      white: "#0D175D",
      semiWhite: "#D3E0F3",
      darkSemiWhite: "#BFC0C1",
      active: "#DFFE23",
      icon: "#72799B",
      cardBg: "#303030",
      cardBg2: "#373737",
      cardBg3: "#9BB1C0",
      cardLightBg: "#DBE5F2",
      border: "#ACACAC29",
      border2: "#aca9a9a8",
      grid: "#E5E5E5",
    },
    secondary: {
      main: "#303030",
    },
    background: {
      main: "#F7FAFF",
      cardBg: "#829DB0",
      btnBg: "#313852",
      listItemBg: "#ffffff",
      inputBg: "#dedeef42",
      inputLabelBg: "#d3d9f2",
    },
    text: {
      white: "#ffffff",
      black: "#303030",
    },
    icon: {
      iconBg: "#EDEDEF",
      lightIconBg: "#D3DFF3",
      darkIconBg: "#303030",
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  },
});
