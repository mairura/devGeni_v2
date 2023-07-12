import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { InBoxCardProps } from "@/types";
import { ChatContainer, ProfileContainer } from "../Containers";
import { TextBox } from "../../Buttons";

export default function InBoxCard({ time }: InBoxCardProps) {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      component={Paper}
      sx={{
        borderRadius: "10px",
        width: "100%",
        marginLeft: "1rem",
        "@media(max-width:768px)": { margin: "1rem 0" },
      }}
    >
      <Box sx={{ py: 1 }}>
        <ProfileContainer sx={{ px: 2, pt: 2 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: "1rem", fontFamily: "Manrope", color: "#000" }}
          >
            Inbox
          </Typography>
          <TextBox
            variant="text"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            sx={{ fontSize: "0.625rem", fontFamily: "Manrope", color: "#000" }}
          >
            Full inbox
          </TextBox>
        </ProfileContainer>
        <Divider />
        {[...Array(4)].map((_, index) => (
          <Box
            key={index}
            sx={{
              flexGrow: 1,
              pl: 3,
              pt: 2,
              pr: 2,
              pb: 2,
            }}
          >
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Avatar
                alt="Jay Soita"
                src="/ProfilePic.svg"
                sx={{
                  width: 40,
                  height: 40,
                  boxShadow: "0 0 3px #00000040, 0 0 0 6px #C1F8FC",
                }}
              />
              <ChatContainer>
                <ProfileContainer>
                  <Typography variant="subtitle1">
                    <strong
                      style={{
                        color: "333",
                        fontSize: "1rem",
                        fontFamily: "Manrope",
                        fontWeight: 600,
                      }}
                    >
                      Jay Soita
                    </strong>
                  </Typography>
                  <Typography variant="body2">{time}</Typography>
                </ProfileContainer>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6F6F6F",
                    fontSize: "0.625rem",
                    fontFamily: "Manrope",
                  }}
                >
                  Hello, we are still on for the meeting at 3pm.
                </Typography>
              </ChatContainer>
            </Stack>
          </Box>
        ))}
      </Box>
    </Grid>
  );
}
