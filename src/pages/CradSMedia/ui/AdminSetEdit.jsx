import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import editSplit from "./profileUi/editSplit";
import AlertToEdit from "./profileUi/AlertToEdit";
import { validateEdit } from "../../../Validation/editValidation";

const circle = <CircularProgress />;
const AdminSetEdit = () => {
  const [thisValue, setVlue] = React.useState("");
  const [thisCircle, setCircle] = React.useState(" Edit User");
  const [errorsState, setErrorsState] = React.useState(null);
  const [thisAble, setAble] = React.useState(true);
  const [inputsValue, setInputsValue] = React.useState({
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
  const arr = editSplit(inputsValue);
  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSetBuzClick = async () => {
    try {
      const joiResponse = validateEdit(inputsValue);
      setErrorsState(joiResponse);
      if (joiResponse) return;
      let dataFromServer = await axios.put(`/users/${thisValue}`, request);
      setCircle(circle);
      toast(`You Edit User: ${thisValue} successfully . `, {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (err) {
      toast.info(`Unsuccess data error, ${err.response.data} `, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const handleChangeInput = (e) => {
    setVlue(e.target.value);
    setAble(false);
  };
  return (
    <Paper
      sx={{
        mt: "3%",
        padding: "30px",
        textAlign: "center",
        border: "1px solid black",
      }}
    >
      <Typography variant="h5" sx={{ padding: "10px", mb: "3%" }}>
        {thisCircle}
      </Typography>
      <TextField
        variant="outlined"
        label="USER ID"
        value={thisValue}
        onChange={handleChangeInput}
        sx={{ padding: "10px", ml: "3%", width: { xs: "70%", md: "40%" } }}
      />
      <Grid container spacing={2}>
        {arr.map((input) => (
          <Grid item key={input.name} sx={{ width: { xs: "100%", md: "50%" } }}>
            <TextField
              sx={{ width: "100%" }}
              name={input.name}
              required={input.require}
              fullWidth
              disabled={thisAble}
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
      <Button
        variant="contained"
        sx={{ padding: "10px", width: "50%" }}
        onClick={handleSetBuzClick}
        disabled={thisAble}
      >
        Set Update
      </Button>
    </Paper>
  );
};
export default AdminSetEdit;
