import { Box, Typography, createTheme, styled } from "@mui/material";

const theme = createTheme();

export const HeroTitle = styled(Typography)(({ theme: Theme }) => ({
  fontSize: "4rem",
  fontFamily: "Montserrat",
  fontWeight: 700,
  lineHeight: "72px",
  width: "50vw",
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
    width: "100%",
  },
}));

export const HeroText = styled(Typography)(({ theme: Theme }) => ({
  fontFamily: "Manrope",
  fontWeight: 300,
  fontSize: "1rem",
  color: "#fff",
  width: "35vw",
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    fontSize: ".8rem",
    width: "100%",
  },
}));

export const PartnersText = styled(Typography)(({ theme: Theme }) => ({
  color: "#fff",
  fontFamily: "Roboto Mono",
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "21px",
  [theme.breakpoints.down("md")]: {
    fontSize: ".8rem"
  }
}));

export const AboutHeader = styled(Typography)(({ theme: Theme }) => ({
  background:
    "linear-gradient(269.86deg, #A8EB8C 13.54%, #FFFFFF 50.52%, #348CF4 85.94%)",
  fontFamily: "Roboto Mono",
  fontWeight: 700,
  fontSize: "2.5rem",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  lineHeight: "60px",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    fontSize: "2rem",
  }
}));

export const AboutText = styled(Typography)(({ theme: Theme }) => ({
  color: "#75849D",
  fontWeight: 300,
  fontSize: "1rem",
  fontFamily: "Montserrat",
  lineHeight: "31.96px",
  letterSpacing: "0.51px"
}));

export const Header = styled(Typography)(({ theme: Theme }) => ({
  color: "rgba(255, 255, 255, 0.90)",
  fontWeight: 500,
  fontSize: "5.5rem",
  fontFamily: "Roboto Mono",
  letterSpacing: "-0.92px",
  [theme.breakpoints.down('md')]: {
    fontSize: '1.9rem',
    display: "flex",
    paddingBottom: theme.spacing(2)
  },
}));

export const SubHeader = styled(Typography)(({ theme: Theme }) => ({
  color: "#FFF",
  fontWeight: 500,
  fontSize: "1.2rem",
  paddingBottom: theme.spacing(1.5),
  fontFamily: "Montserrat",
  lineHeight: "28px"
}));

export const HeaderText = styled(Typography)(({ theme: Theme }) => ({
  color: "#A2A2A2",
  fontWeight: 500,
  fontSize: "15px",
  fontFamily: "Montserrat",
  lineHeight: "26px"
}));

export const LinkLabel = styled(Typography)(({ theme: Theme }) => ({
  background: "linear-gradient(90deg, #73D1A4 0%, #99E493 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize:"1.2rem",
  fontWeight:600,
}));

export const SubTitle = styled(Typography)(({ theme: Theme }) => ({
  color: "#FFF",
  fontFamily:"Roboto Mono",
  fontWeight: 500,
  fontSize: "4rem",
  [theme.breakpoints.down('sm')]: {
    fontSize: "1.5rem",
    paddingBottom:".5rem"
  },
}));

export const IntroText = styled(Typography)(({ theme: Theme }) => ({
  color: "rgba(255, 255, 255, 0.70)",
  fontWeight: 400,
  fontSize: "1.2rem",
  fontFamily: "Montserrat",
  paddingTop: theme.spacing(3)
}));

export const DevGeniText = styled(Typography)(({ theme: Theme }) => ({
  color: "rgba(255, 255, 255, 0.90)",
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: "1.5rem",
  lineHeight:"30px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    
  }
}));
export const FooterSocialText = styled(Typography)(({ theme: Theme }) => ({
  color: "rgba(255, 255, 255, 0.70)",
  fontFamily: "Roboto Mono",
  fontSize: "12px",
  fontWeight: 400,
  textTransform: "uppercase",
  lineHeight: "16px",
  paddingBottom: theme.spacing(2),
}));

export const FooterSocialHeader = styled(Typography)(({ theme: Theme }) => ({
  color: "rgba(255, 255, 255, 0.90)",
  fontFamily: "Montserrat",
  fontSize: "24px",
  lineHeight: "30px",
  fontWeight: 700,
  paddingBottom: theme.spacing(2),
}));

export const FooterCheckboxText = styled(Typography)(({ theme: Theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "10px",
  fontWeight: 400,
  color: "rgba(255, 255, 255, 0.70)",
}));

export const FooterText = styled(Typography)(({ theme: Theme }) => ({
  fontSize: "14px",
  fontFamily: "Manrope",
  fontWeight: 300,
  lineHeight: "21px",
  color: "rgba(255, 255, 255, 0.70)",
  paddingBottom: theme.spacing(1),
  cursor: "pointer",
}));

export const FooterTextTitle = styled(Typography)(({ theme: Theme }) => ({
  color: "rgba(255, 255, 255, 0.90)",
  fontFamily: "Montserrat",
  textTransform: "uppercase",
  fontWeight: 700,
  lineHeight: "14.4px",
  fontSize: "12px",
  paddingBottom: theme.spacing(2.5),
}));

export const FooterTextCopright = styled(Typography)(({ theme: Theme }) => ({
  color: "rgba(255, 255, 255, 0.70)",
  fontFamily: "Montserrat",
  fontWeight: 400,
  lineHeight: "18px",
  fontSize: ".8rem",
  paddingRight: theme.spacing(2),
}));

export const SkillsHeader = styled(Typography)(({ theme: Theme }) => ({
  fontFamily: "Montserrat",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  color: "#99E493",
  fontWeight: 600,
  fontSize: "24px",
  paddingBottom: "2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem"
  }
}));

export const SkillsTitle = styled(Typography)(({ theme: Theme }) => ({
  fontFamily: "Roboto Mono",
  fontWeight: 500,
  lineHeight: "70px",
  fontSize: "48px",
  color: "#fff",
  width: "45vw",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: "2rem",
    lineHeight: "50px",
  },
}));

export const SkillsSubTitle = styled(Typography)(({ theme: Theme }) => ({
  color: "#A2A2A2",
  fontSize: "16px",
  fontFamily: "Montserrat",
  lineHeight: "40px",
  fontWeight: 500,
  width: "30vw",
  paddingTop: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: ".8rem",
  },
}));

export const TagHashText = styled(Typography)(({ theme: Theme})=> ({
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  fontFamily: "Montserrat",
  fontSize: "15px",
  fontWeight: 300,
  color: "#fff"
}))
