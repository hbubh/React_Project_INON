import { Container, Grid } from "@mui/material";
import nextKey from "generate-my-key";
import CardComponent from "../../components/CardComponent";

let dataFromServer = [
  {
    _id: "650ae1b9ae22ab105f45531d",
    title: "title 1",
    subTitle: "sub title 1",
    phone: "050-50505050",
    address: "asdfasdfsadfasdf",
    img: "https://pngimg.com/d/free_PNG90775.png",
    alt: "yes",
    cardNumber: 35154354,
  },
  {
    _id: "650ae1b9ae22ab105f45531e",
    title: "title 1",
    subTitle: "sub title 2",
    phone: "050-50505050",
    address: "asdfasdfsadfasdf",
    img: "https://pngimg.com/d/free_PNG90775.png",
    alt: "yes",
    cardNumber: 35154354,
  },
  {
    _id: "650ae1b9ae22ab105f45531f",
    title: "title 3",
    subTitle: "sub title 3",
    phone: "050-50505050",
    address: "asdfasdfsadfasdf",
    img: "https://pngimg.com/d/free_PNG90775.png",
    alt: "yes",
    cardNumber: 35154354,
  },
  {
    _id: "650ae1b9ae22ab105f455320",
    title: "title 4",
    subTitle: "sub title 4",
    phone: "050-50505050",
    address: "asdfasdfsadfasdf",
    img: "https://pngimg.com/d/free_PNG90775.png",
    alt: "yes",
    cardNumber: 35154354,
  },
];

const HomePage = () => {
  const handleDeleteCard = (_id) => {
    console.log("_id to delete (HomePage)", _id);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        {dataFromServer.map((card) => (
          <Grid item key={nextKey()} xs={12} sm={6} md={4} lg={3}>
            <CardComponent
              _id={card._id}
              title={card.title}
              subTitle={card.subTitle}
              phone={card.phone}
              address={card.address}
              img={card.img}
              alt={card.alt}
              cardNumber={card.cardNumber}
              onDeleteCard={handleDeleteCard}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
