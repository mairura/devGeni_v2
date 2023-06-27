import { Button, createTheme, styled } from "@mui/material";

const theme = createTheme();

export const SignButtons = styled(Button)(({ theme: Theme }) => ({
  fontSize: "1rem",
  fontFamily: "Montserrat",
  color: "#000",
  width: "100%",
  height: "65px",
  fontWeight: "700",
  backgroundColor: "#D9D9D9",
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(2),
  "&:hover": {
    backgroundColor: "#C0C0C0",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

export const SidebarMenu = styled(Button)(({ theme: Theme }) => ({
  display: "flex",
  cursor: "pointer",
  marginBottom: theme.spacing(3),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  fontFamily: "Manrope",
  color: "#000",
  width: "90%",
  fontWeight: 200,
  fontSize: "1.5rem",
  "&:hover": {
    backgroundColor: "#968c8c",
    fontWeight: 600,
  },
}));

export const BuildButton = styled(Button)(({ theme: Theme }) => ({
  display: "flex",
  boxSizing: "border-box",
  borderRadius: "10px",
  cursor: "pointer",
  padding: theme.spacing(2),
  marginRight: theme.spacing(4),
  fontFamily: "Montserrat",
  fontSize: "0.75rem",
  color: "#000",
  borderColor: "#000",
  textTransform: "none",
  width: "4.625rem",
  height: "24px",
  "&:hover": {
    backgroundColor: "#968c8c",
    color: "#fff",
  },
}));

export const TextBox = styled(Button)(({ theme: Theme }) => ({
  textTransform:"capitalize",
  fontWeight:"400",
  fontSize:"10px",
  color:"#000"
}));
