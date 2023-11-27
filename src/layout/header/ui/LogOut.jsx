import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ROUTES from "../../../routes/ROUTES";
import { authActions } from "../../../store/authSlice";
import { useState } from "react";

const LogOut = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleLogOutClick = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.scrollTo(0, 0);
    dispatch(authActions.logout());
    navigate(ROUTES.LOGIN);
    //window.location.reload();
  };

  const elementStyle = {
    backgroundColor: isHovered ? "darkgray" : "black",
    color: isHovered ? "black" : "darkgray",
    cursor: "pointer",
  };
  return (
    <IconButton
      onClick={handleLogOutClick}
      style={elementStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: "absolute",

        borderRadius: "2px",
        transition: "all 0.5s",
        display: "block",
        width: "100%",
      }}
    >
      <Typography variant="subtitle2"> Log-Out </Typography>
      <LogoutIcon />
    </IconButton>
  );
};
export default LogOut;
