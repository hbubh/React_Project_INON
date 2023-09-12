import { Typography } from "@mui/material";
import { Fragment } from "react";
import styles2 from "./Tirgul1209.module.css";

const TirgulFirst = () => {
  return (
    <Fragment>
      <Typography variant="h1">Welcome!</Typography>
      <Typography variant="h2">To My Site</Typography>
      <Typography className={styles2.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor,
        impedit libero iure eum possimus facilis obcaecati voluptatibus
        perferendis sed!
      </Typography>
      <Typography className={styles2.p2}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi iste
        maiores quia. Placeat consequuntur repellat nam dolores nisi sed
        dolorem!
      </Typography>
      <Typography
        style={{
          fontWeight: "bold",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        totam amet nulla aperiam voluptatibus facere optio illo et ab
        laudantium.
      </Typography>
    </Fragment>
  );
};

export default TirgulFirst;
