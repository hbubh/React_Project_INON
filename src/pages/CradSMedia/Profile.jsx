import { Box, Button, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileSetBuz from "./ui/profileUi/ProfileSetBuz";
import DeleteUser from "./ui/profileUi/DeleteUser";
import EditProfile from "./ui/profileUi/EditProfile";
import { toast } from "react-toastify";

const Profile = () => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const [thisFirstName, setFirstName] = useState("error on load..");
  const [thisLastName, setLastName] = useState("error on load..");
  const [thisPhone, setPhone] = useState("error on load..");
  const [thisEmail, setEmail] = useState("error on load..");
  const [thisAdd, setAdd] = useState("error on load..");
  const [thisCreate, setCreate] = useState("error on load..");
  const [thisPop, setPop] = useState("none");
  const [thisId, setId] = useState("error on load..");
  const [thisBus, setBus] = useState("error on load..");
  const [thisAdmin, setAdmin] = useState("error on load..");
  const [thisUrl, setUrl] = useState("error on load..");
  const [thisAlt, setAlt] = useState("error on load..");
  const [thisDisplay, setDisplay] = useState("none");
  const [thisOpa, setOpa] = useState("1");
  const sx = { borderBottom: "2px solid black", padding: "3px" };

  useEffect(() => {
    axios
      .get(`/users/${userData._id}`)
      .then(({ data }) => {
        setFirstName(data.name.first);
        setLastName(data.name.last);
        setPhone(data.phone);
        setEmail(data.email);
        setCreate(data.createdAt);
        setAdd(
          `${data.address.country}, ${data.address.city}, ${data.address.street}, ${data.address.houseNumber}`
        );
        setId(data._id);
        setUrl(data.image.url);
        setAlt(data.image.alt);
        {
          data.isBusiness ? setBus("Yes") : setBus("No");
        }
        {
          data.isBusiness ? setDisplay("none") : setDisplay("inline-block");
        }
        {
          data.isAdmin ? setAdmin("Yes") : setAdmin("No");
        }
      })
      .catch((err) => {
        toast.info(`Unsuccess edit  User, ${err.response.data} `, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  }, [loggedIn]);

  const handleBuzUpgrade = () => {
    setPop("block");
    setOpa("0.4");
  };
  const handleCancelClick = () => {
    setPop("none");
    setOpa("1");
  };

  return (
    <Container sx={{ mt: { xs: "20%", md: "5%", lg: "5%" } }}>
      <Grid container sx={{ width: "100%", paddingTop: "30px" }}>
        <Grid
          item
          sx={{
            width: { xs: "100%", md: "75%" },
            opacity: thisOpa,
            transition: "all 1s",
          }}
        >
          {" "}
          <Typography
            variant="h3"
            sx={{
              marginBottom: "5%",
              display: "inline-block",
              width: "70%",
              fontFamily: "fantasy",
            }}
          >
            User Profile
          </Typography>
          <Box
            sx={{
              width: "25%",
              padding: "15px",
              display: "inline-block",
            }}
          >
            <EditProfile thisId={thisId} />
            <Box sx={{ width: "1%", display: "inline-block" }} />
            <DeleteUser thisId={thisId} />
          </Box>
          <Typography
            sx={{ marginTop: "2%", fontSize: "19pt" }}
            variant="subtitle1"
          >
            Name:{" "}
            <Typography sx={sx}>
              {thisFirstName} {thisLastName}
            </Typography>
          </Typography>
          <Typography
            sx={{ marginTop: "2%", fontSize: "19pt" }}
            variant="subtitle1"
          >
            Phone: <Typography sx={sx}>{thisPhone}</Typography>
          </Typography>
          <Typography
            sx={{ marginTop: "2%", fontSize: "19pt" }}
            variant="subtitle1"
          >
            Email: <Typography sx={sx}>{thisEmail}</Typography>
          </Typography>
          <Typography
            sx={{ marginTop: "2%", fontSize: "19pt" }}
            variant="subtitle1"
          >
            Address: <Typography sx={sx}>{thisAdd}</Typography>
          </Typography>
          <Typography
            sx={{ marginTop: "2%", fontSize: "19pt" }}
            variant="subtitle1"
          >
            User Created: <Typography sx={sx}>{thisCreate}</Typography>
          </Typography>
          <Typography
            sx={{ marginTop: "2%", fontSize: "19pt" }}
            variant="subtitle1"
          >
            User ID: <Typography sx={sx}>{thisId}</Typography>
          </Typography>
          <Typography
            sx={{ marginTop: "2%", fontSize: "19pt" }}
            variant="subtitle1"
          >
            Business Plan:{" "}
            <Typography sx={sx}>
              {thisBus}{" "}
              <Button
                onClick={handleBuzUpgrade}
                sx={{
                  display: thisDisplay,
                  bgcolor: "lightgrey",
                  color: "blue",
                  ml: "2%",
                }}
                variant="outlined"
              >
                Upgrade
              </Button>
            </Typography>
          </Typography>
          <Typography
            sx={{ marginTop: "2%", fontSize: "19pt" }}
            variant="subtitle1"
          >
            Admin Plan: <Typography sx={sx}>{thisAdmin}</Typography>
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ width: { xs: "100%", md: "25%" }, paddingLeft: "20px" }}
        >
          <ProfileSetBuz
            cancelBuz={handleCancelClick}
            thisPop={thisPop}
            thisId={thisId}
          />{" "}
          <Box
            sx={{
              bgcolor: "white",
              width: "100%",
              height: "auto",
              padding: "50px",
              borderRadius: "50px",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "auto",
                opacity: thisOpa,
                transition: "all 1s",
              }}
              src={thisUrl}
              alt={thisAlt}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Profile;
