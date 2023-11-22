import { Typography } from "@mui/material";

const SxComponent = () => {
  let n = 15;
  return (
    <Typography sx={{ backgroundColor: "red", color: "yellow" }}>
      hello sx
    </Typography>
  );
};

export default SxComponent;
