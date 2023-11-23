import { Box, Divider } from "@mui/material";
import nextKey from "generate-my-key";
import NavLinks from "../header/NavLinks";
import { useSelector } from "react-redux";
import { alwaysLinks, loggedInLinks } from "./MylinkBottom";
import { Fragment } from "react";

const LinksBottom = () => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: "flex", justifyContent: "space-evenly" }}
      onClick={handleScrollUp}
    >
      {alwaysLinks.map((myItem) => (
        <Fragment key={nextKey()}>
          <NavLinks to={myItem.to}>{myItem.children}</NavLinks>
          <Box sx={{ paddingTop: "1%" }}></Box>
        </Fragment>
      ))}
      {loggedIn &&
        loggedInLinks.map((myItem) => (
          <Fragment key={nextKey()}>
            <NavLinks to={myItem.to}>{myItem.children}</NavLinks>
            <Box sx={{ paddingTop: "1%" }}></Box>
          </Fragment>
        ))}
    </Box>
  );
};

export default LinksBottom;
