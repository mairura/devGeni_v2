import { Container, Grid } from "@mui/material";
import * as React from "react";
import ProjectSummary from "./ProjectSummary";
import Projects from "./Projects";
import InBoxCard from "./InBox";
import Meeting from "./Meeting";

export default function DashboardContent() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        "@media(max-width:768px)": {
          padding: "0",
          margin: "0",
          width: "100vw",
        },
        height: "90%",
        width: "100%",
        pt: 6,
        ml: 5,
      }}
    >
      {/* <DashboardContainer> */}
      <Grid container component="main">
        <ProjectSummary />
        <InBoxCard time="2hrs ago" />
      </Grid>
      <Grid container component="main" sx={{ mt: 2 }}>
        <Projects />
        <Meeting />
      </Grid>
    </Container>
  );
}
