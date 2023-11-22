import ROUTES from "../../routes/ROUTES";

const arrLinks = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.REGISTER, children: "Register" },
  { to: ROUTES.LOGIN, children: "Login" },
];
const alwaysLinks = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.ABOUT, children: "About" },
];
const loggedInLinks = [
  { to: ROUTES.PROFILE, children: "Profile" },
  { to: ROUTES.LIKED, children: "FAV ♥️" },
];
const loggedInBizLinks = [{ to: ROUTES.MYCARDS, children: " My Cards " }];
const loggedInAdminLinks = [{ to: ROUTES.ADMIN, children: " CEO  " }];
const loggedOutLinks = [
  { to: ROUTES.REGISTER, children: "Register" },
  { to: ROUTES.LOGIN, children: "Login" },
];

export default arrLinks;
export {
  alwaysLinks,
  loggedInLinks,
  loggedOutLinks,
  loggedInBizLinks,
  loggedInAdminLinks,
};
