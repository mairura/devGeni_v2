import { Box, createTheme, styled } from "@mui/material";

const theme = createTheme();

export const DashboardContainer = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));

export const ProjectContainer = styled(Box)(({ theme: Theme }) => ({
  border: "0.5px solid rgba(196, 196, 196, 0.35)",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
  borderRadius: "15px",
  padding: "0.5rem 0.8rem",
  width: "250px",
  marginRight: "1rem",
}));
