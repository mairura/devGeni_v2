import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  LogoContainer,
  PartnerHeader,
} from "../../common/Home/ContainerPage";
import { PartnersText } from "../../common/Home/TyposPage";

const PartnersPage = () => {
  return (
    <Box sx={{ mt: { xs: "40px", md: "10px" } }}>
      <Container maxWidth="xl">
        <PartnerHeader>
          <PartnersText>Partners</PartnersText>
        </PartnerHeader>
        <LogoContainer>
          <Box>
            <Image src="/vr.svg" height={150} width={150} alt="logo" />
          </Box>
          <Box>
            <Image
              src="/minitradelogo.svg"
              height={150}
              width={150}
              alt="logo"
            />
          </Box>
          <Box>
            <Image src="/nstarlogo.svg" height={150} width={150} alt="logo" />
          </Box>
          <Box>
            <Image src="/wdw3logo.svg" height={150} width={150} alt="logo" />
          </Box>
          <Box>
            <Image src="/nstarlogo.svg" height={150} width={150} alt="logo" />
          </Box>
          <Box>
            <Image src="/wdw3logo.svg" height={150} width={150} alt="logo" />
          </Box>
          <Box>
            <Image src="/vr.svg" height={150} width={150} alt="logo" />
          </Box>
          <Box>
            <Image
              src="/minitradelogo.svg"
              height={150}
              width={150}
              alt="logo"
            />
          </Box>
        </LogoContainer>
      </Container>
    </Box>
  );
};

export default PartnersPage;
