import theme from "src/Theme/Theme";
import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Header, Main, Footer } from "src/layout";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBILC_URL}>
        <Stack minHeight="100vh">
          <CssBaseline />
          <Header />
          <Main />
          <Footer />
        </Stack>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
