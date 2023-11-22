import { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import nextKey from "generate-my-key";
import CardComponent from "../../components/CardComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import { getToken } from "../../service/storageService";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import homePageNormalization from "./homePageNormalization";
import useQueryParams from "../../hooks/useQueryParams";
import { toast } from "react-toastify";

const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [initialDataFromServer, setInitialDataFromServer] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios
  //     .get("/cards")
  //     .then(({ data }) => {
  //       console.log("data like", data);
  //       setDataFromServer(data);
  //       let token = getToken();
  //       console.log("tokennnn", token);
  //       let idFromToken = jwtDecode(token)._id;
  //       console.log("id token2", idFromToken);

  //       for (let card of data) {
  //         let likeArray = [];
  //         likeArray = card.likes;
  //         for (let i = 0; i <= likeArray.length; i++)
  //           if (likeArray[i] == idFromToken) {
  //             console.log("i", likeArray[i]);
  //             card.favoriteIconColor = "red";
  //           }
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // }, []);

  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const query = useQueryParams();
  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        if (userData) data = homePageNormalization(data, userData._id);
        console.log("data", data);
        setInitialDataFromServer(data);
        setDataFromServer(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  useEffect(() => {
    console.log(initialDataFromServer, "init");
    if (!initialDataFromServer.length) return;
    const filter = query.filter ? query.filter : "";
    console.log("filter", filter);
    setDataFromServer(
      initialDataFromServer.filter((card) => card.title.startsWith(filter))
    );
  }, [query, initialDataFromServer]);

  const handleDeleteCard = async (_id) => {
    try {
      const { data } = await axios.delete("/cards/" + _id);
      setDataFromServer((dataFromServerCopy) =>
        dataFromServerCopy.filter((card) => card._id != _id)
      );
    } catch (err) {
      toast("You can only delete your cards", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("err to delete", err);
    }
  };
  const handleEditCard = async (_id) => {
    try {
      const { data } = await axios.get("/cards/" + _id);
      if (data.user_id == userData._id) {
        navigate(`${ROUTES.EDITCARD}/${_id}`);
      } else {
        toast("You can only edit your cards", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      console.log("not allowed");
    }
  };
  const handleLikeCard = async (_id) => {
    try {
      const { data } = await axios.patch("/cards/" + _id);
      console.log("id to like", data);

      // favoriteIconColor = "red";
      // if (!data.likes.length) {
      //   console.log("lliked card");
      // }
      setInitialDataFromServer(
        initialDataFromServer.map((card) =>
          card._id == _id ? { ...card, likes: !card.likes } : card
        )
      );
      console.log("init err", initialDataFromServer);
    } catch (err) {
      console.log("like err", err);
    }
  };

  const handleLikeSuccess = (_id) => {
    setInitialDataFromServer(
      initialDataFromServer.map((card) =>
        card._id == _id ? { ...card, likes: !card.likes } : card
      )
    );
  };

  return (
    <Container sx={{ paddingBottom: "60px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" sx={{ mb: 1, padding: "20px", pb: "0px" }}>
          Welcome To My Site!
        </Typography>
      </div>
      <Grid container spacing={2}>
        {dataFromServer.map((card) => (
          <Grid item key={nextKey()} xs={12} sm={6} md={4} lg={3}>
            <CardComponent
              _id={card._id}
              title={card.title}
              subTitle={card.subtitle}
              phone={card.phone}
              address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
              img={card.image.url}
              alt={card.image.alt}
              like={card.likes}
              cardNumber={card.cardNumber}
              onDeleteCard={handleDeleteCard}
              onEditCard={handleEditCard}
              onLikeCard={handleLikeCard}
              //  favoriteIconColor={card.favoriteIconColor}
              onLikeSuccess={handleLikeSuccess}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
