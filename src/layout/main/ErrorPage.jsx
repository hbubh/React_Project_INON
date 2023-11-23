import { Box, Container, Typography, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
const ErrorComponent = () => {
  const [leftPosition, setLeftPosition] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setLeftPosition((left) => left + 30);
    }, 2000);
  }, []);

  return (
    <Container
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        mt: { xs: "12%", md: "5%", lg: "5%" },
      }}
    >
      <Paper
        sx={{
          width: "50%",
          bgcolor: "black",
          transition: "all 1s",
          marginRight: `${leftPosition}vw`,
          height: "100%",
          borderRight: "2px solid grey",
          zIndex: "3",
        }}
      />

      <Paper
        sx={{
          width: "50%",
          bgcolor: "black",
          height: "100%",
          borderLeft: "2px solid grey",
          zIndex: "3",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "80%",
          ml: { xs: "5%", md: "0" },
          textAlign: "center",
          zIndex: "1",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            width: "50%",
            ml: "20%",
            mt: "10%",
            fontWeight: "bold",
          }}
        >
          WellCome To: Inon Genish Project
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ width: "50%", ml: "20%", mt: "2%" }}
        >
          Its look like you get a lost (404).. This page conenct you to my
          project , to get started and go to my HomePage
        </Typography>
        <NavLink to={ROUTES.HOME}>
          <Button
            variant="contained"
            sx={{ width: "50%", ml: "-10%", mt: "2%" }}
          >
            Click Here
          </Button>
        </NavLink>
      </Box>
    </Container>
  );
};
export default ErrorComponent;


