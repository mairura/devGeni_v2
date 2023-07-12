import * as React from "react";
import { BuildTitleBox, ContainerWrapper, FlexEndBox } from "../../common/Home/ContainerPage";
import { Box, Container, Grid } from "@mui/material";
import {
  IntroText,
  LinkLabel,
  SubTitle,
} from "../../common/Home/TyposPage";
import { ArrowForwardIos } from "@mui/icons-material";
import { HeroButton1 } from "../../common/Home/ButtonsPage";
import Image from "next/image";

export default function BuildPage() {
  return (
    <ContainerWrapper>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Box
              paddingY={5}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <LinkLabel>DevGEni for clients</LinkLabel>
              <Box sx={{ ml: 1 }}>
                <ArrowForwardIos fontSize="small" sx={{ color: "#29CC7A" }} />
              </Box>
            </Box>
            <BuildTitleBox>
              <SubTitle>BUILD YOUR PROJECT</SubTitle>
              <IntroText>
                Find the perfect match for your project requirements and tap
                into expertise from various domains and programming languages.
              </IntroText>
            </BuildTitleBox>
            <Box sx={{ marginTop: "-1.2rem" }}>
              <HeroButton1>Learn More</HeroButton1>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{ display: { xs: "none", md: "block" }, pt: 10 }}
          >
            <FlexEndBox>
              <Image src="/Grow.svg" height={600} width={600} alt="image" />
            </FlexEndBox>
          </Grid>
        </Grid>
      </Container>
    </ContainerWrapper>
  );
}
