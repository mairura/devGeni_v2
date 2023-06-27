import { Padding } from "@mui/icons-material";
import { Box, TableCell, Typography, createTheme, styled } from "@mui/material";

const theme = createTheme();

export const TitleHead = styled(Typography)(({ theme: Theme }) => ({
  fontSize: "3rem",
  fontFamily: "Montserrat",
  fontWeight: "700",
  lineHeight: "100px",
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

export const TitleDesc = styled(Typography)(({ theme: Theme }) => ({
  fontSize: "1rem",
  fontFamily: "Montserrat",
  fontWeight: "400",
  lineHeight: "20px",
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  "@media (max-width:768px)": {
    marginTop: 0,
  },
}));

export const SignInText = styled(Typography)(({ theme: Theme }) => ({
  fontSize: "2rem",
  fontFamily: "Montserrat",
  fontWeight: "700",
  marginTop: theme.spacing(2),
}));

export const TitleOnboard = styled(Typography)(({ theme: Theme }) => ({
  fontSize: "3rem",
  mt: "1.5rem",
  fontFamily: "Montserrat",
  fontWeight: "800",
}));

export const NavItems = styled(Typography)(({ theme: Theme }) => ({
  fontFamily: "Montserrat",
  fontWeight: 600,
  paddingRight: theme.spacing(4),
  cursor: "pointer",
}));

export const SidebarList = styled(Typography)(({ theme: Theme }) => ({
  paddingLeft: theme.spacing(1),
  fontSize: "1rem",
  width: "100%",
  textAlign: "left",
  fontFamily: "Manrope",
  textTransform: "capitalize",

  "&:hover": {
    fontWeight: 500,
  },
}));
export const ResponsiveBox = styled(Typography)(({ theme }) => ({
  display: "block",
  "@media(max-width:768px)": {
    fontSize: "0.8rem",
    span: {},
  },
}));

export const CardTitle = styled(Typography)(({ theme: Theme }) => ({
  fontSize: "0.875rem",
  fontWeight: 700,
  color: "#031926",
  padding: "0.5rem 2rem",
  fontFamily: "Manrope",
}));

export const DashboardContainer = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  "@media (max-width: 768px)": {
    flexDirection: "column",
    width: "100%",
    padding: "0",
    margin: "0",
  },
}));

export const SectionHeading = styled(Typography)(({ theme: Theme }) => ({
  fontWeight: 400,
  fontSize: "1rem",
  margin: "1rem 0",
  userSelect: "none",
  fontFamily: "Manrope",
  paddingLeft: theme.spacing(2),
}));

export const CardHeading = styled(Typography)(({ theme: Theme }) => ({
  fontWeight: 700,
  fontSize: "1rem",
  userSelect: "none",
  fontFamily: "Manrope",
}));

//Table Cell Styles
export const TableCellsStyles = styled(TableCell)(({ theme: Theme }) => ({
  color: "#6E6E6E",
  fontSize: "0.75rem",
  fontFamily: "Manrope",
  fontWeight: 600,
}));

export const Contact = styled(Typography)(({ theme: Theme }) => ({
  fontWeight: 300,
  fontSize: "1rem",
}));
export const MsgText = styled(Typography)(({ theme: Theme }) => ({
  fontWeight: 300,
  fontSize: "0.75rem",
  color: "#6E6E6E",
}));

export const ChatMessage = styled(Typography)(({ theme: Theme }) => ({
  width: "90%",
  fontSize: "0.875rem",
}));

export const ChatTime = styled(Typography)(({ theme: Theme }) => ({
  textAlign: "right",
  fontSize: "0.625rem",
}));
