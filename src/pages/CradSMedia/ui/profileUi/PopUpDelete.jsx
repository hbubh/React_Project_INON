import { Box, Button, Typography } from "@mui/material";

const PopUpDelete = ({ createDel, cancelDel }) => {
  const handleApplyClick = () => {
    createDel();
  };
  const handleCancelClick = () => {
    cancelDel();
  };
  return (
    <Box
      sx={{
        width: { xs: "100vw", md: "40vw" },
        height: "60vh",
        margin: { xs: "-5vh -35vh", md: "-5vh -25vh" },
        border: "3px solid white",
        textAlign: "center",
        padding: "30px",
        bgcolor: "grey",
        position: "absolute",
        color: "black",
      }}
    >
      <Typography variant="h3">Delete User!?</Typography>
      <Typography variant="subtitle2" sx={{ mt: "10%", mb: "5%" }}>
        Caution, if you click Delete you will not be able to cancel the
        operation and the user will be permanently deleted. Do you confirm?
      </Typography>
      <Button
        variant="outlined"
        sx={{
          display: "inline-block",
          width: "35%",
          bgcolor: "lightblue",
          color: "black",
        }}
        onClick={handleApplyClick}
      >
        Delete
      </Button>
      <Button
        variant="outlined"
        sx={{ display: "inline-block", color: "white" }}
        onClick={handleCancelClick}
      >
        Cancel
      </Button>
    </Box>
  );
};
export default PopUpDelete;
