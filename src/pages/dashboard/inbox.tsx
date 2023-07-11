import React, { useState } from "react";
import { Layout } from "../../../Layout";
import {
  Box,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ChatMessage, ChatTime, Contact, MsgText } from "../../../common/Typos";
import Image from "next/image";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ContactType } from "@/types";

const contacts: ContactType[] = [
  { name: "Notifications", msg: "You have sent an offer to..." },
  { name: "Antonio", msg: "Awesome! 3pm works great", active: true },
  { name: "Phoebe", msg: "You have sent an offer to..." },
  { name: "Wayne", msg: "You have sent an offer to..." },
  { name: "Collins", msg: "You have sent an offer to..." },
  { name: "David", msg: "You have sent an offer to..." },
  { name: "Owen", msg: "You have sent an offer to..." },
  { name: "Henry", msg: "You have sent an offer to..." },
];

const inboxPage = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [openContact, setOpenContact] = useState(true);
  const [openChat, setOpenChat] = useState(false);

  const handleContactClick = () => {
    setOpenChat(true);
    setOpenContact(false);
  };

  const handleBackClick = () => {
    setOpenChat(false);

    setOpenContact(true);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Layout>
        <Box
          sx={{
            marginLeft: "2.25rem",
            mt: "2.25rem",
            borderRadius: "15px",
            "@media(max-width:768px)": {
              m: "1rem 0",
            },
          }}
        >
          {/* Chat title */}
          <Grid
            container
            sx={{
              backgroundColor: "#fff",
              borderBottom: "1px solid rgba(196, 196, 196, 0.35)",
            }}
          >
            <Grid
              item
              xs={3}
              sx={{
                "@media(max-width:768px)": {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                },
              }}
            >
              {isSmallScreen ? (
                <IconButton
                  onClick={handleBackClick}
                  sx={{ display: openContact ? "none" : "block" }}
                >
                  <ArrowBackIcon sx={{ algnSelf: "center" }} />
                </IconButton>
              ) : (
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    p: "1.3rem",
                  }}
                >
                  All Conversations
                </Typography>
              )}
            </Grid>
            <Grid
              item
              xs={openContact && isSmallScreen ? 12 : 9}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "0.8rem",
                borderLeft: "1px solid rgba(196, 196, 196, 0.35)",
              }}
            >
              {openContact && isSmallScreen ? (
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    p: "1.3rem",
                  }}
                >
                  All Conversations
                </Typography>
              ) : (
                <>
                  <Box sx={{ display: "flex", gap: "0.3rem" }}>
                    <Image
                      src={"/ProfilePhoto.svg"}
                      width={48}
                      height={48}
                      alt="Profile Photo"
                    />
                    <Box>
                      <Typography sx={{ fontSize: "20px", fontWeight: 300 }}>
                        {
                          contacts.find((contact) => contact.active)?.name // Get the name of the active contact
                        }
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: 500,
                            color: "#6e6e6e",
                          }}
                        >
                          Active Now
                        </Typography>
                        <Box
                          sx={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "#7a9d00",
                          }}
                        ></Box>
                      </Box>
                    </Box>
                  </Box>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </>
              )}
            </Grid>
          </Grid>

          {/* Chat container */}
          <Grid container component={Paper}>
            <Grid item sm={12} md={3}>
              {/* Contact list */}
              <Stack
                spacing={0.5}
                py={2}
                sx={{
                  backgroundColor: "#F6F5F5",
                  display: "block",
                  "@media(max-width:768px)": {
                    display: openContact ? "block" : "none",
                  },
                }}
                divider={<Divider orientation="horizontal" flexItem />}
              >
                {contacts.map((contact, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: "1rem 0 1rem 1.5rem",
                      backgroundColor:
                        contact.active && !isSmallScreen ? "#fff" : "inherit",
                    }}
                  >
                    <Stack
                      spacing={0.5}
                      direction="row"
                      useFlexGap
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                      onClick={handleContactClick}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Image
                          src={"/dp.svg"}
                          width={44}
                          height={48}
                          alt="Avatar"
                        />
                        <Box>
                          <Contact>{contact.name}</Contact>
                          <MsgText>{contact.msg}</MsgText>
                        </Box>
                      </Box>
                      <Box sx={{ fontSize: "0.75rem", fontWeight: 300 }}>
                        1 hr
                      </Box>
                    </Stack>
                    {/* <Divider /> */}
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Chat messages */}
            <Grid
              item
              sm={12}
              md={9}
              sx={{
                height: "100%",
                "@media(max-width:768px)": {
                  display: openContact ? "none" : "block",
                },
              }}
            >
              <List>
                {/* Outgoing message */}
                <ListItem key="1">
                  <Grid container justifyContent="flex-end">
                    <Grid
                      item
                      sm={10}
                      md={6}
                      sx={{
                        backgroundColor: "#F7FFDA",
                        borderRadius: "15px 15px 0px 15px",
                        padding: "0.4rem",
                      }}
                    >
                      <ChatMessage>
                        Hello, when can we schedule the meeting?
                      </ChatMessage>
                      <ChatTime>12:00 pm</ChatTime>
                    </Grid>
                  </Grid>
                </ListItem>

                {/* Incoming message */}
                <ListItem key="2">
                  <Grid container justifyContent="flex-start">
                    <Grid
                      item
                      sm={10}
                      md={6}
                      sx={{
                        backgroundColor: "#C1F8FC",
                        borderRadius: "15px 15px 15px 0px",
                        padding: "0.4rem",
                      }}
                    >
                      <ChatMessage>
                        Hello Antonio, Yea, let&#39;s schedule it for 3p.m. Can
                        I see the logo too?
                      </ChatMessage>
                      <ChatTime>12:00 pm</ChatTime>
                    </Grid>
                  </Grid>
                </ListItem>

                {/* Outgoing message */}
                <ListItem key="3">
                  <Grid container justifyContent="flex-end">
                    <Grid
                      item
                      sm={10}
                      md={6}
                      sx={{
                        backgroundColor: "#F7FFDA",
                        borderRadius: "15px 15px 0px 15px",
                        padding: "0.4rem",
                      }}
                    >
                      <ChatMessage>
                        Awesome! 3p.m works great. Let me send you an image of
                        the logo.
                      </ChatMessage>
                      <ChatTime>12:00 pm</ChatTime>
                    </Grid>
                  </Grid>
                </ListItem>

                {/* Incoming message */}
                <ListItem key="4">
                  <Grid container justifyContent="flex-start">
                    <Grid
                      item
                      sm={10}
                      md={6}
                      sx={{
                        backgroundColor: "#C1F8FC",
                        borderRadius: "15px 15px 15px 0px",
                        padding: "0.4rem",
                      }}
                    >
                      <ChatMessage>
                        Thank you. I would really appreciate that.
                      </ChatMessage>
                      <ChatTime>12:00 pm</ChatTime>
                    </Grid>
                  </Grid>
                </ListItem>

                <ListItem key="5">
                  <Grid container justifyContent="flex-end">
                    <Grid
                      item
                      sm={10}
                      md={6}
                      sx={{
                        backgroundColor: "#F7FFDA",
                        borderRadius: "15px 15px 0px 15px",
                        padding: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/AILogo.svg"}
                        height={125}
                        width={200}
                        alt="AI Logo"
                      />
                      <ChatTime>12:00 pm</ChatTime>
                    </Grid>
                  </Grid>
                </ListItem>

                <ListItem key="6">
                  <Grid container justifyContent="flex-start">
                    <Grid
                      item
                      sm={10}
                      md={6}
                      sx={{
                        backgroundColor: "#C1F8FC",
                        borderRadius: "15px 15px 15px 0px",
                        padding: "0.4rem",
                      }}
                    >
                      <ChatMessage>
                        Looks good. I will send some iterations on it.
                      </ChatMessage>
                      <ChatTime>12:00 pm</ChatTime>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>

              {/* Input field and send button */}
              <Grid container>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <OutlinedInput
                    id="write-message"
                    placeholder="Write a message"
                    startAdornment={
                      <InputAdornment position="start">
                        <KeyboardVoiceIcon fontSize="small" />
                      </InputAdornment>
                    }
                    endAdornment={
                      <>
                        <InputAdornment position="end">
                          <SentimentSatisfiedOutlinedIcon fontSize="small" />
                        </InputAdornment>
                        <InputAdornment position="end">
                          <AttachFileOutlinedIcon fontSize="small" />
                        </InputAdornment>
                      </>
                    }
                    sx={{
                      px: "0.4rem",
                      backgroundColor: "#efefef",
                      borderRadius: "15px",
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </div>
  );
};

export default inboxPage;
