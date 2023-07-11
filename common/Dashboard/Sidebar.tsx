import { Box, List, Typography } from "@mui/material";
import React, { useState } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { SidebarList } from "../Typos";
import { SidebarMenu } from "../Buttons";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const drawerWidth = 300;

  const router = useRouter();

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        bgcolor: "background.paper",
        width: drawerWidth,
      }}
    >
      <List
        sx={{
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            pt: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginLeft: "3rem",
            }}
          >
            <SidebarMenu onClick={() => router.push("/dashboard")}>
              <HomeOutlinedIcon />
              <SidebarList>Home</SidebarList>
            </SidebarMenu>
            <SidebarMenu onClick={() => router.push("/dashboard/inbox")}>
              <TextsmsOutlinedIcon />
              <SidebarList>Inbox</SidebarList>
            </SidebarMenu>
            <SidebarMenu onClick={() => router.push("/dashboard/meeting")}>
              <VideocamOutlinedIcon />
              <SidebarList>Meeting</SidebarList>
            </SidebarMenu>
            <SidebarMenu onClick={() => router.push("/dashboard/projects")}>
              <FormatListBulletedOutlinedIcon />
              <SidebarList>My Projects</SidebarList>
            </SidebarMenu>
            <SidebarMenu onClick={() => router.push("/dashboard/payments")}>
              <MonetizationOnOutlinedIcon />
              <SidebarList>Payments</SidebarList>
            </SidebarMenu>
            <SidebarMenu>
              <AccountCircleOutlinedIcon />
              <SidebarList>Profile</SidebarList>
            </SidebarMenu>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              pt: 25,
              marginLeft: "3rem",
            }}
          >
            <SidebarMenu>
              <SettingsOutlinedIcon />
              <SidebarList>Settings</SidebarList>
            </SidebarMenu>
            <SidebarMenu>
              <HelpOutlineIcon />
              <SidebarList>Support</SidebarList>
            </SidebarMenu>
          </Box>
        </Box>
      </List>
    </Box>
  );
};

export default Sidebar;
