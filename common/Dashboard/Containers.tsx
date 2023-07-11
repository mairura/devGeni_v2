import { Box, createTheme, styled } from "@mui/material";

const theme = createTheme();

export const DashboardContainer = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: theme.spacing(2),
  // border: "1px solid green",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    width: "100%",
    padding: "0",
    margin: "0",
  },
}));

export const FullInboxWrapper = styled(Box)(({ theme: Theme }) => ({
    display: "flex",
    color:"#000",
    alignItems:"center",
    marginRight:"1rem",
  }));
  
  export const ChatContainer = styled(Box)(({ theme: Theme }) => ({
  flexGrow:1
  }));

  export const ProfileContainer = styled(Box)(({ theme: Theme }) => ({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
    }));