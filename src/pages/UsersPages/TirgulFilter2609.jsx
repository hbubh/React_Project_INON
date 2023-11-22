import { Container } from "@mui/material";
import { useState } from "react";
import TemplateFunc from "./ComponentTirgul2609";
import nextKey from "generate-my-key";
import { Outlet } from "react-router-dom";

let users = [
  {
    nameLink: "inon",
    name: "Inon",
    last: "Genish",
    age: "25",
    _id: "01",
  },
  {
    nameLink: "eden",
    name: "Eden",
    last: "Drori",
    age: "25",
    _id: "02",
  },
  {
    nameLink: "shani",
    name: "Shani",
    last: "Ohayon",
    age: "25",
    _id: "03",
  },
  {
    nameLink: "elishave",
    name: "Elisheva",
    last: "Segal",
    age: "13",
    _id: "04",
  },
];

const UsersFunc = () => {
  const [arrUsres, setNewData] = useState(users);
  const handleRemove = (_id) => {
    setNewData((currentState) =>
      currentState.filter((card) => card._id !== _id)
    );
  };
  return (
    <Container sx={{ padding: "30px" }}>
      {arrUsres.map((user) => (
        <TemplateFunc
          key={nextKey()}
          name={user.name}
          last={user.last}
          age={user.age}
          _id={user._id}
          nameLink={user.nameLink}
          onRemove={handleRemove}
        />
      ))}
      <Outlet />
    </Container>
  );
};
export default UsersFunc;
