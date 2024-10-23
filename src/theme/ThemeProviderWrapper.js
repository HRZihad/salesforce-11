import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "theme";

const ThemeProviderWrapper = ({ children }) => {
  const mode = useSelector((state) => state.themeSlice.themeMode);
  const currentTheme = mode === "dark" ? darkTheme : lightTheme;

  // useEffect(() => {
  //   if (mode === 'dark') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  //   document.body.style.backgroundColor = mode === 'dark' ? 'green' : 'red';
  // }, [mode]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles
        styles={{
          "*::-webkit-scrollbar": {
            width: "0.4em",
            height: "0.3em",
          },
          "*::-webkit-scrollbar-track": {
            background: "none",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--secondary-color)",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "var(--active-color)",
          },
        }}
      />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
