import { Container, Typography, Box, Divider } from "@mui/material";

const TitleText = () => {
  return (
    <Box>
      <Container
        sx={{
          bgcolor: "black",
          width: "40%",
          padding: "3px",
          textAlign: "center",
          borderRadius: "0 0 15px 15px",
          mb: "5%",
          mt: "0.5%",
          boxShadow: "3px 3px 6px",
        }}
      >
        <Typography variant="h5" sx={{ padding: "5px", color: "lightgray" }}>
          Car For Sale - Page
        </Typography>
        <Typography variant="body2" sx={{ color: "lightgray" }}>
          Look at the vehicles available in stock. And contact the seller today!
        </Typography>
      </Container>
      <Divider />
    </Box>
  );
};
export default TitleText;
