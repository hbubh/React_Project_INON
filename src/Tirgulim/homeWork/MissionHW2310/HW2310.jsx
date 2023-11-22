import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const HomeWork = () => {
  return (
    <Box>
      <Typography variant="h2" sx={{ padding: "10px", marginLeft: "-10px" }}>
        Home Work!
      </Typography>
      <Outlet />
    </Box>
  );
};
export default HomeWork;
