import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Container } from "@mui/material";

const LoadingPageComponent = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Container sx={{ width: "100%", bgcolor: "darkgray" }}>
      <Box sx={{ width: "70%", marginLeft: "15%" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Container>
  );
};
export default LoadingPageComponent;
