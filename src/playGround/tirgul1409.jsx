import { Container, Box, Button, Divider } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";

const NavBarComponent = () => {
  return (
    <Container style={{ padding: "10px" }}>
      <Box display="flex" justifyContent="space-evenly">
        <Button
          startIcon={<BoltIcon />}
          endIcon={<BoltIcon />}
          variant="contained"
        >
          contained
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button startIcon={<BoltIcon />} variant="outlined">
          outlined
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button endIcon={<BoltIcon />}>text</Button>
        <Divider orientation="vertical" flexItem />
        <Button variant="contained" disabled>
          disabled
        </Button>
      </Box>
      <Divider></Divider>
    </Container>
  );
};
export default NavBarComponent;
