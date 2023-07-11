import { Box, Typography } from "@mui/material";
import React from "react";
import { ProjectContainer } from "../Containers";
import { CardHeading } from "../Typos";
import Image from "next/image";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";

function ProjectCard() {
  return (
    <ProjectContainer>
      <CardHeading>Diani App</CardHeading>
      <Image
        src={"/DianiApp.svg"}
        width={224}
        height={120}
        alt="Diani App"
        style={{ borderRadius: "5px", marginTop: "0.25rem" }}
      />
      <Box>
        <Typography
          sx={{
            color: "#031926",
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: "16.65px",
          }}
        >
          A crypto trading app. Allows staking, spot and p2p. A crypto trading
          app. Allows staking, spot and p2p.
        </Typography>
        <Box
          sx={{ display: "flex", gap: 1, mt: 1, justifyContent: "flex-end" }}
        >
          <Box
            sx={{
              fontSize: "10px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Groups2OutlinedIcon sx={{ fontSize: "15px" }} />5
          </Box>
          <Box
            sx={{
              fontSize: "10px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <FolderCopyOutlinedIcon sx={{ fontSize: "15px" }} />4
          </Box>
        </Box>
      </Box>
    </ProjectContainer>
  );
}

export default ProjectCard;
