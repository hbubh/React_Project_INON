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
import AppleIcon from "@mui/icons-material/Apple";

const AppleFunc = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <IconButton sx={{ padding: "5px" }}>
        <Typography sx={{ color: "black" }}>
          Apple
          <AppleIcon />
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
            image="https://th.bing.com/th/id/OIP.8DppqmUmmFpjTZY5SqN7-AHaHa?pid=ImgDet&w=182&h=182&c=7&dpr=1.3"
          ></CardMedia>
          <CardHeader
            title="Apple"
            subheader="Iphone15"
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
              Apple@IOS.com
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default AppleFunc;
