import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import OnlineComponent from "./OnlineComponent";
import { useEffect, useState } from "react";
import axios from "axios";

const StatusUser = () => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const [thisName, setName] = useState("User Offline");
  const [thisColor, setColor] = useState("darkgray");
  const [thisBd, setBd] = useState("1px solid darkgray");
  const [thisOn, setOn] = useState("");
  const [thisDis, setDis] = useState("none");
  useEffect(() => {
    if (loggedIn) {
      axios
        .get(`/users/${userData._id}`)
        .then(({ data }) => {
          let { first } = data.name;
          setName(` ${first}  `);
          setColor("");
          setBd("");
          setDis("inline-block");
          setOn(<OnlineComponent />);
        })
        .catch((err) => {});
    }
  }, [loggedIn]);
  return (
    <Box>
      <Typography
        sx={{
          width: "100%",
          fontWeight: "bold",
          textAlign: "center",
          padding: "3px",
          color: thisColor,
          borderBottom: thisBd,
          textTransform: "uppercase",
        }}
        variant="body1"
      >
        {thisName}
        <span style={{ textTransform: "none", display: thisDis }}>online</span>
      </Typography>
      {thisOn}
    </Box>
  );
};
export default StatusUser;
