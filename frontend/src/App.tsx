import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import ThemeToggleFloating from "./components/ThemeToggleFloating";
import { useState } from "react";
import { HomePage } from "./pages/HomePage";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = createTheme({ palette: { mode } });

  const toggleColorMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeToggleFloating toggleColorMode={toggleColorMode} mode={mode} />
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
