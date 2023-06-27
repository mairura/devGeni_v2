import * as React from "react";
import { Paper, Box, Grid, Typography, Container, styled } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  ResponsiveBox,
  SignInText,
  TitleDesc,
  TitleHead,
  TitleOnboard,
} from "../../common/Typos";
import { SignButtons } from "../../common/Buttons";

const theme = createTheme();
const MainContainer = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  "@media(max-width:768px)": {
    width: "100vw"
  },
}));
export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <MainContainer>
          <Grid
            container
            component="main"
            spacing={2}
            sx={{ "@media(max-width:768px)": { height: "100vh" } }}
          >
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              sx={{ backgroundColor: "#C4C4C459" }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  "@media(max-width:768px)": {
                    my: 8,
                    mx: 6,
                    ml: 2,
                  },
                  "@media(max-width:360px)": {
                    my: 4,
                    mx: 6,
                    ml: 2,
                  },
                  "@media(max-width:375px)": {
                    my: -3,
                    mx: 6,
                    ml: 2,
                  },
                }}
              >
                <TitleHead>DEVGENIE</TitleHead>
                <TitleDesc>
                  Build your own project with ease with Devgenie.
                </TitleDesc>
              </Box>
              <Box
                sx={{
                  my: 6,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "@media(max-width:600px)": {
                    my: 5,
                    mx: 6,
                    ml: 2,
                  },
                }}
              >
                <SignInText>Sign In</SignInText>
                <Box component="form" sx={{ mt: 3, alignItems: "center" }}>
                  <SignButtons>Sign in with Google</SignButtons>
                  <SignButtons>Sign in with LinkedIn</SignButtons>
                  <Typography
                    variant="body1"
                    sx={{ my: 2, textAlign: "center" }}
                  >
                    <span
                      style={{
                        width: "100%",
                        paddingBottom: "15px",
                      }}
                    >
                      or
                    </span>
                    <br />
                  </Typography>
                  <ResponsiveBox>
                    <span
                      style={{
                        display: "inline-block",
                        position: "relative",
                        borderBottom: "1px solid",
                        width: "25%",
                      }}
                    ></span>
                    <span
                      style={{
                        display: "inline-block",
                        position: "relative",
                        margin: "0 10px",
                      }}
                    >
                      Create a new account
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        position: "relative",
                        borderBottom: "1px solid",
                        width: "25%",
                      }}
                    ></span>
                  </ResponsiveBox>

                  <SignButtons>Create Account</SignButtons>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: `url('/SignupImg.svg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "right",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media(max-width:768px)": {
                  display: "none",
                },
              }}
            >
              <Box sx={{ pl: 10 }}>
                <TitleOnboard>Onboarding</TitleOnboard>
              </Box>
            </Grid>
          </Grid>
        </MainContainer>
      </Container>
    </ThemeProvider>
  );
}
