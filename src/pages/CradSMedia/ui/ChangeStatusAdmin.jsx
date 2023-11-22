import { Paper, Typography } from "@mui/material";

const ChangeStatusAdmin = ({ thisDis, myData }) => {
  console.log(myData);
  return (
    <Paper
      sx={{
        position: "absolute",
        width: "50%",
        height: "50%",
        bgcolor: "white",
        padding: "15px",
        margin: "0 auto",
        color: "black",
        display: thisDis,
      }}
    >
      <Typography variant="h5">Edit User Deatils</Typography>
      <Typography variant="subtitle1">
        Name: {/* {data.name.first} */}
      </Typography>
      <Typography variant="subtitle1">ID: {/* {data._id} */}</Typography>
      <Typography variant="subtitle1">
        Busniess Plan: {/* {data.isBusiness ? "Yes" : "No"} */}
      </Typography>
    </Paper>
  );
};
export default ChangeStatusAdmin;
