import { Box, Container, Grid } from "@mui/material";
import * as React from "react";
import { AboutHeader, AboutText } from "../../common/Home/TyposPage";
import { HeroButton } from "../../common/Home/ButtonsPage";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function AboutDevgeni({ theme, mode }: any) {
  return (
    <Box sx={{ mt: { xs: "40px", md: "10px" } }}>
      <Container maxWidth="xl">
        <Box sx={{ my: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Fade direction="up" cascade>
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Box>
                    <AboutHeader
                      sx={{
                        color:
                          mode === "light"
                            ? "#000"
                            : "#fff",
                      }}
                    >
                      What is DevGEni?
                    </AboutHeader>
                  </Box>
                  <Box>
                    <AboutText   sx={{
                        color:
                          mode === "light"
                            ? "#000"
                            : "#fff",
                      }}>
                      We make your work easier by guiding you in choosing the
                      products and tech stack that best fit your needs. By
                      browsing through DevGeni, you gain insights into the
                      skills, past projects, and expertise of developers
                      proficient in various tech stacks.
                    </AboutText>
                  </Box>
                </Box>
              </Fade>
              <Fade direction="up" cascade>
                <Box marginY={3}>
                  <HeroButton
                    sx={{
                      border:
                        mode === "light"
                          ? "2px solid #29cc7a"
                          : "1px solid #65caab",
                      color:
                        mode === "light"
                          ? "#29cc7a"
                          : "rgba(255, 255, 255, 0.90)",
                      "&:hover": {
                        color: "#fff",
                      },
                    }}
                  >
                    Learn More
                  </HeroButton>
                </Box>
              </Fade>
            </Grid>
            {/* <Grid
              item
              xs={12}
              md={8}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Fade direction="up">
                <Image
                  src="Rectangle25.svg"
                  height={500}
                  width={1000}
                  alt="video"
                />
              </Fade>
            </Grid> */}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
