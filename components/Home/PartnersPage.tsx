import { Box, Container, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import { LogoContainer, PartnerHeader } from "../../common/Home/ContainerPage";
import { PartnersText } from "../../common/Home/TyposPage";

const PartnersPage = ({ theme, mode }: any) => {
  const PartnersLogo = [
    // {
    //   id: 1,
    //   image: "/nstarlogo.svg",
    // },
    {
      id: 2,
      image: "/wdw3logo.svg",
    },
    {
      id: 3,
      image: "/vr.svg",
    },
    ,
    {
      id: 4,
      image: "/minitradelogo.svg",
    },
    {
      id: 5,
      image: "/wdw3logo.svg",
    },
    {
      id: 6,
      image: "/vr.svg",
    },
  ];

  const PartnerImage = styled(Box)`
    width: max-content;
    padding-top: 40px;
    @media (max-width: 769px) {
      img {
        width: 80%;
        height: 80%;
      }
    }
  `;

  const PartnerCard = styled(Box)`
    padding: 0 100px;
    overflow: hidden;
    width: 100%;
    img {
      width: 90%;
      height: 90%;
    }
  `;

  const AnimatedElement = styled(Box)`
  display: inline-flex;
  justify-content: space-evenly;
  text-align: center;
  z-index: 1;
  white-space: nowrap;
  align-items: center;
  min-width: 200%;
  overflow: hidden;
  gap: 2rem;
  position: relative;

  animation: scroll 30s linear infinite;

  @media (max-width: 768px) {
    height: max-content;
    gap: 1rem;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;
  const renderMarquee = () => {
    return PartnersLogo.map((item: any, index) => (
      <PartnerImage key={index}>
        <Image src={item.image} alt={`carousel-image-${index}`} height={150} width={150} />
      </PartnerImage>
    ));
  };

  return (
    <Box
      sx={{
        mt: { xs: "40px", md: "-80px" },
      }}
    >
      <Container maxWidth="xl">
        <PartnerHeader>
          <PartnersText sx={{ color: mode === "light" ? "#05060c" : "#fff" }}>
            Partners
          </PartnersText>
        </PartnerHeader>
        <LogoContainer>
          <PartnerCard>
            <AnimatedElement>
              {renderMarquee()}
              {renderMarquee()}
            </AnimatedElement>
          </PartnerCard>
        </LogoContainer>
      </Container>
    </Box>
  );
};

export default PartnersPage;
