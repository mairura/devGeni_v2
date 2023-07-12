import { Box, Container, Grid } from "@mui/material";
import { AboutHead, ContainerWrapper } from "../../common/Home/ContainerPage";
import { Header, HeaderText, SubHeader } from "../../common/Home/TyposPage";
import { ServiceData } from "./Data";

export default function ServicesPage() {
  return (
    <ContainerWrapper>
      <Container maxWidth="xl">
        <Grid container xs={12}>
          <Grid item xs={12}>
            <AboutHead>
                <Header>DEVGENI FOR YOU? YES!</Header>
                <HeaderText>
                  Companies and individuals looking to hire top-tier developers
                  can rely on DevGeni for
                </HeaderText>
            </AboutHead>
          </Grid>
          <Grid container rowSpacing={6} columnSpacing={12}>
            {ServiceData.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    width={120}
                    height={120}
                  />
                  <Box sx={{ ml: 2 }}>
                    <SubHeader>{item.title}</SubHeader>
                    <HeaderText sx={{ fontSize: "0.9rem" }}>
                      {item.description}
                    </HeaderText>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </ContainerWrapper>
  );
}
