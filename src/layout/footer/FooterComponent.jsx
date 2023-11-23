import { BottomNavigation } from "@mui/material";
import LinksBottom from "../links/LinksBottom";

const FooterComponent = () => {
  return (
    <BottomNavigation
      sx={{
        backgroundColor: "darkgray",
        boxShadow: "-3px 0px 5px",
        opacity: "0.8",
        width: "100%",
        height: "auto",
        position: "absolute",
        marginTop: { xs: "50vh", sm: "30vh", md: "30vh", lg: "15vh" },
      }}
    >
      <LinksBottom />
    </BottomNavigation>
  );
};

export default FooterComponent;
