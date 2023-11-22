import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AlignVerticalBottomTwoToneIcon from "@mui/icons-material/AlignVerticalBottomTwoTone";
import Container from "@mui/material/Container";
import LogOut from "./ui/LogOut";
import Links from "../links/Links";
import StatusUser from "./ui/StatusUserComponent";
import FilterComponent from "./ui/FilterComponent";
import { useSelector } from "react-redux";
import NavBarRes from "./ui/NavBarRes";

const ResponsiveAppBar = ({ themeChange, thisTheme }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleTheme = () => {
    themeChange();
  };
  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: "black",
          position: "fixed",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {loggedIn ? <LogOut /> : ""}

            <AlignVerticalBottomTwoToneIcon
              sx={{
                mr: 1,
                color: "lightgray",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "none", lg: "flex" },
                fontFamily: "-moz-initial",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "lightgray",
                textDecoration: "none",
              }}
            >
              INON.G web
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                width: "10%",
              }}
            >
              <IconButton
                size="medium"
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
                anchorEl={Boolean(anchorElNav)}
                anchorOrigin={{
                  vertical: "top",
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
                  display: { xs: "inline", md: "none" },
                }}
              >
                <NavBarRes handleCloseNavMenu={handleCloseNavMenu} />
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", marginLeft: "2%" },
              }}
            >
              <Links />
            </Box>
            <Box>
              <StatusUser />
              <Typography sx={{ display: { xs: "none", md: "inline" } }}>
                {thisTheme ? "Dark" : "Light"} Mode
              </Typography>
              <Switch
                checked={thisTheme}
                onChange={handleTheme}
                color="secondary"
              />
            </Box>
            {loggedIn ? <FilterComponent /> : <></>}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
