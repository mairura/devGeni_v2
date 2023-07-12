import {
  Box,
  Checkbox,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import {
  FooterAccounts,
  FooterCheckbox,
  FooterCopyright,
  FooterInputBox,
  FooterSocialAccounts,
  FooterSocialBox,
  FooterSocials,
  SocialIcons,
} from "../../common/Home/ContainerPage";
import {
  FooterCheckboxText,
  FooterSocialHeader,
  FooterSocialText,
  FooterText,
  FooterTextCopright,
  FooterTextTitle,
} from "../../common/Home/TyposPage";
import {
  FooterSocialBtn,
  FooterSubscribeBtn,
} from "../../common/Home/ButtonsPage";
import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { BsDiscord } from "react-icons/bs";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterPage = () => {
  return (
    <Box sx={{ mt: 5}}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FooterSocialBox sx={{ height: { xs: "none", md: "28vh" } }}>
              <FooterSocialText>SUBSCRIBE TO OUR NEWSLETTER</FooterSocialText>
              <FooterSocialHeader>
                Our latest updates, straight to your inbox
              </FooterSocialHeader>
              <FooterInputBox>
                <Box sx={{ mr: {xs: "none", md: "3rem"} }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="hello@devgeni.ai"
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.40)",
                      borderRadius: "8px",
                      padding: "15px 11px",
                      background: "transparent",
                    }}
                    id="myInput"
                  />
                </Box>
                <Box>
                  <FooterSubscribeBtn>Subscribe</FooterSubscribeBtn>
                </Box>
              </FooterInputBox>
              <FooterCheckbox>
                <Checkbox
                  sx={{
                    color: "rgba(255, 255, 255, 0.70)",
                    "&.Mui-checked": {
                      color: "#29CC7A",
                    },
                  }}
                  style={{
                    transform: "scale(1)",
                  }}
                />
                <FooterCheckboxText>
                  By subscribing, you agree to receive our updates via email. To
                  learn more about our privacy practices,visit our Privacy
                  Policy and Terms of Service.
                </FooterCheckboxText>
              </FooterCheckbox>
            </FooterSocialBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <FooterSocialBox sx={{ height: { xs: "none", md: "28vh" } }}>
              <Box sx={{ display: "flex" }}>
                <Box>
                  <FooterSocialText>Join our community</FooterSocialText>
                  <FooterSocialHeader>Follow our Socials!</FooterSocialHeader>
                  <Box>
                    <FooterSocialBtn>
                      <TwitterIcon style={{ fontSize: "15px" }} />
                      &nbsp;Twitter
                    </FooterSocialBtn>
                    <FooterSocialBtn> &nbsp;Discord</FooterSocialBtn>
                    <FooterSocialBtn>
                      <TelegramIcon style={{ fontSize: "15px" }} />
                      &nbsp;Telegram
                    </FooterSocialBtn>
                  </Box>
                </Box>

                <FooterSocialAccounts>
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Image
                      src="/personchilling.svg"
                      height={150}
                      width={300}
                      alt="personchilling"
                      style={{ margin: "44px 0 0 -50px", filter: 'sepia(100%) hue-rotate(180deg) saturate(0%) brightness(150%)' }}
                    />
                  </Box>
                </FooterSocialAccounts>
              </Box>
            </FooterSocialBox>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 3}}>
          <Grid item xs={12} md={6}>
            <Box sx={{}}>
              <Box>
                <Image src="/Devgenie.svg" height={70} width={70} alt="logo" />
              </Box>
              <FooterText>
                DevGeni is an innovative AI-powered online platform that brings
                together freelancers and hirers, providing a seamless
                environment for collaboration on diverse projects.
              </FooterText>
              <FooterText sx={{ py: 2 }}>
                Get Involved on our social media platforms
              </FooterText>
              <FooterSocials>
                <SocialIcons>
                  <TwitterIcon />
                </SocialIcons>
                <SocialIcons>
                  <BsDiscord style={{ fontSize: "20px" }} />
                </SocialIcons>
                <SocialIcons>
                  <TelegramIcon />
                </SocialIcons>
                <SocialIcons>
                  <LinkedInIcon />
                </SocialIcons>
                <SocialIcons>
                  <YouTubeIcon />
                </SocialIcons>
              </FooterSocials>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <FooterAccounts>
              <Box>
                <FooterTextTitle>DISCOVER</FooterTextTitle>
                <FooterText>Projects</FooterText>
                <FooterText>Our Blog</FooterText>
                <FooterText>Tools</FooterText>
                <FooterText>View Stats</FooterText>
              </Box>
              <Box>
                <FooterTextTitle>DEVELOPERS</FooterTextTitle>
                <FooterText>Sign-in</FooterText>
                <FooterText>Documentation</FooterText>
                <FooterText>Dev Community</FooterText>
                <FooterText>API</FooterText>
              </Box>
              <Box>
                <FooterTextTitle>CONTACT</FooterTextTitle>
                <FooterText>FAQs</FooterText>
                <FooterText>Feedback</FooterText>
                <FooterText>Support</FooterText>
                <FooterText>Press</FooterText>
                <FooterText>Partnership</FooterText>
              </Box>
            </FooterAccounts>
          </Grid>

          <Box sx={{ width: "100%", pt: 12, pb: 4 }}>
            <hr className="horizontal" />
          </Box>

          <FooterCopyright>
            <FooterTextCopright>
            &#169; &nbsp;2023 DevGeni
            </FooterTextCopright>
            <Box sx={{ display: "flex"}}>
              <FooterTextCopright>Privacy Policy</FooterTextCopright>
              <FooterTextCopright>Terms of Service</FooterTextCopright>
            </Box>
          </FooterCopyright>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterPage;
