import { Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PopUpBuz from "./PopUpBuz";
import axios from "axios";
import ROUTES from "../../../../routes/ROUTES";
import { toast } from "react-toastify";
import { useState } from "react";

const circle = <CircularProgress sx={{ ml: "50%" }} />;
const ProfileSetBuz = ({ thisId, thisPop, cancelBuz }) => {
  const [thisCircle, setCircle] = useState("");
  const navigate = useNavigate();
  const handleBuzClick = async () => {
    try {
      let id = thisId;
      let dataFromServer = await axios.patch(`/users/${id}`);
      setCircle(circle);
      toast("You Upgrade your User to Busniess successfully . ", {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
        navigate(ROUTES.HOME);
      }, 4000);
    } catch (err) {
      toast.info(`Unsuccess data error, ${err.response.data} `, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const handleCancelClick = () => {
    cancelBuz();
  };
  return (
    <Box sx={{ display: thisPop }}>
      <PopUpBuz createBuz={handleBuzClick} cancelBuz={handleCancelClick} />
      {thisCircle}
    </Box>
  );
};
export default ProfileSetBuz;
