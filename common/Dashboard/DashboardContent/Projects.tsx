import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { SectionHeading } from "../../Typos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProjectCard from "../ProjectCard";

function Projects() {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={7}
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        minHeight: "100%",
        borderRadius: "10px",
        fontFamily: "Manrope",
        height: "43vh",
        mr: 3,
      }}
      component={Paper}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mx: 2,
          justifyContent: "space-between",
        }}
      >
        <SectionHeading>Projects</SectionHeading>
        <Button
          variant="text"
          sx={{
            textTransform: "capitalize",
            fontWeight: 400,
            fontSize: "10px",
            color: "#000",
          }}
          endIcon={<ArrowForwardIcon fontSize="small" />}
        >
          All Projects
        </Button>
      </Box>
      <Divider />
      <Box
        sx={{
          mt: "1.5rem",
          mx: 2,
          display: "flex",
          flexWrap: "no-wrap",
          overflow: "auto",
          paddingBottom: "1rem",
        }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Box>
    </Grid>
  );
}

export default Projects;
