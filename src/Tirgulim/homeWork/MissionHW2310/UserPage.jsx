import { Box, Button, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useName from "./CustomHook";
import { useState } from "react";

const UserPage = () => {
  const { user } = useParams();
  const [userName, handleUserName] = useName([user]);

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "darkgray" }}>
        Hi User: {userName}
      </Typography>
      <br />
      <br />
      <br />
      <Typography variant="h6">Change User Name:</Typography>
      <TextField value={userName} onChange={handleUserName}></TextField>
    </Box>
  );
};
export default UserPage;
