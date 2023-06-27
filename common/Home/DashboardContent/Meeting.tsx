import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { SectionHeading } from "../../Typos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Image from "next/image";

function Meeting() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        minHeight: "100%",
        borderRadius: "10px",
        fontFamily: "Manrope",
        marginLeft: isMobile ? "0" : "1rem",
        "@media(max-width:768px)": { marginTop: "1rem" },
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
        <SectionHeading>Upcoming Meeting</SectionHeading>
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
          All Meetings
        </Button>
      </Box>
      <Divider />
      <Box
        sx={{
          mt: "1rem",
          pr: 2,
          pl: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontFamily: "Manrope",
            "@media(max-width:768px)": { fontSize: "1rem" },
          }}
        >
          User Authentication Demo
        </Typography>
        <Typography
          sx={{
            fontSize: "0.875rem",
            fontFamily: "Manrope",
          }}
        >
          Showcase user onboarding journey
        </Typography>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#efefef",
            fontSize: "1rem",
            justifyContent: "space-between",
            mt: "2rem",
            py: 1,
            px: 2,
            borderRadius: "5px",
            alignItems: "center",
          }}
        >
          <AccessTimeIcon />
          1500hrs - 1600hrs
          <MoreVertIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#efefef",
            fontSize: "1rem",
            justifyContent: "space-between",
            mt: "2rem",
            py: 1,
            px: 2,
            borderRadius: "5px",
            alignItems: "center",
          }}
        >
          <EventOutlinedIcon />
          Wednesday, 14 June
          <MoreVertIcon />
        </Box>

        <Box
          sx={{
            display: "flex",
            mt: "2.25rem",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ fontSize: "1rem", fontWeight: 700 }}>
            Participants
            <Box sx={{ display: "flex", pt: "1rem" }}>
              <Image
                src={"/Dev1.svg"}
                width={36}
                height={36}
                alt="Participant"
                style={{ borderRadius: "50%" }}
              />
              <Image
                src={"/Dev2.svg"}
                width={36}
                height={36}
                alt="Participant"
                style={{ borderRadius: "50%" }}
              />
              <Image
                src={"/Dev3.svg"}
                width={36}
                height={36}
                alt="Participant"
                style={{ borderRadius: "50%" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              fontSize: "1rem",
              fontWeight: 700,
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <ShareOutlinedIcon />
            Share Link
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default Meeting;
