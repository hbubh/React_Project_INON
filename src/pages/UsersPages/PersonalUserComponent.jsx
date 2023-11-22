import { Grid, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

const UserComponent = ({ children }) => {
  return (
    <Grid container justifyContent={"space-between"} sx={{ padding: "20px" }}>
      <Grid item>
        <Link to={ROUTES.USERS}>
          <IconButton sx={{ color: "blue" }}>
            <ReplyOutlinedIcon sx={{ fontSize: "30pt", padding: "5px" }} />
          </IconButton>
        </Link>
      </Grid>
      <Grid item lg={11}>
        <Typography variant="h4" sx={{ padding: "15px" }}>
          Hello{" "}
          <span
            id="span"
            style={{
              fontWeight: "bold",
              color: "blue",
              transition: "all 0.3s",
            }}
          >
            {children}
          </span>{" "}
          And Welcome Back
        </Typography>
      </Grid>
    </Grid>
  );
};
export default UserComponent;
