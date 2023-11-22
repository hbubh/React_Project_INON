import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LogOut = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [none, setBlock] = useState("none");
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      setBlock("inlineblock");
    }
  }, [loggedIn]);

  const handleLogOutClick = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
    navigate(ROUTES.HOME);
  };
  const elementStyle = {
    backgroundColor: isHovered ? "white" : "black",
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
        marginRight: "3%",
        borderRadius: "2px",
        transition: "all 0.5s",
        display: { xs: "none", md: "block" },
      }}
    >
      <Typography variant="subtitle2"> Log-Out </Typography>
      <LogoutIcon />
    </IconButton>
  );
};
export default LogOut;
