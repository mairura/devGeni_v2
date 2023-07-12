import { useContext } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";

const pages = ["Home", "Discover", "Resources", "Contacts"];
const items = [
  { label: 'Home', link: '/' },
  { label: 'Discover', link: '/discover' },
  'Resources', 
  'Contacts'
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavbarPage = () => {
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
        backgroundColor: "#00201C",
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {/* {items.map((item, index) => {
        if (index === 0 && item.link) {
          return (
            <Link href={item.link} as={item.link} key={index}>
              <Typography component="a" variant="body1">
                {item.label}
              </Typography>
            </Link>
          );
        } else if (index === 1 && item.link) {
          return (
            <Link href={item.link} as={item.link} key={index}>
              <Typography component="a" variant="body1">
                {item.label}
              </Typography>
            </Link>
          );
        } else {
          return (
            <Typography key={index} component="p" variant="body1">
              {item}
            </Typography>
          );
        }
      })} */}
            {pages.map((page, index) => {
              if (index === 1) {
                return <Button
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
                }}key={index} onClick={() => router.push("/discover")}>{page}</Button>;
              }
              return (
                <Button
                  key={page}
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
                >
                  {page}
                </Button>
              );
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
                fontSize: "12px",
                fontFamily: "Montserrat",
              }}
              placeholder="Search projects..."
              inputProps={{
                "aria-label": "search google maps",
                style: { color: "#6C757D" },
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
              }}
              onClick={handleSignin}
            >
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarPage;
