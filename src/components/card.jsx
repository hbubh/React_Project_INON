import {
  Box,
  Button,
  IconButton,
  CardMedia,
  Card,
  Container,
  CardHeader,
  Divider,
  Typography,
  CardActionArea,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

const CardFunc = () => {
  return (
    <Container>
      <Card sx={{ width: "30%", marginLeft: "25%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="/assets/img/p3-1.jpg"
            style={{ width: "400px", height: "auto" }}
          ></CardMedia>
          <CardHeader
            title="Burger Bar"
            subheader="new menue!"
            sx={{ p: 1, mb: 1 }}
          ></CardHeader>
          <Divider></Divider>
          <Typography fontWeight={700} sx={{ p: 1, mt: 1 }}>
            Phone: <sapn style={{ fontWeight: "400" }}>054432122</sapn>
          </Typography>
          <Typography fontWeight={700} sx={{ p: 1 }}>
            Address:{" "}
            <sapn style={{ fontWeight: "400" }}>Israel, Israeli 54</sapn>
          </Typography>
          <Typography fontWeight={700} sx={{ p: 1 }}>
            Card Number: <span style={{ fontWeight: "400" }}>00553</span>
          </Typography>
          <Box display="flex" justifyContent={"space-between"}>
            <Box>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <AddIcon />
              </IconButton>
              <IconButton>
                <DeleteSweepIcon />
              </IconButton>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default CardFunc;
