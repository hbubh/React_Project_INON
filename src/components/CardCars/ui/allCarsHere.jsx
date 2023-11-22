import { Grid } from "@mui/material";
import RecipeReviewCard from "./CardCar";

let arrCars = [
  {
    icon: "B",
    iconBgc: "black",
    nameCar: "Lamburighini",
    price: "1,700,000 $",
    img: "https://th.bing.com/th/id/R.8e4494cb644feb87169b9a0a908b22ba?rik=Jz%2ftVeekTPmTIg&pid=ImgRaw&r=0",
    content: "The new LAMBU  for Sale! with 860 Hp and 0-100 in 2.4s",
    year: "October 2022",
    market: "1,680,000 $",
    hand: "01",
    seller: "Bob Cohen, New Mexico",
  },
  {
    icon: "A",
    iconBgc: "navy",
    nameCar: "Buggati",
    price: "3,500,000 $",
    img: "https://th.bing.com/th/id/R.2d3c6e1da7fa1691d245b7922a1d9fb8?rik=sCH1rDa975SooA&pid=ImgRaw&r=0",
    content: "Super Car By Buggati! with 930 Hp and 0-100 in 1.8s",
    year: "March 2020",
    market: "3,120,000 $",
    hand: "01",
    seller: "Ahmed Salah, Abu Dabi",
  },
  {
    icon: "S",
    iconBgc: "purple",
    nameCar: "Audi R8",
    price: "600,000 $",
    img: "https://1.bp.blogspot.com/-mj_Ey9dZ7dw/XrNIj4xIVDI/AAAAAAAAdC8/0odTpSd8tXscFIEFgza-vRoist_vMoguwCLcBGAsYHQ/s1600/Audi-R8-2021%2B%25281%2529.jpg",
    content: "New design from Audi R8! with 550 Hp and 0-100 in 2.6s",
    year: "April 2021",
    market: "530,000 $",
    hand: "01",
    seller: "Sofia ,LA",
  },
  {
    icon: "L",
    iconBgc: "black",
    nameCar: "Rolls Royce",
    price: "5,000,000 $",
    img: "https://th.bing.com/th/id/R.aec226679aa01c7d9b0442d59e30f77e?rik=DtZEVS7NszQJNw&pid=ImgRaw&r=0",
    content: "Bissnues Car For Professionals, with 650 Hp and 0-100 in 3.2s",
    year: "July 2023",
    market: "4,300,000 $",
    hand: "01",
    seller: "Larry ,Nyc",
  },
  {
    icon: "R",
    iconBgc: "black",
    nameCar: "Aston Martin",
    price: "2,000,000 $",
    img: "https://th.bing.com/th/id/R.cabfb0b6bf84ba0075f209f582998f27?rik=HC%2bEIMYSCLhjCw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-LQ5S3iRM31A%2fUHdsKYKI0EI%2fAAAAAAAABEg%2f60-JWm0dTKA%2fs1600%2fluxury_sports_cars_2012_aston_martin_virage.jpg&ehk=6VoZp2cSE7Nq6bRAnquKla8NoXA6FNPp%2f5JTrTsZvUA%3d&risl=&pid=ImgRaw&r=0",
    content: "Maximum comfort and power!. with 570Hp and 0-100 in 3s",
    year: "June 2023",
    market: "1,835,000 $",
    hand: "01",
    seller: "Ron ,Nyc",
  },
  {
    icon: "D",
    iconBgc: "red",
    nameCar: "Porche 911",
    price: "2,600,000 $",
    img: "https://th.bing.com/th/id/R.775c63966b3f06c653b1ae084bd32a15?rik=Ixdboz%2fPaK945w&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2fporsche_911_r_geneva_auto_2016-wide.jpg&ehk=HhniguuupZvdZZpqDWfki9naGVgMXmRkxjSGRjLx%2fvY%3d&risl=&pid=ImgRaw&r=0",
    content: "Maximum comfort and power!. with 720Hp and 0-100 in 1.9s",
    year: "June 2023",
    market: "2,150,000 $",
    hand: "02",
    seller: "David ,California",
  },
];

const AllCars = () => {
  return (
    <Grid
      container
      spacing={10}
      justifyContent={"space-around"}
      sx={{ width: "90%", padding: "30px", ml: "2%" }}
    >
      {arrCars.map((car) => (
        <Grid item xs lg={4}>
          <RecipeReviewCard
            nameCar={car.nameCar}
            price={car.price}
            icon={car.icon}
            img={car.img}
            content={car.content}
            year={car.year}
            market={car.market}
            hand={car.hand}
            seller={car.seller}
            iconBgc={car.iconBgc}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default AllCars;
