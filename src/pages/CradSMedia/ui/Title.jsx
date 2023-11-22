import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Title2 from "./Title2";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
const Title = () => {
  const [opacity1, setOpacity1] = useState("0");
  const [opacity2, setOpacity2] = useState("0");
  const [opacity3, setOpacity3] = useState("0");
  setTimeout(() => {
    setOpacity1("1");
  }, 1000);
  setTimeout(() => {
    setOpacity2("1");
  }, 1500);
  setTimeout(() => {
    setOpacity3("1");
  }, 2200);
  const primary = {
    main: "#a9a9a9",
    light: "#d3d3d3",
    dark: "#778899",
    contrastText: "#fff",
  };

  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100vh",
        marginBottom: { md: "200%", xs: "200%", lg: "2%" },
      }}
    >
      <Grid
        item
        sx={{
          width: { xs: "100%", md: "100%", lg: "60%" },
          height: "100vh",
        }}
      >
        <Box sx={{ width: "100%", height: "5%" }} />
        <Box
          sx={{
            padding: "30px",
            width: "100%",
            height: "auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "3.5rem",
              lineHeight: "1.3",
              transition: "all 1s",
              opacity: opacity1,
            }}
          >
            Business .WEB <AppsIcon sx={{ fontSize: "3.5rem" }} />
          </Typography>
          <Typography
            variant="body1"
            sx={{
              transition: "all 1s",
              opacity: opacity1,
              fontWeight: "bold",
              color: primary.main,
              marginBottom: "3%",
            }}
          >
            Internet business directory. Discover services from anywhere
          </Typography>
          <img
            src="https://img.freepik.com/free-vector/blue-elegant-corporate-card_1435-1629.jpg?w=1060&t=st=1698827317~exp=1698827917~hmac=4e94e58f30a8260c6ff8c5ef254a06c5ab026ba700715840037ed83b041edc93"
            alt="business"
            style={{
              transition: "all 1s",
              opacity: opacity2,
              width: "70%",
              height: "auto",
            }}
          />
          <img
            src="https://cdn.dribbble.com/users/9915353/screenshots/16932682/media/59c9f4d202c12a5a736a5836d03aa401.png?compress=1&resize=1000x750&vertical=top"
            alt="business"
            style={{
              transition: "all 1s",
              opacity: opacity2,
              width: "70%",
              height: "auto",
              marginBottom: "-20%",
              marginLeft: "-10%",
            }}
          />
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-ai-template-design_23-2150404405.jpg?w=740&t=st=1698827953~exp=1698828553~hmac=ec0bff70cb80097782dec6ae189798171832ce76db2a47450d375a9502154005"
            alt="business"
            style={{
              transition: "all 1s",
              opacity: opacity2,
              width: "60%",
              height: "auto",
              marginTop: "-60%",
              marginLeft: "40%",
            }}
          />
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: "100%", md: "100%", lg: "40%" },
          height: "auto",
          textAlign: "center",
          padding: "70px",
          marginTop: { xs: "5%", sm: "30%", md: "30%", lg: "0" },
          borderRadius: "30px",
          bgcolor: "rgb(0, 0, 0,0.5)",
          transition: "all 1s",
          opacity: opacity3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            padding: "10px",
            marginTop: "-10%",
            textAlign: "left",
            fontFamily: "sans-serif",
            fontWeight: "300",
          }}
        >
          <RecentActorsIcon sx={{ fontSize: "50px", display: "block" }} />
          <Typography
            sx={{
              textAlign: "left",
              fontFamily: "sans-serif",
              fontWeight: "300",
              fontSize: "26pt",
            }}
          >
            Create{" "}
          </Typography>
          Your Digital Business Card And Join To Our community
        </Typography>
        <Divider>
          <ArrowDownwardIcon />
        </Divider>
        <Title2 />
      </Grid>
    </Grid>
  );
};
export default Title;
