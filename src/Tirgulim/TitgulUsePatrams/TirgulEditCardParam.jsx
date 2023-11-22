import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const EditTirgulParam = () => {
  const { id } = useParams();
  return (
    <Box>
      <Typography variant="h1">Edit Card</Typography>
      <Typography variant="h4">ID:{id}</Typography>
    </Box>
  );
};
export default EditTirgulParam;
