import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";
import { useState } from "react";

const LogOut = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleLogOutClick = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate(ROUTES.HOME);
    window.location.reload();
    window.scrollTo(0, 0);
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
