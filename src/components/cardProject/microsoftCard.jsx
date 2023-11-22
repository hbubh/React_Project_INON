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

import MicrosoftIcon from "@mui/icons-material/Microsoft";

const MicrosoftFunc = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <IconButton sx={{ padding: "5px" }}>
        <Typography sx={{ color: "rgb(38, 86, 243)" }}>
          MicroSoft <MicrosoftIcon />
        </Typography>
      </IconButton>
      <Card
        sx={{
          boxShadow: "2px 2px 5px",
          border: "3px solid rgb(38, 86, 243)",
          borderRadius: "8px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://th.bing.com/th/id/R.b92ec72f277dcb075cb52fc1a724056e?rik=z2o3S%2fJWHEG1Gg&riu=http%3a%2f%2fileap.org%2fwp-content%2fuploads%2f2018%2f07%2fMicrosoft-300px-250x250.png&ehk=ucUhcr56rActnfKaxACi%2brtZvWBR7XGs1s5uuivOuTE%3d&risl=&pid=ImgRaw&r=0"
          ></CardMedia>
          <CardHeader
            title="MicroSoft"
            subheader="Windows11"
            sx={{
              backgroundColor: "rgb(38, 86, 243)",
            }}
          />
          <CardContent sx={{ backgroundColor: "lightblue" }}>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Phone: </span>0543332221
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Address: </span>
              California,USA
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Mail: </span>
              Msft@Outlook.com
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MicrosoftFunc;
