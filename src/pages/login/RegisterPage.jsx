import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import axios from "axios";
import { toast } from "react-toastify";
import { validateRegister } from "../../Validation/registerValidation";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import rgisterAble from "./ui/rgisterAble";
import registerSplit from "./ui/RegisterSplit";
import AlertToRgister from "./ui/AlertToRgister";

const RegisterPage = () => {
  const [thisBus, setBus] = useState(false);
  const [errorsState, setErrorsState] = useState(null);
  const [thisAble, setAble] = useState(true);
  const navigate = useNavigate();
  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    email: "",
    password: "",
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
    email: inputsValue.email,
    password: inputsValue.password,
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
    isBusiness: thisBus,
  };
  const arr = registerSplit(inputsValue);

  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
    rgisterAble(inputsValue, setAble);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const joiResponse = validateRegister(inputsValue);
      setErrorsState(joiResponse);
      if (joiResponse) return;
      const { data } = await axios.post("/users", request);
      toast.success(
        "Success Register A User: " +
          inputsValue.first +
          " " +
          inputsValue.last,
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      navigate(ROUTES.LOGIN);
    } catch (err) {
      toast.warn(`Unsuccess Register A User, ${err.response.data} `, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleBusClick = (e) => {
    setBus(e.target.checked);
  };
  const handleLogClick = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        mt: { xs: "30%", md: "10%", lg: "10%" },
      }}
    >
      <Avatar
        sx={{
          color: "black",
          width: "100%",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <HowToRegIcon sx={{ fontSize: "35pt" }} />
        Sign up
      </Avatar>

      <Grid container sx={{ mt: 3 }}>
        <Grid item sx={{ width: { xs: "100%", md: "60%" } }}>
          <Grid container spacing={2}>
            {arr.map((input) => (
              <Grid item key={input.name} sx={{ width: "50%" }}>
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
          </Grid>
        </Grid>
        <AlertToRgister errorsState={errorsState} />

        <Grid item xs={12}>
          <FormControlLabel
            onChange={handleBusClick}
            control={<Checkbox value={thisBus} color="primary" required />}
            label="Business Account"
          />
        </Grid>
      </Grid>
      <Button
        onClick={handleSubmit}
        disabled={thisAble}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, width: "49%" }}
      >
        Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link onClick={handleLogClick} variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterPage;
