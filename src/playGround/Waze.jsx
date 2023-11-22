import { Container, Button, Box } from "@mui/material";
import { useState } from "react";
let x = 0;
let sum = 0;
let y = -1;
let firstEvent;

const Waze = () => {
  const [thisbgc, setBgc] = useState("white");
  const [thisboll, setBoll] = useState(false);
  let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const ShowWays = (firstEvent, event) => {
    firstEvent.target.style.backgroundColor = "red";
    event.target.style.backgroundColor = "red";
    wazeFunc(firstEvent.target.innerText, event.target.innerText);
  };

  const wazeFunc = (num1, num2) => {
    if (num1 > num2) {
      sum += num1 - num2;
      setY(num1, num2);
    } else {
      sum += num2 - num1;
      setY(num2, num1);
    }
  };

  let handlefirstClick = (e) => {
    let event = e;
    x++;
    if (x !== 2) {
      firstEvent = event;
    } else {
      ShowWays(firstEvent, event);
    }
    changeBgc(e);
  };
  const changeBgc = (e) => {
    if (thisbgc === "white") {
      setBgc("yellow");
      e.target.style.backgroundColor = "white";
    } else if (thisbgc === "yellow") {
      setBgc("white");
    }
  };
  const setY = (num1, num2) => {
    if (sum !== 0) {
      setBoll(!thisboll);
      y = -1;
      y++;
      for (let i = num2; i <= num1; i++) {
        if (y === i) {
          return ">>";
        } else {
          return y;
        }
      }
    }
    if (y >= 199) {
      y = -1;
    }
    y++;
    return y;
  };

  return (
    <Container sx={{ mt: { xs: "20%", md: "20%", lg: "10%" } }}>
      {table.map((squre) => (
        <Box
          key={squre}
          sx={{
            textAlign: "center",
          }}
        >
          {table.map((squre) => (
            <Button
              key={squre + 10}
              sx={{
                border: "2px solid black",
                fontWeight: "bold",
                fontSize: "18pt",
                bgcolor: thisbgc,
              }}
              onClick={handlefirstClick}
            >
              {setY()}
            </Button>
          ))}
        </Box>
      ))}
    </Container>
  );
};
export default Waze;
