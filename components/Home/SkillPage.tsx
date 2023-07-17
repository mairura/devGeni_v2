import { Box, Button, Container, Typography, makeStyles } from "@mui/material";
import Image from "next/image";
import React from "react";
import { SkillContainer } from "../../common/Home/ContainerPage";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  SkillsHeader,
  SkillsSubTitle,
  SkillsTitle,
} from "../../common/Home/TyposPage";
import { HeroButton, SkillsBtn } from "../../common/Home/ButtonsPage";
import { Zoom, Fade } from "react-awesome-reveal";

const SkillPage = ({ theme, mode }: any) => {
  return (
    <Box sx={{ mb: 12 }}>
      <Container maxWidth="xl">
        <SkillContainer
          sx={{
            my: 6,
            pl: 6,
            py: 6,
            background: mode === "light" ? "#29cc7a" : "#12201B",
          }}
        >
          <Box>
            <Box>
              <SkillsHeader
                sx={{ color: mode === "light" ? "#000" : "#99E493" }}
              >
                DevGeni for Developers &nbsp;
                <ChevronRightIcon
                  style={{ color: mode === "light" ? "#000" : "#99E493" }}
                />
              </SkillsHeader>
            </Box>
            <Fade direction="up" cascade>
            <SkillsTitle>Put your development skills to work</SkillsTitle>
            <SkillsSubTitle
              sx={{ color: mode === "light" ? "#262626" : "#A2A2A2" }}
            >
              Sign in and create your developer profile. A good developer
              profile increases your chance to be matched for a project.
            </SkillsSubTitle>
            <HeroButton
              sx={{
                color: mode === "light" ? "#fff" : "rgba(255, 255, 255, 0.90)",
                border:
                  mode === "light" ? "1px solid #fff" : "1px solid #65CAAB",
                "&:hover": {
                  color: "#fff",
                  border: "1px solid #fff"
                },
              }}
            >
              Learn More
            </HeroButton>
            </Fade>
            
          </Box>
          <Zoom triggerOnce>
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            className="filter-container"
          >
            
            <Box className="overlay"></Box>
            <Image
              src="/devtoon.svg"
              height={500}
              width={1000}
              alt="image"
              style={{
                margin: "10px 0 0 -500px",
              }}
            />
          </Box>
            </Zoom>
        </SkillContainer>
      </Container>
    </Box>
  );
};

export default SkillPage;
