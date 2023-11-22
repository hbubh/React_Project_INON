import { Box, Button } from "@mui/material";
import { useState } from "react";
import MemoArrComponent from "./MemoArrComponent";

const animalArry = ["dog", "cat", "lion", "fish", "horse"];
const RenderComponent = () => {
  const [thisValue, setValue] = useState(true);
  const handleClick = () => {
    setValue(!thisValue);
    console.log(thisValue);
  };
  return (
    <Box>
      <Button onClick={handleClick}>Change Value</Button>
      {animalArry.map((animal, index) => (
        <MemoArrComponent key={index}>{animal}</MemoArrComponent>
      ))}
    </Box>
  );
};
export default RenderComponent;
