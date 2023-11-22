import ROUTES from "../../routes/ROUTES";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
const home = <HomeIcon />;
const about = <InfoIcon />;
const profile = <PersonIcon />;
const fav = <FavoriteIcon />;
const alwaysLinks = [
  { to: ROUTES.HOME, children: home },
  { to: ROUTES.ABOUT, children: about },
];
const loggedInLinks = [
  { to: ROUTES.PROFILE, children: profile },
  { to: ROUTES.LIKED, children: fav },
];

export { alwaysLinks, loggedInLinks };
