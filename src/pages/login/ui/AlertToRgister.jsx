import { Alert, Box, Grid } from "@mui/material";

const AlertToRgister = ({ errorsState }) => {
  return (
    <Grid
      item
      sx={{
        width: { xs: "100%", md: "39%" },
      }}
    >
      <Box
        sx={{
          width: { xs: "70%", md: "90%" },
          ml: { xs: "15%", md: "5%" },
          mt: { xs: "3%", md: "0" },
        }}
      >
        <img
          style={{
            width: "90%",
            height: "auto",
            marginLeft: "5%",
            borderRadius: "70px 40px 0px 140px",
            border: "2px solid black",
            opacity: "0.5",
          }}
          src="https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-101286.jpg?w=996&t=st=1699285011~exp=1699285611~hmac=ecca3c68c04a763607b4251dea6380530cd6931faabb4253bef7bff6bd94aeaa"
          alt="sign in img"
        />
      </Box>
      <Box
        sx={{
          width: "90%",
          marginLeft: "5%",
          borderBottom: "15px solid darkgray",
          paddingBottom: "15px",
        }}
      >
        {errorsState && errorsState.first && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.first}{" "}
          </Alert>
        )}

        {errorsState && errorsState.middle && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.middle}{" "}
          </Alert>
        )}

        {errorsState && errorsState.last && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.last}{" "}
          </Alert>
        )}

        {errorsState && errorsState.email && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.email}{" "}
          </Alert>
        )}

        {errorsState && errorsState.password && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.password}{" "}
          </Alert>
        )}

        {errorsState && errorsState.phone && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.phone}{" "}
          </Alert>
        )}

        {errorsState && errorsState.url && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.url}{" "}
          </Alert>
        )}

        {errorsState && errorsState.alt && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.alt}{" "}
          </Alert>
        )}

        {errorsState && errorsState.state && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.state}{" "}
          </Alert>
        )}

        {errorsState && errorsState.country && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.country}{" "}
          </Alert>
        )}

        {errorsState && errorsState.city && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.city}{" "}
          </Alert>
        )}

        {errorsState && errorsState.street && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.street}{" "}
          </Alert>
        )}

        {errorsState && errorsState.houseNumber && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.houseNumber}{" "}
          </Alert>
        )}

        {errorsState && errorsState.zip && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.zip}{" "}
          </Alert>
        )}
      </Box>
    </Grid>
  );
};
export default AlertToRgister;
