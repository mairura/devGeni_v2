import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import {
  DevGeniText,
  HeroText,
  HeroTitle,
} from "../../../common/Home/TyposPage";
import NavbarPage from "../../../components/Home/NavbarPage";
import { DiscoverHeader } from "../../../common/Home/ContainerPage";
import { ProjectData } from "../../../components/Home/Data";
import Image from "next/image";
import FooterPage from "../../../components/Home/FooterPage";
import Projects from "./projects";
import { Fade } from "react-awesome-reveal";

const discover = () => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <Box>
      <NavbarPage theme={theme} colorMode={colorMode} mode={mode} />
      <Box sx={{ background: mode==="light"?"#fff":"#000f08" }}>
        <DiscoverHeader>
          <Fade direction="up" cascade damping={0.5}>
            <HeroTitle sx={{ color: mode === "light" ? "#05060C" : "#fff" }}>
              Where <span style={{ color: "#29CC7A" }}>Clients & DEVS</span>{" "}
              MEET TO CREATE MAGIC
            </HeroTitle>
            <HeroText
              sx={{
                color: mode === "light" ? "#05060C" : "#fff",
              }}
            >
              Access individual talent, innovative developer teams and
              all-inclusive technology services that can scale to meet your
              specific needs
            </HeroText>
          </Fade>
        </DiscoverHeader>
        <Box sx={{ pt: 10 }}>
          <Container maxWidth="xl">
            <Grid item container spacing={1}>
              <Grid item xs={12} md={5}>
                <DevGeniText
                  sx={{
                    px: 4,
                    pb: 4,
                    color: mode === "light" ? "rgba(38, 38, 38, 0.90)" : "#fff",
                  }}
                >
                  Devgeni will help you design, <br /> develop and deliver
                  projects
                  <br />
                  easily and fast.
                </DevGeniText>
              </Grid>
              <Grid item xs={12} md={7} marginY={2}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  width="100%"
                >
                  {ProjectData.map(({ src, alt, count, text }) => (
                    <Grid item xs={12} md={7}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Image src={src} height={36} width={36} alt={alt} />
                        <Box sx={{ ml: 2 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              color:
                                mode === "light"
                                  ? "rgba(38, 38, 38, 0.90)"
                                  : "rgba(255, 255, 255, 0.90)",
                              fontFamily: "Roboto Mono",
                              fontWeight: 500,
                              fontSize: "1.2rem",
                            }}
                          >
                            {count}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "0.75rem",
                              color:
                                mode === "light"
                                  ? "#262626"
                                  : "rgba(255, 255, 255, 0.40)",
                              pt: 1,
                              fontFamily: "Montserrat",
                            }}
                          >
                            {text}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box>
          <Projects mode={mode} />
        </Box>
        <FooterPage mode={mode} />
      </Box>
    </Box>
  );
};

export default discover;
