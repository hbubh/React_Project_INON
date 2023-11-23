import ROUTES from "../../routes/ROUTES";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import StyleIcon from "@mui/icons-material/Style";

const home = <HomeIcon sx={{ ml: "2%" }} />;
const profile = <AssignmentIndIcon sx={{ ml: "2%" }} />;
const fav = <FavoriteIcon sx={{ ml: "2%" }} />;
const info = <InfoIcon sx={{ ml: "2%" }} />;
const login = <LoginIcon sx={{ ml: "2%" }} />;
const register = <AppRegistrationIcon sx={{ ml: "2%" }} />;
const admin = <AdminPanelSettingsIcon sx={{ ml: "2%" }} />;
const myCards = <StyleIcon sx={{ ml: "2%" }} />;

const arrLinks = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.REGISTER, children: "Register" },
  { to: ROUTES.LOGIN, children: "Login" },
];
const alwaysLinks = [
  { to: ROUTES.HOME, icon: home, children: "Home" },
  { to: ROUTES.ABOUT, icon: info, children: "About" },
];
const loggedInLinks = [
  { to: ROUTES.PROFILE, icon: profile, children: "Profile" },
  { to: ROUTES.LIKED, icon: fav, children: "FAV " },
];
const loggedInBizLinks = [
  { to: ROUTES.MYCARDS, icon: myCards, children: " My Cards " },
];
const loggedInAdminLinks = [
  { to: ROUTES.ADMIN, icon: admin, children: " CEO  " },
];
const loggedOutLinks = [
  { to: ROUTES.REGISTER, icon: register, children: "Register" },
  { to: ROUTES.LOGIN, icon: login, children: "Login" },
];

export default arrLinks;
export {
  alwaysLinks,
  loggedInLinks,
  loggedOutLinks,
  loggedInBizLinks,
  loggedInAdminLinks,
};
