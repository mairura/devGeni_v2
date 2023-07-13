import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import NavbarPage from "../../../components/Home/NavbarPage";
import Image from "next/image";
import {
  HeroButtons,
  HeroContainer,
  HeroSection,
} from "../../../common/Home/ContainerPage";
import { DevGeniText, HeroText, HeroTitle } from "../../../common/Home/TyposPage";
import { HeroButton } from "../../../common/Home/ButtonsPage";
import { useRouter } from "next/router";
import FooterPage from "../../../components/Home/FooterPage";
import { ProjectData } from "../../../components/Home/Data";

const index = () => {
  const router = useRouter();
  return (
    <Box>
      <NavbarPage />
      <Box sx={{ background: "#000F08" }}>
        <Container maxWidth="xl">
          <HeroContainer>
            <HeroSection>
              <HeroTitle>
                Get started and <span style={{ color: "#29CC7A" }}>build</span>{" "}
                projects easily on
                <span style={{ color: "#29CC7A" }}><br /> DevGeni</span>{" "}
              </HeroTitle>
              <HeroText sx={{ pt: 2, pb: 8 }}>
                Access individual talent, innovative developer teams and
                all-inclusive technology services that can scale to meet your
                specific needs
              </HeroText>
              <HeroButtons>
                <HeroButton>Sign In with google</HeroButton>
                <HeroButton>Sign In with linkedin</HeroButton>
              </HeroButtons>
            </HeroSection>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Image
                src="/graphic_techie.png"
                height={700}
                width={700}
                alt="heroImage"
                style={{ margin: "10px 0 0 -150px" }}
              />
            </Box>
          </HeroContainer>
          <Box sx={{ pt: 10 }}>
          <Container maxWidth="xl">
            <Grid item container spacing={1}>
              <Grid item xs={12} md={5}>
                <DevGeniText sx={{ px: 4, pb: 4 }}>
                  Devgeni will help you design, <br /> develop and deliver
                  projects
                  <br />
                  easily and fast.
                </DevGeniText>
              </Grid>
              <Grid item xs={12} md={7} marginY={2}>
                <Stack direction="row" spacing={2} alignItems="center" width="100%">
                  {ProjectData.map(({ src, alt, count, text }) => (
                    <Grid item  xs={12} md={7}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Image src={src} height={36} width={36} alt={alt} />
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
                              color: "rgba(255, 255, 255, 0.40)",
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
          <Box sx={{ height: "100vh" }}></Box>
          <FooterPage />
        </Container>
      </Box>
    </Box>
  );
};

export default index;
