import { Box, createTheme, styled } from "@mui/material";

const theme = createTheme();

export const ContainerWrapper = styled(Box)(({ theme: Theme }) => ({
  marginTop: theme.spacing(9),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.up("md")]: {
    marginTop: "10px",
  },
}));

export const HeroContainer = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  color: "#fff",
  paddingTop: Theme.spacing(6),
}));

export const HeroSection = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(1),
  },
}));

export const HeroButtons = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const PartnerHeader = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const LogoContainer = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  justifyContent: "space-around",
}));

export const FooterContainer = styled(Box)(({ theme: Theme }) => ({}));

export const FooterSocialBox = styled(Box)(({ theme: Theme }) => ({
  borderRadius: "16px",
  background: "rgba(226, 230, 247, 0.08)",
  padding: "40px 40px 26px 40px",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

export const FooterInputBox = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  padding: "10px 0",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
}));

export const FooterCheckbox = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  paddingTop: "10px",
  alignContent: "center",
  alignItems: "center",
  color: "rgba(255, 255, 255, 0.70)",
}));

export const FooterSocialAccounts = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const FooterSocials = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  color: "#fff",
  alignItems: "center",
  alignContent: "center",
  textAlign: "center",
}));

export const SocialIcons = styled(Box)(({ theme: Theme }) => ({
  marginRight: theme.spacing(3),
  marginTop: theme.spacing(3),
  cursor: "pointer",
  "&:hover": {
    color: "#29CC7A",
  },
}));

export const FooterAccounts = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  paddingTop: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export const FooterCopyright = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: theme.spacing(3),
  width: "100%",
  alignItems: "center",
  alignContent: "center",
  textAlign: "center",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

export const SkillContainer = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  background: "#12201B",
  borderRadius: "20px",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

export const FlexEndBox = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  alignContent: "center",
}));

export const ProjectsExpo = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid red",
  width: "100%",
}));

export const BuildTitleBox = styled(Box)(({ theme: Theme }) => ({
  paddingBottom: "4rem",
  marginBottom: "9rem",
  [theme.breakpoints.down("sm")]: {
    paddingBottom: 0,
    marginBottom: "3rem",
  },
}));

export const AboutHead = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(10),
  marginTop: theme.spacing(3),
  justifyContent: "center",
  flexDirection: "column",
  alignContent: "center",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6),
  },
}));

//DiscoverPage Stylings
export const DiscoverHeader = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  paddingTop: theme.spacing(20),
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(3),
  },
}));

export const TagFilter = styled(Box)(({ theme: Theme})=> ({
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.70)",
  padding: "20px 60px",
  color: "#fff",
  fontFamily: "Roboto Mono",
  fontWeight: 700,
  fontSize: "1rem",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "6vh",
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(3)
  }
}))

export const TagsContainer = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  height: "auto",
  marginTop: theme.spacing(3),
  marginLeft: theme.spacing(4),
  marginRight: theme.spacing(3),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  alignSelf: "center",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column"
  }
}));
