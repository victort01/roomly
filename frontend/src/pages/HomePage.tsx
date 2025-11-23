import { Box, Typography, Paper, Button, useTheme } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box minHeight="100vh" sx={{ bgcolor: theme.palette.background.default }}>
      {/* Navbar */}
      <Box
        height={64}
        px={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottom={`1px solid ${theme.palette.divider}`}
        sx={{ bgcolor: theme.palette.background.paper }}
      >
        <Typography display="flex" alignItems="center" gap={1} fontSize={25} fontWeight={600}>
          <HotelOutlinedIcon />
          Roomly
        </Typography>

        <Button variant="outlined" startIcon={<LogoutOutlinedIcon />} onClick={() => navigate("/")}>
          Sair
        </Button>
      </Box>

      {/* Conteúdo */}
      <Box px={4} py={4}>
        <Typography variant="h4" fontWeight={700}>
          Início
        </Typography>

        {/* Cards inferiores */}
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={3} mt={3}>
          <Paper sx={{ p: 3, borderRadius: 2, flex: 1 }}>
            <Typography display="flex" alignItems="center" gap={1} fontSize={20} fontWeight={600}>
              <PeopleAltOutlinedIcon />
              Gerenciar Hóspedes
            </Typography>

            <Typography color="text.secondary" mt={1}>
              Cadastre e consulte hóspedes do hotel
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => navigate("/hospedes")}
            >
              Acessar
            </Button>
          </Paper>

          <Paper sx={{ p: 3, borderRadius: 2, flex: 1 }}>
            <Typography display="flex" alignItems="center" gap={1} fontSize={20} fontWeight={600}>
              <CalendarMonthOutlinedIcon />
              Gerenciar Reservas
            </Typography>

            <Typography color="text.secondary" mt={1}>
              Cadastre e consulte reservas do hotel
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => navigate("/reservas")}
            >
              Acessar
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
