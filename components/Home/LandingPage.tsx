import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  HeroButtons,
  HeroContainer,
  HeroSection,
} from "../../common/Home/ContainerPage";
import { HeroText, HeroTitle } from "../../common/Home/TyposPage";
import { HeroButton } from "../../common/Home/ButtonsPage";
import { useRouter } from "next/router";
import { Fade, Zoom } from "react-awesome-reveal";

const LandingPage = ({ theme, mode }: any) => {
  const router = useRouter();

  return (
    <Box>
      <Container maxWidth="xl">
        <HeroContainer>
          <HeroSection>
            <Fade direction="up" cascade damping={0.5}>
              <HeroTitle sx={{ color: mode === "light" ? "#05060C" : "#fff" }}>
                Where <span style={{ color: "#29CC7A" }}>Client & DEVS</span>
                <br /> MEET TO CREATE MAGIC{" "}
              </HeroTitle>
              <HeroText
                sx={{
                  pt: 2,
                  pb: 8,
                  color: mode === "light" ? "#05060C" : "#fff",
                }}
              >
                Access individual talent, innovative developer teams and
                all-inclusive technology services that can scale to meet your
                specific needs
              </HeroText>
              <HeroButtons>
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
                  onClick={() => router.push("/client")}
                >
                  I am a client
                </HeroButton>
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
                  onClick={() => router.push("/developer")}
                >
                  I am a developer
                </HeroButton>
              </HeroButtons>
            </Fade>
          </HeroSection>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Zoom triggerOnce>
              <Image
                src="/graphic_techie.png"
                height={750}
                width={750}
                alt="heroImage"
                style={{ margin: "-10px 0 0 -180px" }}
              />
            </Zoom>
          </Box>
        </HeroContainer>
      </Container>
    </Box>
  );
};

export default LandingPage;
