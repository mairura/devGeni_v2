import { Box, Checkbox, Container, Divider, Grid } from "@mui/material";
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
import { Zoom, Fade } from "react-awesome-reveal";

const FooterPage = ({ theme, mode }: any) => {
  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FooterSocialBox
              sx={{
                height: { xs: "none", md: "28vh" },
                background:
                  mode === "light" ? "#29cc7a" : "rgba(226, 230, 247, 0.08)",
              }}
            >
              <FooterSocialText
                sx={{
                  color:
                    mode === "light" ? "#000" : "rgba(255, 255, 255, 0.70)",
                }}
              >
                SUBSCRIBE TO OUR NEWSLETTER
              </FooterSocialText>
              {/* <Fade direction="up">
                <Zoom> */}
                  <FooterSocialHeader
                    sx={{
                      color:
                        mode === "light"
                          ? "#3d3d3d"
                          : "rgba(255, 255, 255, 0.90)",
                    }}
                  >
                    Our latest updates, straight to your inbox
                  </FooterSocialHeader>
                  <FooterInputBox>
                    <Box sx={{ mr: { xs: "none", md: "3rem" } }}>
                      <input
                        type="email"
                        name="email"
                        placeholder="hello@devgeni.ai"
                        style={{
                          border: "2px solid rgba(255, 255, 255, 0.40)",
                          borderRadius: "8px",
                          padding: "15px 11px",
                          background: "transparent",
                        }}
                        id="myInput"
                      />
                    </Box>
                    <Box>
                      <FooterSubscribeBtn
                        sx={{
                          border:
                            mode === "light"
                              ? "1px solid #fff"
                              : "1px solid #29CC7A",
                        }}
                      >
                        Subscribe
                      </FooterSubscribeBtn>
                    </Box>
                  </FooterInputBox>
                  <FooterCheckbox>
                    <Checkbox
                      sx={{
                        color:
                          mode === "light"
                            ? "#000"
                            : "rgba(255, 255, 255, 0.70)",
                        "&.Mui-checked": {
                          color: "#29cc7a",
                        },
                      }}
                      style={{
                        transform: "scale(1)",
                      }}
                    />
                    <FooterCheckboxText
                      sx={{
                        color:
                          mode === "light"
                            ? "#05060c"
                            : "rgba(255, 255, 255, 0.70)",
                      }}
                    >
                      By subscribing, you agree to receive our updates via
                      email. To learn more about our privacy practices,visit our
                      Privacy Policy and Terms of Service.
                    </FooterCheckboxText>
                  </FooterCheckbox>
                {/* </Zoom>
              </Fade> */}
            </FooterSocialBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <FooterSocialBox
              sx={{
                height: { xs: "none", md: "28vh" },
                background:
                  mode === "light" ? "#29cc7a" : "rgba(226, 230, 247, 0.08)",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box>
                  <FooterSocialText
                    sx={{
                      color:
                        mode === "light" ? "#000" : "rgba(255, 255, 255, 0.70)",
                    }}
                  >
                    Join our community
                  </FooterSocialText>
                  <FooterSocialHeader
                    sx={{
                      color:
                        mode === "light"
                          ? "#3d3d3d"
                          : "rgba(255, 255, 255, 0.90)",
                    }}
                  >
                    Follow our Socials!
                  </FooterSocialHeader>
                  <Box>
                    <FooterSocialBtn
                      sx={{
                        border:
                          mode === "light"
                            ? "2px solid #fff"
                            : "2px solid rgba(255, 255, 255, 0.40)",
                      }}
                    >
                        <TwitterIcon style={{ fontSize: "15px" }} />
                        &nbsp;Twitter
                    </FooterSocialBtn>

                    <FooterSocialBtn
                      sx={{
                        border:
                          mode === "light"
                            ? "2px solid #fff"
                            : "2px solid rgba(255, 255, 255, 0.40)",
                      }}
                    >
                      {" "}
                      &nbsp;Discord
                    </FooterSocialBtn>
                    <FooterSocialBtn
                      sx={{
                        border:
                          mode === "light"
                            ? "2px solid #fff"
                            : "2px solid rgba(255, 255, 255, 0.40)",
                      }}
                    >
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
                      style={{
                        margin: "44px 0 0 -50px",
                        filter:
                          "sepia(100%) hue-rotate(180deg) saturate(0%) brightness(150%)",
                      }}
                    />
                  </Box>
                </FooterSocialAccounts>
              </Box>
            </FooterSocialBox>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{}}>
              <Box>
                <Image src="/Devgenie.svg" height={70} width={70} alt="logo" />
              </Box>
              <Fade direction="up">
                <FooterText
                  sx={{
                    color:
                      mode === "light" ? "#05060C" : "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  DevGeni is an innovative AI-powered online platform that
                  brings together freelancers and hirers, providing a seamless
                  environment for collaboration on diverse projects.
                </FooterText>
                <FooterText
                  sx={{
                    py: 2,
                    color:
                      mode === "light" ? "#000" : "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Get Involved on our social media platforms
                </FooterText>
              </Fade>

              <FooterSocials>
                <SocialIcons>
                  <TwitterIcon
                    sx={{
                      color:
                        mode === "light" ? "#000" : "rgba(255, 255, 255, 0.7)",
                        "&:hover": {
                          color: "#0077B5"
                        }
                    }}
                  />
                </SocialIcons>
                <SocialIcons>
                  <BsDiscord
                    style={{
                      fontSize: "20px",
                      color:
                        mode === "light" ? "#000" : "rgba(255, 255, 255, 0.7)",
                        transition: 'color 0.3s'
                    }}
                  />
                </SocialIcons>
                <SocialIcons>
                  <TelegramIcon
                    sx={{
                      color:
                        mode === "light" ? "#000" : "rgba(255, 255, 255, 0.7)",
                        "&:hover": {
                          color: "#0077B5"
                        }
                    }}
                  />
                </SocialIcons>
                <SocialIcons>
                  <LinkedInIcon
                    sx={{
                      color:
                        mode === "light" ? "#000" : "rgba(255, 255, 255, 0.7)",
                        "&:hover": {
                          color: "#0077B5"
                        }
                    }}
                  />
                </SocialIcons>
                <SocialIcons>
                  <YouTubeIcon
                    sx={{
                      color:
                        mode === "light" ? "#000" : "rgba(255, 255, 255, 0.7)",
                        "&:hover": {
                          color: "red"
                        }
                    }}
                  />
                </SocialIcons>
              </FooterSocials>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <FooterAccounts>
              <Box
                sx={{
                  color:
                    mode === "light" ? "#000" : "rgba(255, 255, 255, 0.70)",
                }}
              >
                <Fade direction="up">
                  <Zoom>
                    <FooterTextTitle
                      sx={{
                        color:
                          mode === "light"
                            ? "#05060C"
                            : "rgba(255, 255, 255, 0.90)",
                      }}
                    >
                      DISCOVER
                    </FooterTextTitle>
                    <FooterText>Projects</FooterText>
                    <FooterText>Our Blog</FooterText>
                    <FooterText>Tools</FooterText>
                    <FooterText>View Stats</FooterText>
                  </Zoom>
                </Fade>
              </Box>
              <Box
                sx={{
                  color:
                    mode === "light" ? "#000" : "rgba(255, 255, 255, 0.70)",
                }}
              >
                <Fade direction="up">
                  <Zoom>
                    <FooterTextTitle
                      sx={{
                        color:
                          mode === "light"
                            ? "#05060C"
                            : "rgba(255, 255, 255, 0.90)",
                      }}
                    >
                      DEVELOPERS
                    </FooterTextTitle>
                    <FooterText>Sign-in</FooterText>
                    <FooterText>Documentation</FooterText>
                    <FooterText>Dev Community</FooterText>
                    <FooterText>API</FooterText>
                  </Zoom>
                </Fade>
              </Box>
              <Box
                sx={{
                  color:
                    mode === "light" ? "#000" : "rgba(255, 255, 255, 0.70)",
                }}
              >
                <Fade direction="up">
                  <Zoom>
                    <FooterTextTitle
                      sx={{
                        color:
                          mode === "light"
                            ? "#05060C"
                            : "rgba(255, 255, 255, 0.90)",
                      }}
                    >
                      CONTACT
                    </FooterTextTitle>
                    <FooterText>FAQs</FooterText>
                    <FooterText>Feedback</FooterText>
                    <FooterText>Support</FooterText>
                    <FooterText>Press</FooterText>
                    <FooterText>Partnership</FooterText>
                  </Zoom>
                </Fade>
              </Box>
            </FooterAccounts>
          </Grid>

          <Box sx={{ width: "100%", pt: 12, pb: 4 }}>
            <Divider flexItem light />
          </Box>

          <FooterCopyright>
            <FooterTextCopright
              sx={{
                color:
                  mode === "light" ? "#05060c" : "rgba(255, 255, 255, 0.70)",
              }}
            >
              &#169; &nbsp;2023 DevGeni
            </FooterTextCopright>
            <Box sx={{ display: "flex" }}>
              <FooterTextCopright
                sx={{
                  color:
                    mode === "light" ? "#05060c" : "rgba(255, 255, 255, 0.70)",
                }}
              >
                Privacy Policy
              </FooterTextCopright>
              <FooterTextCopright
                sx={{
                  color:
                    mode === "light" ? "#05060c" : "rgba(255, 255, 255, 0.70)",
                }}
              >
                Terms of Service
              </FooterTextCopright>
            </Box>
          </FooterCopyright>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterPage;
