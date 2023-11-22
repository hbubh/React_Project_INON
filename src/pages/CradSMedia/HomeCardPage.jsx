import { useEffect, useState } from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import CardComponent from "./ui/cardsUi/CardComponent";
import axios from "axios";
import { toast } from "react-toastify";
import Title from "./ui/Title";
import { useSelector } from "react-redux";
import homePageLike from "./ui/homePageLikeNormalize";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import useQueryParams from "../../hooks/useQuaryParams";
import scroll from "./ui/Scroll";
let initialDataFromServer = [];
const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [thisTitle, setTitle] = useState("Our Community!");
  const [thisName, setName] = useState("");
  const [thisDis, setDis] = useState("none");
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const query = useQueryParams();
  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        if (userData) data = homePageLike(data, userData._id);
        initialDataFromServer = data;
        setDataFromServer(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [loggedIn]);

  useEffect(() => {
    if (!initialDataFromServer.length) return;
    const filter = query.filter ? query.filter : "";
    setDataFromServer(
      initialDataFromServer.filter((card) => card.title.startsWith(filter))
    );
  }, [query, initialDataFromServer]);

  useEffect(() => {
    if (loggedIn) {
      setTitle("Welcome Back");
      axios
        .get(`/users/${userData._id}`)
        .then(({ data }) => {
          let { first } = data.name;
          let { last } = data.name;
          setName(` ${first} ${last}`);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [loggedIn]);

  const setBlock = () => {
    setTimeout(() => {
      setDis("block");
    }, 2500);
  };

  window.addEventListener("scroll", setBlock);
  const handleUpClick = () => {
    window.scrollTo(0, 0);
    setDis("none");
  };

  const handleLikeCard = async (_id) => {
    try {
      const { data } = await axios.patch("/cards/" + _id);
      axios
        .get("/cards")
        .then(({ data }) => {
          if (userData) data = homePageLike(data, userData._id);
          setDataFromServer(data);
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
  return (
    <Container
      sx={{
        padding: "0px",
        mt: { xs: "20%", md: "5%", lg: "5%" },
        minHeight: "70vh",
      }}
    >
      {!loggedIn && <Title />}
      <Box
        sx={{
          width: "100%",
          height: "10vh",
        }}
      ></Box>
      <Divider>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            padding: "20px",
            fontSize: { xs: "2rem" },
            marginTop: { xs: "0%", sm: "0", md: "0", lg: "0" },
          }}
        >
          {thisTitle} <br />
          <span style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            {thisName}
          </span>
        </Typography>
      </Divider>
      <KeyboardDoubleArrowUpIcon
        sx={{
          ml: { xs: "80%", md: "-5%", lg: "-5%" },
          position: "fixed",
          display: thisDis,
          border: "2px solid black",
          borderRadius: "15px",
          fontSize: { xs: "25pt", md: "35pt" },
        }}
        onClick={handleUpClick}
      />
      <Box sx={{ width: "100%", height: "5vh" }}></Box>
      <Grid container spacing={8}>
        {dataFromServer.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={6} sx={{}}>
            <CardComponent
              _id={card._id}
              date={card.createdAt}
              description={card.description}
              title={card.title}
              subTitle={card.subtitle}
              phone={card.phone}
              address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
              img={card.image.url}
              like={card.likes}
              alt={card.image.alt}
              onLikeCard={handleLikeCard}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
