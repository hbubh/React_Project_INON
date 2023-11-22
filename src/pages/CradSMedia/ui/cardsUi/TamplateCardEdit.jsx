import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ROUTES from "../../../../routes/ROUTES";
import { Link } from "react-router-dom";
import axios from "axios";

let newData = [];
const TamplateCardsEdit = ({ _id, handleCreateCardClick }) => {
  const [inputsValue, setInputValue] = useState({
    title: "",
    subtitle: "",
    phone: "",
    add: "",
    mail: "",
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

  useEffect(() => {
    axios
      .get("/cards/" + _id)
      .then(({ data }) => {
        const newData = {
          title: data.title,
          subtitle: data.subtitle,
          description: data.description,
          phone: data.phone,
          email: data.email,
          web: data.web,
          url: data.image.url,
          alt: data.image.alt,
          state: data.address.state,
          country: data.address.country,
          city: data.address.city,
          street: data.address.street,
          houseNumber: data.address.houseNumber,
          zip: +data.address.zip,
        };
        setInputValue(newData);

        console.log(inputsValue);
        console.log(newData);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const arrKeys = [
    "title",
    "subtitle",
    "description",
    "phone",
    "email",
    "web",
    "url",
    "alt",
    "state",
    "country",
    "city",
    "street",
    "houseNumber",
    "zip",
  ];

  const handleInputChange = (e) => {
    setInputValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleCreateCardClickS = () => {
    handleCreateCardClick(inputsValue);
  };
  return (
    <Container>
      {arrKeys.map((ta) => (
        <TextField
          sx={{ marginLeft: "1%", marginTop: "2%", width: "45%" }}
          variant="outlined"
          id={newData.id}
          label={ta}
          value={inputsValue.ta}
          required={newData.require}
          key={ta.id}
          onChange={handleInputChange}
        />
      ))}
      <Box sx={{ width: "100%", padding: "10px" }}>
        <Button
          variant="outlined"
          sx={{
            mt: 2,
            marginRight: "1%",
            width: "70%",
            ml: "0%",
            bgcolor: "lightskyblue",
            color: "blue",
          }}
          onClick={handleCreateCardClickS}
        >
          Get Card!
        </Button>
        <Link to={ROUTES.HOME}>
          <Button
            variant="outlined"
            sx={{
              mt: 2,
              width: "25%",
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
export default TamplateCardsEdit;
