import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TemplateFunc = ({ name, last, age, _id, onRemove, nameLink }) => {
  const hendleRemove = () => {
    onRemove(_id);
  };
  return (
    <Box sx={{ padding: "10px" }}>
      <Typography variant="h5">{name}</Typography>
      <Typography>{last}</Typography>
      <Typography>{age}</Typography>
      <Typography>User Number: {_id}</Typography>
      <Grid
        container
        justifyContent={"space-evenly"}
        sx={{
          border: "1px solid black",
          borderRight: "none",
          borderLeft: "none",
        }}
      >
        <Link to={nameLink} style={{ textDecoration: "none" }}>
          <Typography variant="body1" sx={{ color: "purple", padding: "5px" }}>
            User Page
          </Typography>
        </Link>
        <Button onClick={hendleRemove}>Remove User</Button>
      </Grid>

      <Divider />
    </Box>
  );
};
TemplateFunc.propTypes = {
  name: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TemplateFunc;
