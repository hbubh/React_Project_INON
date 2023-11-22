import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import {
  Typography,
  IconButton,
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  CardContent,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";
/* import TemplateFunc from "@mui/icons-material/Google"; */

const TemplateFunc = ({
  _id,
  img,
  title,
  subtitle,
  phone,
  add,
  mail,
  onDeleteCard,
  onLikeCard,
  onEditCard,
  onAddCard,
}) => {
  const handleDeleteCardClick = () => {
    console.log("_id to delete (CardComponent)", _id);
    onDeleteCard(_id);
  };
  const handleEditCardClick = () => {
    console.log("_id to Edit (CardComponent)", _id);
    onEditCard(_id);
  };
  const handleLikeCardClick = (e) => {
    if (e.target.style.color === "lightgray") {
      e.target.style.color = "red";
    } else {
      e.target.style.color = "lightgray";
    }
    onLikeCard(_id);
  };
  const handleAddCardClick = () => {
    console.log("_id to Add (CardComponent)", _id);
    onAddCard(_id);
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          boxShadow: "2px 2px 5px",
          border: "3px solid black",
          borderRadius: "8px",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ width: "100%", height: "auto" }}
            component="img"
            image={img}
          ></CardMedia>
          <CardHeader
            title={title}
            subheader={subtitle}
            sx={{ backgroundColor: "darkgray", color: "black" }}
          />
          <CardContent sx={{ backgroundColor: "lightgray" }}>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Phone: </span>
              {phone}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Address: </span>
              {add}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Mail: </span>
              {mail}
            </Typography>
          </CardContent>
          <Divider />
          <Box
            display="flex"
            justifyContent={"space-between"}
            sx={{ backgroundColor: "black", boxShadow: "-5px 0px 15px" }}
          >
            <Box>
              <IconButton onClick={handleLikeCardClick}>
                <FavoriteIcon sx={{ color: "lightgray" }} />
              </IconButton>
              <IconButton onClick={handleEditCardClick}>
                <Link to={ROUTES.EDIT} style={{ textDecoration: "none" }}>
                  <EditIcon sx={{ color: "lightgray" }} />
                </Link>
              </IconButton>
            </Box>
            <Box>
              <IconButton onClick={handleAddCardClick}>
                <Link to={ROUTES.CREATE} style={{ textDecoration: "none" }}>
                  <AddIcon sx={{ color: "lightgray" }} />
                </Link>
              </IconButton>
              <IconButton onClick={handleDeleteCardClick}>
                <DeleteSweepIcon sx={{ color: "lightgray" }} />
              </IconButton>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default TemplateFunc;
