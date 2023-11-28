import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Switch } from "@mui/material";
import AlignVerticalBottomTwoToneIcon from "@mui/icons-material/AlignVerticalBottomTwoTone";
import Container from "@mui/material/Container";
import StatusUser from "./ui/StatusUserComponent";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FilterComponent from "./ui/FilterComponent";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import SlideNav from "./ui/SlideNav";
import CustomizedSwitches from "./ui/NewIconSwitch";
import axios from "axios";
import rerender from "../../components/rerender";
import IcomMenu from "./ui/IconMenu";

const ResponsiveAppBar = ({ themeChange, thisTheme }) => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const [thisUrl, setUrl] = React.useState("");
  const navigate = useNavigate();
  const [thisAlt, setAlt] = React.useState("profile img");
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  let data;
  let reRen = rerender();

  if (userData) {
    data = userData._id;
  }
  React.useEffect(() => {
    axios
      .get(`/users/${data}`)
      .then(({ data }) => {
        setUrl(`${data.image.url}`);
        setAlt(data.image.alt);
      })
      .catch((err) => {});
  }, [loggedIn, reRen]);
  const handleProfileClick = () => {
    navigate(ROUTES.PROFILE);
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
            <SlideNav />

            <NavLink to={ROUTES.HOME}>
              <AlignVerticalBottomTwoToneIcon
                sx={{
                  mr: 1,
                  color: "lightgray",
                  display: { xs: "none", md: "block" },
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
            <Box
              sx={{
                width: {
                  xs: loggedIn ? "5%" : "35%",
                  md: loggedIn ? "35%" : "45%",
                  lg: loggedIn ? "45%" : "60%",
                },
              }}
            />

            {loggedIn ? <FilterComponent /> : <></>}
            <Box sx={{ ml: { xs: "10%", md: "5%" } }}>
              <CustomizedSwitches
                thisTheme={thisTheme}
                handleTheme={handleTheme}
              />
              <StatusUser />
            </Box>
            {loggedIn ? (
              <Stack
                direction="row"
                spacing={2}
                onClick={handleProfileClick}
                sx={{
                  width: { xs: "10%", md: "3%" },
                  display: { xs: "block", md: "block" },
                  height: "auto",
                  borderRadius: "110px",
                  border: "3px solid darkgray",
                  padding: "5px",
                  bgcolor: "white",
                  ml: "1%",
                }}
              >
                <Avatar
                  alt={thisAlt}
                  src={thisUrl}
                  sx={{ width: "100%", height: "auto" }}
                />
              </Stack>
            ) : (
              <></>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
