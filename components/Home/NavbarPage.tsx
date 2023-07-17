import { useContext } from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
} from "@mui/material";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";

const items = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "Discover", url: "/discover" },
  { id: 3, label: "Resources" },
  { id: 4, label: "Contacts" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavbarPage = ({ theme, colorMode, mode }: any) => {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { login } = useContext(AuthContext);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleSignin = () => {
    login();
  };
  

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: mode === "light" ? "#ffffff" : "#00201c",
        height: "80px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: { xs: "none", md: "4rem" },
              display: { xs: "none", md: "flex" },
            }}
          >
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Image
                src="/Devgenie.svg"
                height={60}
                width={100}
                alt="devgenie"
              />
            </IconButton>
          </Box>

          {/* Mobile View */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {items.map((item, index) => {
              if (index < 2) {
                return (
                  <Link href={{ pathname: item.url }} key={item.id} style={{ textDecoration: 'none' }}>
                    <Button
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        textTransform: "capitalize",
                        fontFamily: "Montserrat",
                        pr: 5,
                        "&:hover": {
                          color: "#5EC7AE",
                          background: "transparent",
                        },
                      }}
                      key={index}
                    >
                      {item.label}
                    </Button>
                  </Link>
                );
              } else {
                return (
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      textTransform: "capitalize",
                      fontFamily: "Montserrat",
                      pr: 5,
                      "&:hover": {
                        color: "#5EC7AE",
                        background: "transparent",
                      },
                    }}
                    key={item.id}
                  >
                    {item.label}
                  </Button>
                );
              }
              })}
            </Menu>
          </Box>

          {/* End of Mobile View */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {items.map((item, index) => {
              if (index < 2) {
                return (
                  <Link href={{ pathname: item.url }} key={item.id} style={{ textDecoration: 'none' }}>
                    <Button
                      sx={{
                        my: 2,
                        color: mode === "light" ? "#000000" : "#ffffff",
                        display: "block",
                        textTransform: "capitalize",
                        fontFamily: "Montserrat",
                        pr: 5,
                        "&:hover": {
                          color: "#5EC7AE",
                          background: "transparent",
                        },
                      }}
                      key={index}
                    >
                      {item.label}
                    </Button>
                  </Link>
                );
              } else {
                return (
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: mode === "light" ? "#000000" : "#ffffff",
                      display: "block",
                      textTransform: "capitalize",
                      fontFamily: "Montserrat",
                      pr: 5,
                      "&:hover": {
                        color: "#5EC7AE",
                        background: "transparent",
                      },
                    }}
                    key={item.id}
                  >
                    {item.label}
                  </Button>
                );
              }
            })}

          </Box>

          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              alignItems: "center",
              width: { xs: "none", md: "300px" },
              border: "1px solid #29CC7A",
              borderRadius: "100px",
              background: "transparent",
              mr: 5,
              display: { xs: "none", md: "flex" },
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                fontSize: "14px",
                fontFamily: "Montserrat",
                fontWeight: 400,
                lineHeight: "normal",
              }}
              placeholder="Search projects"
              inputProps={{
                "aria-label": "search google maps",
                style: { color: mode === "light" ? "#29CC7A" : "#6C757D" },
              }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon style={{ color: "#29CC7A" }} />
            </IconButton>
          </Paper>

          <Box>
            <Button
              sx={{
                color: "rgba(255, 255, 255, 0.90)",
                borderRadius: "48px",
                background: "#65CAAB",
                padding: "13.5px 24.61px 13.5px 25.39px",
                fontFamily: "Roboto Mono",
                fontWeight: "700",

                "&:hover": {
                  color:
                    mode === "light"
                      ? "rgba(0, 0, 0, 0.90)"
                      : "rgba(255, 255, 255, 0.90)",
                      border: "1px solid #65CAAB"
                },
              }}
              onClick={handleSignin}
            >
              Sign In
            </Button>

            {/* <IconButton
              onClick={colorMode.toggleColorMode}
              sx={{ ml: 1, color: mode === "light" ? "#000F08" : "#fff" }}
            >
              {theme.palette.mode === "#000F08" ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </IconButton> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarPage;
