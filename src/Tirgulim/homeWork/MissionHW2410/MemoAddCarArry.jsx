import { Box, Button, TextField, Typography } from "@mui/material";
import { memo, useState } from "react";

const MemoAddCarArry = ({ onClicked }) => {
  const [thisCar, setCar] = useState("");
  const [thisKm, setKm] = useState("");

  const handleChangeCar = (e) => {
    setCar(e.target.value);
  };
  const handleChangeKm = (e) => {
    setKm(e.target.value);
  };

  const handleSunClicked = () => {
    onClicked(thisCar, thisKm);
  };
  return (
    <Box sx={{ padding: "15px" }}>
      <Typography variant="h5">Add a new Car </Typography>
      <TextField
        label="Car Name"
        variant="outlined"
        value={thisCar}
        onChange={handleChangeCar}
        sx={{ margin: "5px" }}
      />

      <TextField
        label="Car Km"
        variant="outlined"
        value={thisKm}
        onChange={handleChangeKm}
        sx={{ margin: "5px" }}
      />
      <Box>
        <Button
          onClick={handleSunClicked}
          variant="contained"
          sx={{ margin: "5px" }}
        >
          Add Car
        </Button>
      </Box>
    </Box>
  );
};
export default memo(MemoAddCarArry);
