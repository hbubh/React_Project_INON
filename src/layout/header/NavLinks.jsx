import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinks = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      style={{ textDecoration: "none", padding: "5px", marginLeft: "2%" }}
    >
      {({ isActive }) => (
        <Typography
          color={isActive ? "gold" : "white"}
          sx={{ my: 2, display: "block", fontWeight: "bold" }}
        >
          {children}
        </Typography>
      )}
    </NavLink>
  );
};
export default NavLinks;
