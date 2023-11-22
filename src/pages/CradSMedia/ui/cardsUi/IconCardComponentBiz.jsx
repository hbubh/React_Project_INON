import { Box, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

const IconsCardsBiz = ({
  handleClickEditCard,
  handleDeleteCardClick,
  handleLikeCardClick,
  like,
}) => {
  const funcEditCard = (e) => {
    handleClickEditCard(e);
  };
  const funcDeleteCard = (e) => {
    handleDeleteCardClick(e);
  };
  const funcLikeCard = (e) => {
    handleLikeCardClick(e);
  };
  return (
    <Box display="flex" justifyContent="space-evenly">
      <Box>
        <IconButton onClick={funcLikeCard}>
          <FavoriteIcon sx={{ color: like ? "red" : "" }} />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={funcEditCard}>
          <CreateIcon />
        </IconButton>
        <IconButton onClick={funcDeleteCard}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default IconsCardsBiz;
