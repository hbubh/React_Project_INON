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
        <ListItemIcon onClick={handleClickHome}>
          <MenuItem>
            <HomeIcon />
            <ListItemText primary="Home Page" />
          </MenuItem>
        </ListItemIcon>
      </MenuList>
      {!loggedIn && (
        <MenuList>
          <ListItemIcon onClick={handleClickReg}>
            <MenuItem>
              <AppRegistrationIcon />
              <ListItemText primary="Register" />
            </MenuItem>
          </ListItemIcon>
        </MenuList>
      )}
      {!loggedIn && (
        <MenuList>
          <ListItemIcon onClick={handleClickLog}>
            <MenuItem>
              <LoginIcon />
              <ListItemText primary="Log-in" />
            </MenuItem>
          </ListItemIcon>
        </MenuList>
      )}
      {loggedIn && (
        <MenuList>
          <ListItemIcon onClick={handleClickFav}>
            <MenuItem>
              <FavoriteIcon />
              <ListItemText primary="FAV Cards" />
            </MenuItem>
          </ListItemIcon>
        </MenuList>
      )}
      {loggedIn && (
        <MenuList>
          <ListItemIcon onClick={handleClickPro}>
            <MenuItem>
              <AssignmentIndIcon />
              <ListItemText primary="Profile" />
            </MenuItem>
          </ListItemIcon>
        </MenuList>
      )}
      {userData && userData.isBusiness && (
        <MenuList>
          <ListItemIcon onClick={handleClickMy}>
            <MenuItem>
              <StyleIcon />
              <ListItemText primary="My Cards" />
            </MenuItem>
          </ListItemIcon>
        </MenuList>
      )}
      {userData && userData.isAdmin && (
        <MenuList>
          <ListItemIcon onClick={handleClickCeo}>
            <MenuItem>
              <AdminPanelSettingsIcon />
              <ListItemText primary="CEO" />
            </MenuItem>
          </ListItemIcon>
        </MenuList>
      )}

      <MenuList>
        <ListItemIcon onClick={handleClickAbout}>
          <MenuItem>
            <InfoIcon />
            <ListItemText primary="About" />
          </MenuItem>
        </ListItemIcon>
      </MenuList>
      {loggedIn && (
        <MenuList>
          <ListItemIcon onClick={handleClickLogOut}>
            <MenuItem>
              <LogoutIcon />
              <ListItemText primary="LogOut" />
            </MenuItem>
          </ListItemIcon>
        </MenuList>
      )}
    </Paper>
  );
};

export default NavBarRes;
