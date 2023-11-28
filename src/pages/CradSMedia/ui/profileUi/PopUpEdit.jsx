import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AlertToEdit from "./AlertToEdit";
import editSplit from "./editSplit";
import { validateEdit } from "../../../../Validation/editValidation";

const PopUpEdit = ({ createEdit, cancelEdit }) => {
  const [errorsState, setErrorsState] = useState(null);

  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    phone: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });
  let request = {
    name: {
      first: inputsValue.first,
      middle: inputsValue.middle,
      last: inputsValue.last,
    },
    phone: inputsValue.phone,
    image: {
      url: inputsValue.url,
      alt: inputsValue.alt,
    },
    address: {
      state: inputsValue.state,
      country: inputsValue.country,
      city: inputsValue.city,
      street: inputsValue.street,
      houseNumber: inputsValue.houseNumber,
      zip: +inputsValue.zip,
    },
  };
  const handleApplyClick = () => {
    const joiResponse = validateEdit(inputsValue);
    setErrorsState(joiResponse);
    if (joiResponse) return;
    createEdit(request);
  };
  const handleCancelClick = () => {
    cancelEdit();
  };
  const arr = editSplit(inputsValue);
  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <Box
      sx={{
        padding: "50px",
        width: { xs: "100vw", md: "40vw" },
        height: "120vh",
        margin: { xs: "-100vh -20vw", md: "-50vh -10vw" },
        textAlign: "center",
        bgcolor: "white",
        position: "absolute",
        color: "black",
        zIndex: "5",
      }}
    >
      <Box
        sx={{
          padding: "30px",
          bgcolor: "grey",
          border: "3px solid white",
        }}
      >
        <Typography variant="h3">Edit User!?</Typography>
        <Typography variant="subtitle2" sx={{ mt: "2%", mb: "10%" }}>
          Update Your User Deatlis. for that you need to RECONECET after your
          confirom
        </Typography>
        <Grid container spacing={2}>
          {arr.map((input) => (
            <Grid
              item
              key={input.name}
              sx={{ width: { xs: "100%", md: "50%" } }}
            >
              <TextField
                sx={{ width: "100%" }}
                name={input.name}
                required={input.require}
                fullWidth
                id={input.id}
                label={input.label}
                type={input.name}
                autoFocus
                value={input.value}
                onChange={handleInputsChange}
              />{" "}
            </Grid>
          ))}
          <AlertToEdit errorsState={errorsState} />
        </Grid>
        <Box sx={{ padding: "15px" }}>
          <Button
            variant="outlined"
            sx={{
              display: "inline-block",
              width: { xs: "70%", md: "35%" },
              bgcolor: "lightblue",
              color: "black",
            }}
            onClick={handleApplyClick}
          >
            Update User
          </Button>
          <Button
            variant="outlined"
            sx={{ display: "inline-block", color: "white" }}
            onClick={handleCancelClick}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default PopUpEdit;
