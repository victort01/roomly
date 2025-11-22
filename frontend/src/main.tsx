import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import App from "./App.tsx";

const theme = createTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {" "}
    {/* Ativa verificações extras em dev */}
    <ThemeProvider theme={theme}>
      {" "}
      {/* Fornece o tema MUI para toda a app */}
      <CssBaseline /> {/* Aplica normalização de CSS global do MUI */}
      <App /> {/* Renderiza o componente principal da aplicação */}
    </ThemeProvider>
  </StrictMode>
);
