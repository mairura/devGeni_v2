import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  ContainerWrapper,
  Dot,
  DotsContainer,
  FlexEndBox,
  HeroContainer,
} from "../../common/Home/ContainerPage";
import { DevGeniText, PartnersText } from "../../common/Home/TyposPage";
import { ArrowForwardIos } from "@mui/icons-material";
import { ProjectData, ProjectImages } from "./Data";
import { AboutGrid } from "../../common/Home/GridPages";
import { Fade } from "react-awesome-reveal";

export default function ProjectsPage({ theme, mode }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === ProjectImages.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ContainerWrapper>
      <Container maxWidth="xl">
        <HeroContainer sx={{ pt: 5 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={8}>
              <PartnersText
                sx={{ color: mode === "light" ? "#05060c" : "#fff" }}
              >
                Take a look at projects completed at DevGEni
              </PartnersText>
            </Grid>
            <Grid item xs={12} md={4}>
              <FlexEndBox>
                <PartnersText
                  sx={{ color: mode === "light" ? "#262626" : "#fff" }}
                >
                  Discover{" "}
                  <span
                    style={{
                      color: "#29CC7A",
                      fontFamily: "Roboto Mono",
                      cursor: "pointer",
                    }}
                  >
                    More
                  </span>
                </PartnersText>
                &nbsp;&nbsp;
                <ArrowForwardIos
                  fontSize="small"
                  sx={{
                    color: "#29CC7A",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                />
              </FlexEndBox>
            </Grid>

            {/* Carousel Goes Here */}
            <Grid
              item
              xs={12}
              sx={{  display: {xs: "none", md: "flex"}, flexDirection: "column" }}
            >
              {ProjectImages.map((project, index) => (
                <Box
                  key={index}
                  sx={{
                    display: currentIndex === index ? "flex" : "none",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={project.url}
                    height={350}
                    width={700}
                    alt={project.alt}
                  />
                </Box>
              ))}
              <DotsContainer>
                {ProjectImages.map((_, index) => (
                  <Dot
                    key={index}
                    sx={{
                      width: "10px",
                      backgroundColor: currentIndex === index ? "#29cc7a" : "grey",
                    }}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </DotsContainer>
            </Grid>

            {/* <Grid item xs={12} md={6}>
             <Box sx={{ display: { xs: "none", md: "flex" } }}>
               <Image
                 src="/Proxy.svg"
                 height={350}
                 width={700}
                 alt="Diani App"
               />
             </Box>
           </Grid> */}

            {/* Carousel Goes Here */}

            <Grid item xs={12}>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <Image
                  src="/Link.svg"
                  height={150}
                  width={380}
                  alt="Potara App"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <Image
                  src="/Proxy.svg"
                  height={150}
                  width={380}
                  alt="Diani App"
                />
              </Box>
            </Grid>

            <Grid item container spacing={2}>
              <AboutGrid
                item
                xs={12}
                sx={{
                  backgroundColor: mode === "light" ? "#29cc7a" : "#000A05"
                }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Fade direction="up">
                    <Grid
                      item
                      container
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <Grid item xs={12} md={5}>
                        <DevGeniText sx={{ pb: 4, pl: 3, pt: 2 }}>
                          Devgeni will help you design,
                          <br /> develop and deliver projects
                          <br /> easily and fast.
                        </DevGeniText>
                      </Grid>
                      <Grid item xs={12} md={7} marginY={2}>
                        <Stack direction="row" spacing={2}>
                          {ProjectData.map(
                            ({ src, alt, count, text }, index) => (
                              <Grid item xs={6} md={4} key={index}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <Image
                                    src={src}
                                    height={36}
                                    width={36}
                                    alt={alt}
                                  />
                                  <Box sx={{ ml: 2 }}>
                                    <Typography
                                      variant="h5"
                                      sx={{
                                        color: "rgba(255, 255, 255, 0.90)",
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
                                        color: "rgba(255, 255, 255, 0.80)",
                                      }}
                                    >
                                      {text}
                                    </Typography>
                                  </Box>
                                </Box>
                              </Grid>
                            )
                          )}
                        </Stack>
                      </Grid>
                    </Grid>
                  </Fade>
                </Box>
              </AboutGrid>
            </Grid>
          </Grid>
        </HeroContainer>
      </Container>
    </ContainerWrapper>
  );
}
