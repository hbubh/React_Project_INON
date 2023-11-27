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
import { Fragment, useEffect, useState } from "react";

const Links = () => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const [thisDis, setDis] = useState("block");
  const [thisDis1, setDis1] = useState("block");
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  useEffect(() => {
    {
      loggedIn ? setDis("block") : setDis("none");
      loggedIn ? setDis1("none") : setDis1("block");
    }
  }, [loggedIn]);

  return (
    <Fragment>
      {alwaysLinks.map((myItem) => (
        <Box key={nextKey()}>
          <NavLinks to={myItem.to}>
            {myItem.icon} {myItem.children}
          </NavLinks>
          <Divider />
        </Box>
      ))}
      {loggedIn &&
        loggedInLinks.map((myItem) => (
          <Box sx={{ display: thisDis }} key={nextKey()}>
            <NavLinks to={myItem.to}>
              {myItem.icon} {myItem.children}
            </NavLinks>
            <Divider />
          </Box>
        ))}
      {userData &&
        userData.isBusiness &&
        loggedInBizLinks.map((myItem) => (
          <Box sx={{ display: thisDis }} key={nextKey()}>
            <NavLinks to={myItem.to}>
              {myItem.icon} {myItem.children}
            </NavLinks>
            <Divider />
          </Box>
        ))}
      {userData &&
        userData.isAdmin &&
        loggedInAdminLinks.map((myItem) => (
          <Box sx={{ display: thisDis }} key={nextKey()}>
            <NavLinks to={myItem.to}>
              {myItem.icon} {myItem.children}
            </NavLinks>
            <Divider />
          </Box>
        ))}
      {!loggedIn &&
        loggedOutLinks.map((myItem) => (
          <Box sx={{ display: thisDis1 }} key={nextKey()}>
            <NavLinks to={myItem.to}>
              {myItem.icon} {myItem.children}
            </NavLinks>
            <Divider />
          </Box>
        ))}
    </Fragment>
  );
};

export default Links;
