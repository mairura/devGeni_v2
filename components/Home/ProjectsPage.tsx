import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  ContainerWrapper,
  FlexEndBox,
  HeroContainer,
} from "../../common/Home/ContainerPage";
import { DevGeniText, PartnersText } from "../../common/Home/TyposPage";
import { ArrowForwardIos } from "@mui/icons-material";
import { ProjectData } from "./Data";
import { AboutGrid } from "../../common/Home/GridPages";

export default function ProjectsPage() {
  return (
    <ContainerWrapper>
      <Container maxWidth="xl">
        <HeroContainer sx={{ pt: 5 }}>
          <Grid container spacing={1}>
            <Grid item xs={8} md={8}>
              <PartnersText>
                Take a look at projects completed at DevGEni
              </PartnersText>
            </Grid>
            <Grid item xs={4} md={4}>
              <FlexEndBox>
                <PartnersText>
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

            <Grid item xs={12} md={6}>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Image
                  src="/Link.svg"
                  height={350}
                  width={700}
                  alt="Potara App"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Image
                  src="/Proxy.svg"
                  height={350}
                  width={700}
                  alt="Diani App"
                />
              </Box>
            </Grid>

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
              <AboutGrid item xs={12}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid item container spacing={2}>
                    <Grid item xs={12} md={5}>
                      <DevGeniText sx={{ p: 4 }}>
                        Devgeni will help you design,
                        <br /> develop and deliver projects
                        <br /> easily and fast.
                      </DevGeniText>
                    </Grid>
                    <Grid item xs={12} md={7} marginY={2}>
                      <Stack direction="row" spacing={2}>
                        {ProjectData.map(({ src, alt, count, text }, index) => (
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
                                  sx={{ fontSize: "0.75rem", opacity: "40%" }}
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
                </Box>
              </AboutGrid>
            </Grid>
          </Grid>
        </HeroContainer>
      </Container>
    </ContainerWrapper>
  );
}
