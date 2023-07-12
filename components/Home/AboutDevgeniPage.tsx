import { Box, Container, Grid } from "@mui/material";
import * as React from "react";
import { AboutHeader, AboutText } from "../../common/Home/TyposPage";
import { HeroButton } from "../../common/Home/ButtonsPage";
import Image from "next/image";

export default function AboutDevgeni() {
  return (
    <Box sx={{ mt: { xs: "40px", md: "10px" } }}>
      <Container maxWidth="xl">
        <Box sx={{ my: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignContent: "center", flexDirection: "column", justifyContent: "center", height: "100%"}}>
                <Box>
                  <AboutHeader>What is DevGEni?</AboutHeader>
                </Box>
                <Box>
                  <AboutText>
                    We make your work easier by guiding you in choosing the
                    products and tech stack that best fit your needs. By
                    browsing through DevGeni, you gain insights into the skills,
                    past projects, and expertise of developers proficient in
                    various tech stacks.
                  </AboutText>
                </Box>
                <Box marginY={3}>
                  <HeroButton>Learn More</HeroButton>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} md={8} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Image
                src="Rectangle25.svg"
                height={500}
                width={1000}
                alt="video"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
