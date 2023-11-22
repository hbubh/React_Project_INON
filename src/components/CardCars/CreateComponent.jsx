import { useState } from "react";
import {
  Container,
  TextField,
  Grid,
  Typography,
  Divider,
  Button,
} from "@mui/material";

const CreateCard = () => {
  const [inputsValue, setInputValue] = useState({
    icon: "",
    iconBgc: "",
    nameCar: "",
    price: "",
    img: "",
    content: "",
    year: "",
    market: "",
    hand: "",
    seller: "",
  });

  const handleInputChange = (e) => {
    setInputValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <Container sx={{ padding: "50px" }}>
      <Typography variant="h2" sx={{ mb: 1, padding: "10px", pb: "0px" }}>
        Create - Card
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, padding: "3px", ml: "14px" }}>
        Put a new values in the correct input
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid container flexDirection={"column"}>
        <TextField
          id="icon"
          label="icon"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.icon}
        />
        <TextField
          id="iconBgc"
          label="iconBgc"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.iconBgc}
        />
        <TextField
          id="nameCar"
          label="nameCar"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.nameCar}
        />
        <TextField
          id="price"
          label="price"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.price}
        />
        <TextField
          id="img"
          label="img"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.img}
        />
        <TextField
          id="content"
          label="content"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.content}
        />
        <TextField
          id="year"
          label="year"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.year}
        />
        <TextField
          id="market"
          label="market"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.market}
        />
        <TextField
          id="hand"
          label="hand"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.hand}
        />
        <TextField
          id="seller"
          label="seller"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.seller}
        />
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={8} md={8} sm={8} xs>
          <Button
            variant="outlined"
            sx={{ mt: 2, width: "100%", ml: "0%", bgcolor: "lightskyblue" }}
          >
            Create Card
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            variant="outlined"
            sx={{
              mt: 2,
              width: "100%",
              ml: "0%",
              bgcolor: "navy",
              color: "gray",
            }}
          >
            Discrad
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default CreateCard;
