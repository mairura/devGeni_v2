import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { HeroButtons, HeroContainer, HeroSection } from "../../common/Home/ContainerPage";
import { HeroText, HeroTitle } from "../../common/Home/TyposPage";
import { HeroButton } from "../../common/Home/ButtonsPage";
import { useRouter } from "next/router";

const LandingPage = () => {
  const router = useRouter();

  return (
    <Box>
      <Container maxWidth="xl">
        <HeroContainer>
          <HeroSection>
            <HeroTitle>
              Where <span style={{ color: '#29CC7A' }}>Client & DEVS</span><br /> MEET TO CREATE MAGIC{" "}
            </HeroTitle>
            <HeroText sx={{ pt: 2, pb: 8 }}>
              Access individual talent, innovative developer teams and
              all-inclusive technology services that can scale to meet your
              specific needs
            </HeroText>
            <HeroButtons>
              <HeroButton onClick={() => router.push("/client")}>I am a client</HeroButton>
              <HeroButton onClick={() => router.push("/developer")}>I am a developer</HeroButton>
            </HeroButtons>
          </HeroSection>
          <Box sx={{ display: {xs: "none", md: "flex"}}}>
            <Image
              src="/graphic_techie.png"
              height={700}
              width={700}
              alt="heroImage"
              style={{ margin: '-10px 0 0 -180px' }}
            />
          </Box>
        </HeroContainer>
      </Container>
    </Box>
  );
};

export default LandingPage;
