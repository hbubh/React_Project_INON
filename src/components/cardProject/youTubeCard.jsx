import {
  Typography,
  IconButton,
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  CardContent,
  Grid,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";

const YouTubeFunc = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <IconButton sx={{ padding: "5px" }}>
        <Typography sx={{ color: "black", fontWeight: "500" }}>
          YouTube
          <YouTubeIcon />
        </Typography>
      </IconButton>
      <Card
        sx={{
          boxShadow: "2px 2px 5px",
          border: "3px solid grey",
          borderRadius: "8px",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ width: "100%", height: "auto" }}
            component="img"
            image="https://www.interstellarrift.com/wiki/images/thumb/d/d8/Youtube-logo-png-photo-0.png/600px-Youtube-logo-png-photo-0.png"
          ></CardMedia>
          <CardHeader
            title="YouTube"
            subheader="Music"
            sx={{ backgroundColor: "grey", color: "black" }}
          />
          <CardContent sx={{ backgroundColor: "lightgrey" }}>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Phone: </span>0543332221
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Address: </span>
              California,USA
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Mail: </span>
              YouTube@gmail.com
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default YouTubeFunc;
