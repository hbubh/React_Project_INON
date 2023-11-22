import { Container, Grid, Typography, Divider, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import TamplateCards from "./ui/cardsUi/TeplateCards";
import { toast } from "react-toastify";
import { validateCard } from "../../Validation/cardValidation";
import { useState } from "react";

const EditCardPage = () => {
  const [errorsState, setErrorsState] = useState(null);
  const navigate = useNavigate();
  const { _id } = useParams();

  const handleCreateCardClickS = async (inputsValue) => {
    try {
      const joiResponse = validateCard(inputsValue);
      setErrorsState(joiResponse);
      if (joiResponse) return;
      const { data } = await axios.put("/cards/" + _id, {
        title: inputsValue.title,
        subtitle: inputsValue.subtitle,
        description: inputsValue.description,
        phone: inputsValue.phone,
        email: inputsValue.email,
        web: inputsValue.web,
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
      });
      navigate(ROUTES.MYCARDS);
      toast.success(" Your Card is Created !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (err) {
      toast.warn(`There is A Problem, Error: ${err.response.data} `, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  return (
    <Container sx={{ padding: "50px", mt: { xs: "20%", md: "5%", lg: "5%" } }}>
      <Typography variant="h2" sx={{ mb: 1, padding: "10px", pb: "0px" }}>
        Card - Edit
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, padding: "3px", ml: "7px" }}>
        Put a new values in the correct input
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid container flexDirection={"column"} spacing={2}>
        <TamplateCards
          handleCreateCardClick={handleCreateCardClickS}
          errorsState={errorsState}
        />
      </Grid>
    </Container>
  );
};
export default EditCardPage;
