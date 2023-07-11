import { Button, createTheme, styled } from "@mui/material";

const theme = createTheme();

export const HeroButton = styled(Button)(({ theme: Theme }) => ({
  display: "flex",
  color: "rgba(255, 255, 255, 0.90)",
  borderRadius: "48px",
  background: "transparent",
  padding: "13.5px 24.61px 13.5px 25.39px",
  fontFamily: "Poppins",
  border: "1px solid #65CAAB",
  marginRight: theme.spacing(3),
  fontWeight: 700,
  fontSize: ".8rem",
  "&:hover": {
    background: "#65CAAB",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: ".8rem",
    padding: "10px",
  },
}));

export const HeroButton1 = styled(HeroButton)(({ theme: Theme }) => ({
  background: "linear-gradient(90deg, #CFF276 0%, #48BDB3 100%)",
  
}));
export const FooterSubscribeBtn = styled(Button)(({ theme: Theme }) => ({
  borderRadius: "48px",
  padding: "13.5px 42.81px 13.5px 41.19px",
  alignItems: "flex-start",
  background: "#29CC7A",
  color: "rgba(255, 255, 255, 0.90)",
  fontFamily: "Roboto Mono",
  lineHeight: "21px",
  textTransform: "uppercase",
  fontWeight: 700,
  fontSize: "14px",
  "&:hover": {
    border: "1px solid #29CC7A",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(2),
    padding: "6px 100px",
    fontWeight: 400,
    fontSize: "10px",
  },
}));

export const FooterSocialBtn = styled(Button)(({ theme: Theme }) => ({
  borderRadius: "48px",
  border: "2px solid rgba(255, 255, 255, 0.40)",
  padding: "7px 18px 7px 18px",
  color: "rgba(255, 255, 255, 0.90)",
  textTransform: "uppercase",
  fontWeight: 700,
  lineHeight: "18px",
  fontSize: "12px",
  marginRight: theme.spacing(1),
  fontFamily: "Roboto Mono",
  "&:hover": {
    color: "#29CC7A",
    background: "#fff",
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(2),
  },
}));

export const SkillsBtn = styled(Button)(({ theme: Theme})=> ({
  border: "1px solid #29CC7A",
  padding: "8px 25px",
  borderRadius: "40px",
  fontFamily: "Roboto Mono",
  lineHeight: "28px",
  fontWeight: 700, 
  fontSize: "12px",
  color: "#fff",
  marginTop: theme.spacing(5),
  "&:hover": {
    color: "#29CC7A",
    background: "#fff",
  },
}))

export const AppBtn = styled(Button)(({ theme: Theme})=> ({
  background: "#29CC7A",
  borderRadius: "5px",
  padding: "10px",
  color: "#12201B",
  fontWeight: 500,
  fontFamily: "Montserrat",
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  "&:hover": {
    color: "#fff",
    border: "1px solid #29CC7A"
  },
  [theme.breakpoints.down("md")]: {
    padding: "7px",
    fontSize: "9px",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
   
  }
}))

export const TagButton = styled(Button)(({ theme: Theme})=> ({
  borderRadius: "15px",
  border: "0.2px solid #FFF",
  background: "#12201B",
  color: "#fff",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  padding: "2px",
  fontSize: "10px",
  [theme.breakpoints.down("md")]: {
    fontSize: "8px",
  }
}))