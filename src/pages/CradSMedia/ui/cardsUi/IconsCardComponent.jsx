import { Box, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const red = "red";
const IconsCards = ({ handlePhoneClick, handleLikeCardClick, like }) => {
  const [thisState, setState] = useState("none");
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      setState("block");
    }
  }, [loggedIn]);
  const funcLikeCard = (e) => {
    handleLikeCardClick(e);
  };
  const funcClick = () => {
    handlePhoneClick();
  };

  return (
    <Box display="flex" justifyContent="space-around">
      <Box>
        <IconButton onClick={funcClick}>
          <PhoneIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton
          onClick={funcLikeCard}
          sx={{ display: thisState, color: like ? "red" : "" }}
        >
          <FavoriteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default IconsCards;
