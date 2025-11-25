import {
  Box,
  Typography,
  Paper,
  Button,
  useTheme,
  CircularProgress,
  Chip,
  Card,
  CardContent,
} from "@mui/material";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDashboardStats, getRoomOccupation } from "../services/dashboardService";
import type { DashboardStats, RoomOccupation } from "../types/dashboard";
import { StatusQuarto, StatusReserva } from "../types/enums";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [rooms, setRooms] = useState<RoomOccupation[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateFilter, setDateFilter] = useState({
    dataInicio: new Date().toISOString().split("T")[0],
    dataFim: new Date().toISOString().split("T")[0],
  });

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [statsData, roomsData] = await Promise.all([
        getDashboardStats(dateFilter.dataInicio, dateFilter.dataFim),
        getRoomOccupation(),
      ]);
      setStats(statsData);
      setRooms(roomsData);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const getStatusColor = (status: StatusQuarto) => {
    switch (status) {
      case StatusQuarto.DISPONIVEL:
        return "success";
      case StatusQuarto.OCUPADO:
        return "error";
      case StatusQuarto.MANUTENCAO:
        return "warning";
      case StatusQuarto.LIMPEZA:
        return "info";
      default:
        return "default";
    }
  };

  const getStatusIcon = (status: StatusQuarto) => {
    switch (status) {
      case StatusQuarto.DISPONIVEL:
        return <CheckCircleOutlineIcon fontSize="small" />;
      case StatusQuarto.OCUPADO:
        return <CancelOutlinedIcon fontSize="small" />;
      case StatusQuarto.MANUTENCAO:
        return <BuildOutlinedIcon fontSize="small" />;
      case StatusQuarto.LIMPEZA:
        return <CleaningServicesOutlinedIcon fontSize="small" />;
      default:
        return undefined;
    }
  };

  const getStatusLabel = (status: StatusQuarto) => {
    switch (status) {
      case StatusQuarto.DISPONIVEL:
        return "Disponível";
      case StatusQuarto.OCUPADO:
        return "Ocupado";
      case StatusQuarto.MANUTENCAO:
        return "Manutenção";
      case StatusQuarto.LIMPEZA:
        return "Limpeza";
      default:
        return status;
    }
  };

  const getReservaStatusColor = (status: StatusReserva) => {
    switch (status) {
      case StatusReserva.PENDENTE:
        return "warning";
      case StatusReserva.CONFIRMADA:
        return "info";
      case StatusReserva.CHECKED_IN:
        return "success";
      case StatusReserva.CHECKED_OUT:
        return "default";
      case StatusReserva.CANCELADA:
        return "error";
      default:
        return "default";
    }
  };

  const getReservaStatusLabel = (status: StatusReserva) => {
    switch (status) {
      case StatusReserva.PENDENTE:
        return "Pendente";
      case StatusReserva.CONFIRMADA:
        return "Confirmada";
      case StatusReserva.CHECKED_IN:
        return "Check-in";
      case StatusReserva.CHECKED_OUT:
        return "Check-out";
      case StatusReserva.CANCELADA:
        return "Cancelada";
      default:
        return status;
    }
  };

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

      {/* Acesso Rápido */}
      <Typography variant="h4" fontWeight={700} mb={3} mt={5} margin={5}>
        Acesso Rápido
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
        gap={6}
        px={4}
        mb={5}
      >
        <Paper sx={{ p: 3, borderRadius: 2 }}>
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

        <Paper sx={{ p: 3, borderRadius: 2 }}>
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

      <Box px={4} py={4}>
        <Typography variant="h4" fontWeight={700} mb={1}>
          Dashboard
        </Typography>
        <Typography color="text.secondary" mb={3}>
          Visão geral do hotel em tempo real
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" py={8}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {/* Filtro de Data */}
            <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }}>
              <Box display="flex" gap={2} alignItems="center" flexWrap="wrap">
                <Typography fontWeight={600}>Filtrar por período:</Typography>

                <input
                  type="date"
                  value={dateFilter.dataInicio}
                  onChange={(e) => setDateFilter({ ...dateFilter, dataInicio: e.target.value })}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    fontSize: "14px",
                  }}
                />

                <Typography>até</Typography>

                <input
                  type="date"
                  value={dateFilter.dataFim}
                  onChange={(e) => setDateFilter({ ...dateFilter, dataFim: e.target.value })}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    fontSize: "14px",
                  }}
                />

                {/* Botão aplicar filtro */}
                <Button variant="contained" onClick={fetchDashboardData}>
                  Aplicar filtro
                </Button>
              </Box>
            </Paper>

            {/* Cards de Estatísticas */}
            <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={4} mb={4}>
              {/* Card 1 */}
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  color: "white",
                }}
              >
                <Box display="flex" alignItems="center" gap={2} mb={1}>
                  <PeopleAltOutlinedIcon sx={{ fontSize: 40 }} />
                  <Box>
                    <Typography variant="h4" fontWeight={700}>
                      {stats?.totalHospedesToday || 0}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Hóspedes
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Card 2 */}
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, #f44336 0%, #d32f2f 100%)`,
                  color: "white",
                }}
              >
                <Box display="flex" alignItems="center" gap={2} mb={1}>
                  <MeetingRoomOutlinedIcon sx={{ fontSize: 40 }} />
                  <Box>
                    <Typography variant="h4" fontWeight={700}>
                      {stats?.totalQuartosOcupados || 0}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Quartos Ocupados
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Card 3 */}
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, #ff9800 0%, #f57c00 100%)`,
                  color: "white",
                }}
              >
                <Box display="flex" alignItems="center" gap={2} mb={1}>
                  <PendingActionsOutlinedIcon sx={{ fontSize: 40 }} />
                  <Box>
                    <Typography variant="h4" fontWeight={700}>
                      {stats?.totalReservasPendentes || 0}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Reservas Pendentes
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Card 4 */}
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, #4caf50 0%, #388e3c 100%)`,
                  color: "white",
                }}
              >
                <Box display="flex" alignItems="center" gap={2} mb={1}>
                  <AttachMoneyOutlinedIcon sx={{ fontSize: 40 }} />
                  <Box>
                    <Typography variant="h4" fontWeight={700}>
                      R$ {stats?.receitaEstimada.toFixed(2) || "0.00"}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Receita Estimada
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
            {/* Ocupação dos Quartos */}
            <Paper sx={{ p: 3, borderRadius: 2, mb: 4 }}>
              <Typography variant="h5" fontWeight={700} mb={3}>
                Ocupação dos Quartos
              </Typography>

              <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fit, minmax(260px, 1fr))"
                gap={10}
              >
                {rooms.map((room) => (
                  <Card
                    key={room.id}
                    sx={{
                      borderRadius: 2,
                      border: `2px solid ${theme.palette.divider}`,
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 4,
                      },
                    }}
                  >
                    <CardContent>
                      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h6" fontWeight={700}>
                          Quarto {room.numero}
                        </Typography>

                        <Chip
                          icon={getStatusIcon(room.status)}
                          label={getStatusLabel(room.status)}
                          color={getStatusColor(room.status)}
                          size="small"
                        />
                      </Box>

                      <Typography variant="body2" color="text.secondary" mb={2}>
                        {room.tipoNome}
                      </Typography>

                      {room.reservaAtual ? (
                        <Box
                          sx={{
                            bgcolor: theme.palette.action.hover,
                            p: 1.5,
                            borderRadius: 1,
                          }}
                        >
                          <Typography variant="body2" fontWeight={600} mb={0.5}>
                            {room.reservaAtual.hospede}
                          </Typography>

                          <Typography variant="caption" display="block" mb={0.5}>
                            Check-in: {new Date(room.reservaAtual.checkIn).toLocaleDateString()}
                          </Typography>

                          <Typography variant="caption" display="block" mb={1}>
                            Check-out: {new Date(room.reservaAtual.checkOut).toLocaleDateString()}
                          </Typography>

                          <Chip
                            label={getReservaStatusLabel(room.reservaAtual.status)}
                            color={getReservaStatusColor(room.reservaAtual.status)}
                            size="small"
                          />
                        </Box>
                      ) : (
                        <Typography variant="body2" color="text.secondary" fontStyle="italic">
                          Nenhuma reserva ativa
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Paper>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Home;
