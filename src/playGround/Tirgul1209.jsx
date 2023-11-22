import { Typography } from "@mui/material";
import { Fragment } from "react";
/* import styles2 from "./Tirgul1209.module.css"; */

const TirgulFirst = () => {
  let n = 10;
  return (
    <Fragment>
      <Typography
        variant="h1"
        sx={[
          { color: "red", backgroundColor: "grey" },
          n === 10 && { color: "blue", backgroundColor: "yellow" },
        ]}
      >
        Welcome!
      </Typography>
      <Typography variant="h2" color={"#1976d2"}>
        To My Site
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor,
        impedit libero iure eum possimus facilis obcaecati voluptatibus
        perferendis sed!
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi iste
        maiores quia. Placeat consequuntur repellat nam dolores nisi sed
        dolorem!
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        totam amet nulla aperiam voluptatibus facere optio illo et ab
        laudantium.
      </Typography>
    </Fragment>
  );
};

export default TirgulFirst;
