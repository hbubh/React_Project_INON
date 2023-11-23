import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Switch } from "@mui/material";
import AlignVerticalBottomTwoToneIcon from "@mui/icons-material/AlignVerticalBottomTwoTone";
import Container from "@mui/material/Container";
import StatusUser from "./ui/StatusUserComponent";
import FilterComponent from "./ui/FilterComponent";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import SlideNav from "./ui/SlideNav";

const ResponsiveAppBar = ({ themeChange, thisTheme }) => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
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
            <SlideNav />

            <NavLink to={ROUTES.HOME}>
              <AlignVerticalBottomTwoToneIcon
                sx={{
                  mr: 1,
                  color: "lightgray",
                }}
              />
            </NavLink>
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
            <Box sx={{ width: "50%" }} />
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
