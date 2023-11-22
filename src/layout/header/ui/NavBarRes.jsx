import * as React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ROUTES from "../../../routes/ROUTES";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import StyleIcon from "@mui/icons-material/Style";
import LogoutIcon from "@mui/icons-material/Logout";
import { MenuItem, MenuList, Paper } from "@mui/material";
const NavBarRes = ({ handleCloseNavMenu }) => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const navigate = useNavigate();

  const handleClickHome = () => {
    handleCloseNavMenu();
    navigate(ROUTES.HOME);
  };
  const handleClickReg = () => {
    handleCloseNavMenu();
    navigate(ROUTES.REGISTER);
  };
  const handleClickLog = () => {
    handleCloseNavMenu();
    navigate(ROUTES.LOGIN);
  };
  const handleClickFav = () => {
    handleCloseNavMenu();
    navigate(ROUTES.LIKED);
  };
  const handleClickAbout = () => {
    handleCloseNavMenu();
    navigate(ROUTES.ABOUT);
  };
  const handleClickLogOut = () => {
    handleCloseNavMenu();
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };
  const handleClickPro = () => {
    handleCloseNavMenu();
    navigate(ROUTES.PROFILE);
  };
  const handleClickMy = () => {
    handleCloseNavMenu();
    navigate(ROUTES.MYCARDS);
  };
  const handleClickCeo = () => {
    handleCloseNavMenu();
    navigate(ROUTES.ADMIN);
  };

  return (
    <Paper sx={{ maxWidth: "100%" }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon onClick={handleClickHome}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home Page" />
        </MenuItem>
      </MenuList>
      {!loggedIn && (
        <MenuList>
          <MenuItem>
            <ListItemIcon onClick={handleClickReg}>
              <AppRegistrationIcon />
            </ListItemIcon>
            <ListItemText primary="Register" />
          </MenuItem>
        </MenuList>
      )}
      {!loggedIn && (
        <MenuList>
          <MenuItem>
            <ListItemIcon onClick={handleClickLog}>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Log-in" />
          </MenuItem>
        </MenuList>
      )}
      {loggedIn && (
        <MenuList>
          <MenuItem>
            <ListItemIcon onClick={handleClickFav}>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="FAV Cards" />
          </MenuItem>
        </MenuList>
      )}
      {loggedIn && (
        <MenuList>
          <MenuItem>
            <ListItemIcon onClick={handleClickPro}>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </MenuItem>
        </MenuList>
      )}
      {userData && userData.isBusiness && (
        <MenuList>
          <MenuItem>
            <ListItemIcon onClick={handleClickMy}>
              <StyleIcon />
            </ListItemIcon>
            <ListItemText primary="My Cards" />
          </MenuItem>
        </MenuList>
      )}
      {userData && userData.isAdmin && (
        <MenuList>
          <MenuItem>
            <ListItemIcon onClick={handleClickCeo}>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText primary="CEO" />
          </MenuItem>
        </MenuList>
      )}

      <MenuList>
        <MenuItem>
          <ListItemIcon onClick={handleClickAbout}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </MenuItem>
      </MenuList>
      {loggedIn && (
        <MenuList>
          <MenuItem>
            <ListItemIcon onClick={handleClickLogOut}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="LogOut" />
          </MenuItem>
        </MenuList>
      )}
    </Paper>
  );
};

export default NavBarRes;
