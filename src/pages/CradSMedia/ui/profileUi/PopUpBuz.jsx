import { Box, Button, Typography } from "@mui/material";

const PopUpBuz = ({ createBuz, cancelBuz }) => {
  const handleApplyClick = () => {
    createBuz();
  };
  const handleCancelClick = () => {
    cancelBuz();
  };
  return (
    <Box
      sx={{
        width: { xs: "70vw", md: "30vw" },
        height: "50vh",
        margin: { xs: "-75vh 0", md: "25vh -35vw" },
        border: "3px solid black",
        textAlign: "center",
        padding: "30px",
        bgcolor: "bisque",
        position: "absolute",
        color: "black",
      }}
    >
      <Typography variant="h3">Upgrade User</Typography>
      <Typography variant="subtitle2" sx={{ mt: "10%", mb: "5%" }}>
        Get More tools and click Apply to made your user a busniess. for that
        you need to RECONECET after your confirom
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
        Apply
      </Button>
      <Button
        variant="outlined"
        sx={{ display: "inline-block" }}
        onClick={handleCancelClick}
      >
        Cancel
      </Button>
    </Box>
  );
};
export default PopUpBuz;
