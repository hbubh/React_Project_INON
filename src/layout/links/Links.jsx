import { Box, Divider } from "@mui/material";
import nextKey from "generate-my-key";
import NavLinks from "../header/NavLinks";
import { useSelector } from "react-redux";
import {
  alwaysLinks,
  loggedInLinks,
  loggedOutLinks,
  loggedInBizLinks,
  loggedInAdminLinks,
} from "./Mylink";
import { Fragment } from "react";

const Links = () => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      {alwaysLinks.map((myItem) => (
        <Fragment key={nextKey()}>
          <NavLinks to={myItem.to}>{myItem.children}</NavLinks>
          <Box sx={{ paddingTop: "1%", ml: "2%" }}>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: "white", height: "60%", mb: "-20%" }}
            />
          </Box>
        </Fragment>
      ))}
      {loggedIn &&
        loggedInLinks.map((myItem) => (
          <Fragment key={nextKey()}>
            <NavLinks to={myItem.to}>{myItem.children}</NavLinks>
            <Box sx={{ paddingTop: "1%", ml: "2%" }}>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "white", height: "60%" }}
              />
            </Box>
          </Fragment>
        ))}
      {userData &&
        userData.isBusiness &&
        loggedInBizLinks.map((myItem) => (
          <Fragment key={nextKey()}>
            <NavLinks to={myItem.to}>{myItem.children}</NavLinks>
            <Box sx={{ paddingTop: "1%", ml: "2%" }}>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "white", height: "60%" }}
              />
            </Box>
          </Fragment>
        ))}
      {userData &&
        userData.isAdmin &&
        loggedInAdminLinks.map((myItem) => (
          <Fragment key={nextKey()}>
            <NavLinks to={myItem.to}>{myItem.children}</NavLinks>
            <Box sx={{ paddingTop: "1%", ml: "2%" }}>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "white", height: "60%" }}
              />
            </Box>
          </Fragment>
        ))}
      {!loggedIn &&
        loggedOutLinks.map((myItem) => (
          <Fragment key={nextKey()}>
            <NavLinks to={myItem.to}>{myItem.children}</NavLinks>
            <Box sx={{ paddingTop: "1%", ml: "2%" }}>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "white", height: "60%" }}
              />
            </Box>
          </Fragment>
        ))}
    </Box>
  );
};

export default Links;
