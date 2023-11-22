import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

const MyTodo = () => {
  const Task = { todo: "" };
  const [myValue, changeValue] = useState(Task);
  const [myValueS, changeValueS] = useState([]);

  const setTask = (e) => {
    e.preventDefault();
    changeValueS([...myValueS, myValue]);
    return changeValue(Task);
  };

  return (
    <Container>
      <Box
        sx={{
          width: "50%",
          height: "auto",
          border: "3px solid darkgray",
          padding: "20px",
          borderRadius: "15px",
          color: "black",
          fontWeight: "bold",
          bgcolor: "grey",
        }}
      >
        <Typography variant="h4" sx={{ padding: "20px", fontWeight: "bold" }}>
          Task{" "}
          <span
            style={{
              fontSize: "20pt",
              fontWeight: "bold",
              color: "darkgray",
              padding: "5px",
            }}
          >
            {myValue.todo}
          </span>
        </Typography>
        <Box>
          <TextField
            type="text"
            sx={{ width: "60%", marginLeft: "5%" }}
            value={myValue.todo}
            onChange={(e) => changeValue({ ...myValue, todo: e.target.value })}
          />
          <Button
            disabled={!myValue.todo}
            onClick={setTask}
            variant="contained"
            sx={{ width: "15%", marginLeft: "5%" }}
          >
            Create
          </Button>
        </Box>
        <ul>
          {myValueS.map((todo, index) => (
            <li key={index}>
              {index + 1}.{todo.todo}
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
};
export default MyTodo;
