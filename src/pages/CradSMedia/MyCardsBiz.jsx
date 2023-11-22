import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CardComponentBiz from "./ui/cardsUi/CardComponentBiz";
import nextKey from "generate-my-key";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { useSelector } from "react-redux";
import homePageLike from "./ui/homePageLikeNormalize";

const MyCardBiz = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [optinalTitle, noneTitle] = useState(
    "So Go creat your first card right now!!"
  );
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/cards/my-cards")
      .then(({ data }) => {
        if (userData) data = homePageLike(data, userData._id);
        setDataFromServer(data);
        if (data.length !== 0) {
          noneTitle("");
        }
      })
      .catch((err) => {
        toast.info(`Unsuccess data error, ${err.response.data} `, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  }, [loggedIn]);
  const handleDeleteCard = async (_id) => {
    try {
      const { data } = await axios.delete("/cards/" + _id);
      setDataFromServer((dataFromServerCopy) =>
        dataFromServerCopy.filter((card) => card._id != _id)
      );
      toast.info("Success to Card Delete !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      toast.info(`Unsuccess data error, ${err.response.data} `, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const handleLikeCard = async (_id) => {
    try {
      const { data } = await axios.patch("/cards/" + _id);
      axios.get("/cards/my-cards").then(({ data }) => {
        if (userData) data = homePageLike(data, userData._id);
        setDataFromServer(data);
      });
    } catch (err) {
      toast.info(`Unsuccess Data Erro, ${err.response.data} `, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const handleCreateClick = () => {
    navigate(`${ROUTES.CREATE}`);
  };
  const handleEditCard = (_id, e) => {
    navigate(`${ROUTES.EDIT}/${_id}`);
    console.log(e.target);
  };
  return (
    <Container
      sx={{
        padding: "20px",
        mt: { xs: "20%", md: "5%", lg: "5%" },
        minHeight: "70vh",
      }}
    >
      <Button variant="contained" onClick={handleCreateClick}>
        Create A New Card
      </Button>
      <Divider>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            padding: "10px",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          MY CARDS
        </Typography>
      </Divider>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", padding: "10px", mb: "5%" }}
      >
        Here you can see the cards you created, and edit them. {optinalTitle}
      </Typography>

      <Grid container spacing={8}>
        {dataFromServer.map((card) => (
          <Grid item key={nextKey()} xs={12} sm={6} md={4} lg={6}>
            <CardComponentBiz
              _id={card._id}
              description={card.description}
              date={card.createdAt}
              title={card.title}
              subTitle={card.subtitle}
              phone={card.phone}
              address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
              img={card.image.url}
              alt={card.image.alt}
              onDeleteCard={handleDeleteCard}
              onEditCard={handleEditCard}
              onLikeCard={handleLikeCard}
              like={card.likes}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default MyCardBiz;
