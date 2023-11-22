import { Box } from "@mui/material";
import AllCars from "./ui/allCarsHere";
import ResponsiveAppBar from "./ui/navBar";
import TitleText from "./ui/textTitle";
import FixedBottomNavigation from "./ui/bottom";
const Main = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <TitleText />
      <AllCars />
      <FixedBottomNavigation />
    </Box>
  );
};
export default Main;
