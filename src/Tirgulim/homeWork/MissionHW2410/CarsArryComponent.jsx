import { Button, Container, Typography } from "@mui/material";
import MemoCarsArry from "./MemoCarsArry";
import MemoAddCarArry from "./MemoAddCarArry";
import { useMemo, useState } from "react";

const carsArry = [
  { name: "Lexsus", km: 100000000 },
  { name: "Toyota", km: 200000000 },
  { name: "Mercedes", km: 1000000000 },
  { name: "BMW", km: 150000000 },
];

const CarsArryComponent = () => {
  const [showTotalKm, setTotalKm] = useState(0);
  const [thisArry, setArry] = useState(carsArry);
  const handleClicked = (thisCar, thisKm) => {
    setArry((currentState) => [...currentState, { name: thisCar, km: thisKm }]);
  };
  let n = showTotalKm;
  const saveNvalue = useMemo(() => {
    for (let i = 0; i <= 10 /* 1450000000 */; i++) {
      n++;
    }
    return n;
  }, []);
  const handleClickKm = () => {
    setTotalKm(n);
  };

  return (
    <Container sx={{ padding: "20px" }}>
      {thisArry.map((car, index) => (
        <MemoCarsArry key={index}>{car.name}</MemoCarsArry>
      ))}
      <MemoAddCarArry onClicked={handleClicked} />
      <Button onClick={handleClickKm}>Show Me Total KM Cars</Button>
      <Typography>{showTotalKm}</Typography>
    </Container>
  );
};
export default CarsArryComponent;
