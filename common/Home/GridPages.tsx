import { Grid, createTheme, styled } from "@mui/material";

const theme = createTheme();

export const AboutGrid = styled(Grid)(({ theme: Theme }) => ({
  backgroundColor: "#000A05",
  p: 5,
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

export const FilteredTags = styled(Grid)(({ theme: Theme})=> ({
  borderRadius: "25px",
  padding: "8px 15px",
  border: "1px solid rgba(255, 255, 255, 0.60)",
  color: "#fff",
  marginBottom: theme.spacing(2),
  marginLeft: theme.spacing(3),
  height: "40px",
  maxWidth: "fit-content",
  [theme.breakpoints.down("md")]: {
    padding: "8px",
    fontSize: ".6rem",
    height: "30px",
  }
}))