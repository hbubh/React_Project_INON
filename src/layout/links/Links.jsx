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
    <Fragment>
      {alwaysLinks.map((myItem) => (
        <Fragment key={nextKey()}>
          <NavLinks to={myItem.to}>
            {myItem.icon} {myItem.children}
          </NavLinks>
          <Divider />
        </Fragment>
      ))}
      {loggedIn &&
        loggedInLinks.map((myItem) => (
          <Fragment key={nextKey()}>
            <NavLinks to={myItem.to}>
              {myItem.icon} {myItem.children}
            </NavLinks>
            <Divider />
          </Fragment>
        ))}
      {userData &&
        userData.isBusiness &&
        loggedInBizLinks.map((myItem) => (
          <Fragment key={nextKey()}>
            <NavLinks to={myItem.to}>
              {myItem.icon} {myItem.children}
            </NavLinks>
            <Divider />
          </Fragment>
        ))}
      {userData &&
        userData.isAdmin &&
        loggedInAdminLinks.map((myItem) => (
          <Fragment key={nextKey()}>
            <NavLinks to={myItem.to}>
              {myItem.icon} {myItem.children}
            </NavLinks>
            <Divider />
          </Fragment>
        ))}
      {!loggedIn &&
        loggedOutLinks.map((myItem) => (
          <Fragment key={nextKey()}>
            <NavLinks to={myItem.to}>
              {myItem.icon} {myItem.children}
            </NavLinks>
            <Divider />
          </Fragment>
        ))}
    </Fragment>
  );
};

export default Links;
