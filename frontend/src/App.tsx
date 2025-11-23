import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import ThemeToggleFloating from "./components/ThemeToggleFloating";
import { useMemo, useState } from "react";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import HospedesPage from "./pages/HospedesPage";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  // useMemo evita recriação do tema a cada render
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "dark" ? "#121212" : "#f4f6f9",
            paper: mode === "dark" ? "#1e1e1e" : "#fff",
          },
          text: {
            primary: mode === "dark" ? "#ffffff" : "#000000",
            secondary: mode === "dark" ? "#cfcfcf" : "#555555",
          },
        },
      }),
    [mode]
  );

  const toggleColorMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        {/* Toggle precisa estar dentro do ThemeProvider e Router */}
        <ThemeToggleFloating toggleColorMode={toggleColorMode} mode={mode} />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/hospedes" element={<HospedesPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
