import { Box, Container, Grid } from "@mui/material";
import { AboutHead, ContainerWrapper } from "../../common/Home/ContainerPage";
import { Header, HeaderText, SubHeader } from "../../common/Home/TyposPage";
import { ServiceData } from "./Data";
import { Fade } from "react-awesome-reveal";

export default function ServicesPage({ theme, mode }: any) {
  return (
    <ContainerWrapper>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>
            <Fade direction="up" cascade damping={1}>
              <AboutHead>
                <Header sx={{
                  color:
                    mode === "light"
                      ? "rgba(0, 0, 0, 0.90)"
                      : "rgba(255, 255, 255, 0.90)",
                }}>DEVGENI FOR YOU? YES!</Header>
                <HeaderText sx={{
                  color:
                    mode === "light"
                      ? "rgba(0, 0, 0, 0.90)"
                      : "#A2A2A2"
                }}>
                  Companies and individuals looking to hire top-tier developers
                  can rely on DevGeni for
                </HeaderText>
              </AboutHead>
            </Fade>
          </Grid>
          <Grid container rowSpacing={6} columnSpacing={12}>
            {ServiceData.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Fade cascade damping={0.1} direction="up">
                  <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      width={120}
                      height={120}
                    />
                    <Box sx={{ ml: 2 }}>
                      <SubHeader sx={{
                  color:
                    mode === "light"
                      ? "#05060c"
                      : "#fff",
                }}>{item.title}</SubHeader>
                      <HeaderText sx={{ fontSize: "0.9rem" }}>
                        {item.description}
                      </HeaderText>
                    </Box>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </ContainerWrapper>
  );
}
