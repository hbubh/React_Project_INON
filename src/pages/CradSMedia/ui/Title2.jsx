import { Box, Button, Divider, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Fragment, memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";
const primary = {
  main: "#a9a9a9",
  light: "#d3d3d3",
  dark: "#778899",
  contrastText: "#fff",
};
const Title2 = () => {
  const [thisBgc1, setBgc1] = useState(primary.light);
  const [thisBgc2, setBgc2] = useState(primary.main);
  const [thisBgc3, setBgc3] = useState("black");
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      if (thisBgc1 === primary.light) {
        setBgc1("black");
        setBgc2(primary.light);
        setBgc3("teal");
      } else {
        setBgc1(primary.light);
        setBgc2(primary.main);
        setBgc3("black");
      }
    }, 2000);
  }, [thisBgc1]);

  const handlyUpClick = () => {
    window.scrollTo(0, 0);
  };
  const handleLogClick = () => {
    navigate(ROUTES.LOGIN);
  };
  const handleResClick = () => {
    navigate(ROUTES.REGISTER);
  };

  return (
    <Fragment>
      <Box sx={{ display: { xs: "block", md: "block", lg: "none" } }}>
        <img
          src="https://img.freepik.com/premium-photo/large-group-people-shape-businessman-handshaking-isolated_267651-2164.jpg?w=740"
          alt="group people shape"
          style={{ width: "80%", height: "auto", border: "2px solid black" }}
        />
        <Button
          variant="contained"
          sx={{
            display: "block",
            width: "80%",
            margin: "0 auto",
            padding: "15px",
            marginTop: "3%",
          }}
          onClick={handleLogClick}
        >
          LogIn
        </Button>
        <Divider sx={{ marginTop: "3%", fontFamily: "serif" }}>OR</Divider>
        <Button
          variant="contained"
          sx={{
            display: "block",
            width: "80%",
            margin: "0 auto",
            padding: "15px",
            marginTop: "3%",
          }}
          onClick={handleResClick}
        >
          Register
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "80%",
          textAlign: "center",
          bgcolor: thisBgc3,
          borderRadius: "20px",
          border: "1px solid white",
          transition: "all 1s",
          color: "black",
          display: { xs: "none", md: "none", lg: "block" },
        }}
      >
        <Box sx={{ width: "100%", height: "5%" }} />
        <Box
          sx={{
            width: "90%",
            height: "90%",
            marginLeft: "5%",
            border: "2px solid white",
            bgcolor: primary.light,
            borderRadius: "20px",
          }}
        >
          <Box sx={{ width: "100%", height: "5%" }} />
          <Box
            sx={{
              width: "90%",
              height: "90%",
              marginLeft: "5%",
              borderRadius: "200px",
              transition: "all 1s",
              bgcolor: thisBgc2,
              boxShadow: "3px 3px 7px",
            }}
          >
            <Box sx={{ width: "100%", height: "20%" }} />
            <Box
              sx={{
                padding: "20px",
                width: "80%",
                height: "60%",
                marginLeft: "10%",
                transition: "all 1s",
                bgcolor: thisBgc1,
                borderRadius: "280px",
                boxShadow: "3px 3px 7px",
              }}
            >
              <Box sx={{ width: "100%", height: "30%" }} />
              <Link to={ROUTES.REGISTER} style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "black",
                    padding: "12px",
                    color: "white",
                    borderRadius: "15px",
                  }}
                  onClick={handlyUpClick}
                >
                  Start Right Now
                  <LoginIcon />
                </Button>
              </Link>
              <Box sx={{ width: "100%", height: "20%" }} />
            </Box>
          </Box>
          <Typography sx={{ fontWeight: "bold", color: "teal" }}>
            User exist?
            <Link to={ROUTES.LOGIN} style={{ textDecoration: "none" }}>
              <Button
                onClick={handlyUpClick}
                variant="oulined"
                sx={{ color: "teal" }}
              >
                Click Here
              </Button>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
};
export default memo(Title2);
