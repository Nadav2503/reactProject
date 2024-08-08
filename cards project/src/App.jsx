import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

import Router from "./routes/Router";

import Layout from "./layout/Layout";
import UserProvider from "./users/providers/UserProvider";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Layout>
            <Router />
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;