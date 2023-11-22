import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";

const circle = <CircularProgress />;
let userArr = ["Inon", "Elisheva", "Eden"];

const ArrUsers = () => {
  const navigate = useNavigate();
  const [thisArr, setArr] = useState([circle]);
  // אם אנחנו רוצים שהעיגול טעינה יישאר, ויהיה חלק מהמערך מה צריך לעשות בשביל זה?
  useEffect(() => {
    setTimeout(() => {
      setArr(userArr);
    }, 3000);
  }, []);
  const handleNavigate = (e) => {
    navigate(`${ROUTES.HOMEWORK}/${ROUTES.ARRHW}/${e.target.innerHTML}`);
  };
  return (
    <Box>
      {thisArr.map((user) => (
        <Typography
          onClick={handleNavigate}
          sx={{
            margin: "5px",
            fontWeight: "bold",
            borderBottom: "1px solid black",
            marginTop: "5px",
            width: "60%",
            fontSize: "14pt",
          }}
        >
          {user}
        </Typography>
      ))}
    </Box>
  );
};
export default ArrUsers;
