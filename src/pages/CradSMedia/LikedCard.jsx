import { Container, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import nextKey from "generate-my-key";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import homePageLike from "./ui/homePageLikeNormalize";
import { useSelector } from "react-redux";
import CardComponent from "./ui/cardsUi/CardComponent";

const LikedCard = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [thisDis, setDis] = useState("block");
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        if (userData) data = homePageLike(data, userData._id);
        for (let card of data) {
          if (card.likes) {
            setDis("none");
          }
        }
        setDataFromServer(data);
        setDataFromServer((dataFromServerCopy) =>
          dataFromServerCopy.filter((card) => card.likes != false)
        );
      })

      .catch((err) => {
        console.log("err", err);
      });
  }, [loggedIn]);

  const handleLikeCard = async (_id) => {
    try {
      const { data } = await axios.patch("/cards/" + _id);
      axios
        .get("/cards")
        .then(({ data }) => {
          if (userData) data = homePageLike(data, userData._id);
          setDataFromServer(data);
          setDataFromServer((dataFromServerCopy) =>
            dataFromServerCopy.filter((card) => card.likes != false)
          );
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (err) {
      toast.warn(
        " To perform this type of operation, you must log in to the system !",
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
      console.log(err);
    }
  };
  const handleEditCard = (_id) => {
    navigate(`${ROUTES.EDIT}`);
  };
  return (
    <Container
      sx={{
        padding: "20px",
        mt: { xs: "20%", md: "5%", lg: "5%" },
        minHeight: "70vh",
      }}
    >
      <Divider>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            padding: "20px",
            mb: { xs: "5%", md: "0", lg: "0" },
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          LIKED CARDS
        </Typography>
      </Divider>

      <Grid container spacing={8}>
        {dataFromServer.map((card) => (
          <Grid item key={nextKey()} xs={12} sm={6} md={4} lg={6}>
            <CardComponent
              _id={card._id}
              date={card.createdAt}
              description={card.description}
              title={card.title}
              subTitle={card.subtitle}
              phone={card.phone}
              address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
              img={card.image.url}
              alt={card.image.alt}
              like={card.likes}
              cardNumber={card.cardNumber}
              onEditCard={handleEditCard}
              onLikeCard={handleLikeCard}
            />
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h6"
        sx={{
          display: thisDis,
          mt: "15%",
          textAlign: { xs: "justify", md: "center" },
        }}
      >
        This Page will show you all cards you had like before... Now its look
        like you dont like nathing...
      </Typography>
    </Container>
  );
};
export default LikedCard;
