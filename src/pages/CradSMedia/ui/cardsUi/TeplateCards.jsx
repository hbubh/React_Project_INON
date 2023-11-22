import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import ROUTES from "../../../../routes/ROUTES";
import { Link } from "react-router-dom";
import AlertToCards from "./AlertToCards";

const TamplateCards = ({ handleCreateCardClick, errorsState }) => {
  const [thisAble, setAble] = React.useState(true);
  const [inputsValue, setInputValue] = useState({
    title: "",
    subtitle: "",
    phone: "",
    email: "",
    description: "",
    web: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });

  const arr = [
    { id: "title", label: "Title", require: true, value: inputsValue.title },
    {
      id: "subtitle",
      label: "Subtitle",
      require: true,
      value: inputsValue.subtitle,
    },
    { id: "phone", label: "Phone", require: true, value: inputsValue.phone },
    { id: "email", label: "Email", require: true, value: inputsValue.mail },
    {
      id: "description",
      label: "Description",
      require: true,
      value: inputsValue.description,
    },
    { id: "web", label: "Web", require: false, value: inputsValue.web },
    { id: "url", label: "IMG-Url", require: false, value: inputsValue.url },
    { id: "alt", label: "Alt", require: false, value: inputsValue.alt },
    { id: "state", label: "State", require: false, value: inputsValue.state },
    {
      id: "country",
      label: "Country",
      require: true,
      value: inputsValue.country,
    },
    { id: "city", label: "City", require: true, value: inputsValue.city },
    { id: "street", label: "Street", require: true, value: inputsValue.street },
    {
      id: "houseNumber",
      label: "HouseNumber",
      require: true,
      value: inputsValue.houseNumber,
    },
    { id: "zip", label: "Zip", require: false, value: inputsValue.zip },
  ];
  const handleInputChange = (e) => {
    setInputValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
    setAble(false);
  };
  const handleCreateCardClickS = () => {
    handleCreateCardClick(inputsValue);
  };
  return (
    <Container>
      {arr.map((ta) => (
        <TextField
          sx={{
            marginLeft: "1%",
            marginTop: "2%",
            width: { xs: "90%", md: "45%" },
          }}
          variant="outlined"
          id={ta.id}
          label={ta.label}
          value={ta.value}
          required={ta.require}
          key={ta.label}
          onChange={handleInputChange}
        />
      ))}
      <Box sx={{ width: "100%", padding: "10px" }}>
        <AlertToCards errorsState={errorsState} />
        <Button
          variant="outlined"
          sx={{
            mt: 2,
            marginRight: "1%",
            width: { xs: "100%", md: "70%" },
            ml: "0%",
            bgcolor: "lightskyblue",
            color: "blue",
          }}
          onClick={handleCreateCardClickS}
          disabled={thisAble}
        >
          Get Card!
        </Button>
        <Link to={ROUTES.HOME}>
          <Button
            variant="outlined"
            sx={{
              mt: 2,
              width: { xs: "90%", md: "25%" },
              ml: "0%",
              bgcolor: "navy",
              color: "gray",
            }}
          >
            Discrad
          </Button>
        </Link>
      </Box>
    </Container>
  );
};
export default TamplateCards;
