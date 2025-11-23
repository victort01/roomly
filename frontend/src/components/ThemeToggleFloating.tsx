import React from "react";
import { IconButton, Tooltip, Paper } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

interface Props {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}

const ThemeToggleFloating: React.FC<Props> = ({ toggleColorMode, mode }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        borderRadius: "50%",
        width: 48,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1500,
        bgcolor: "background.paper",
      }}
    >
      <Tooltip title={mode === "dark" ? "Modo claro" : "Modo escuro"}>
        <IconButton onClick={toggleColorMode} size="small" aria-label="alternar tema">
          {mode === "dark" ? <Brightness7 fontSize="small" /> : <Brightness4 fontSize="small" />}
        </IconButton>
      </Tooltip>
    </Paper>
  );
};

export default ThemeToggleFloating;
