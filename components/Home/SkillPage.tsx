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
import { SkillsBtn } from "../../common/Home/ButtonsPage";

const SkillPage = () => {
  return (
    <Box sx={{ mb: 12 }}>
      <Container maxWidth="xl">
        <SkillContainer sx={{ my: 6, pl: 6, py: 6 }}>
          <Box>
            <Box >
              <SkillsHeader>
                DevGeni for Developers &nbsp;
                <ChevronRightIcon style={{ color: "#99E493" }} />{" "}
              </SkillsHeader>
            </Box>
            <SkillsTitle>Put your development skills to work</SkillsTitle>
            <SkillsSubTitle>
              Sign in and create your developer profile. A good developer
              profile increases your chance to be matched for a project.
            </SkillsSubTitle>
            <SkillsBtn>Learn More</SkillsBtn>
            
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            className="filter-container"
          >
            <div className="overlay"></div>
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
        </SkillContainer>
          {/* <Box sx={{ height: "20vh", background: "#fff", width: "100vw"}}></Box> */}
      </Container>
    </Box>
  );
};

export default SkillPage;
