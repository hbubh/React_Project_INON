import { Box, Button } from "@mui/material";
import axios from "axios";
import ROUTES from "../../../../routes/ROUTES";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Fragment, useState } from "react";
import PopUpDelete from "./PopUpDelete";

const DeleteUser = ({ thisId }) => {
  const navigate = useNavigate();
  const [thisDisplay, setDisplay] = useState("none");
  const [thisOp, setOp] = useState("1");
  const handleDeleteClick = () => {
    setDisplay("block");
    setOp("0");
  };
  const handleCancelDelete = () => {
    setDisplay("none");
    setOp("1");
  };
  const handleDeleteDone = async () => {
    try {
      let { data } = await axios.delete(`/users/${thisId}`);
      localStorage.clear();
      sessionStorage.clear();
      toast("You Delete Your User successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        window.location.reload();
        navigate(ROUTES.HOME);
      }, 2000);
    } catch (err) {
      toast.info(`Unsuccess data error, ${err.response.data} `, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <Fragment>
      <Box sx={{ display: thisDisplay }}>
        <PopUpDelete
          createDel={handleDeleteDone}
          cancelDel={handleCancelDelete}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          opacity: thisOp,
          transition: "all 0.5s",
          bgcolor: "black",
          color: "white",
          mt: "2%",
        }}
        onClick={handleDeleteClick}
      >
        Delete User
      </Button>
    </Fragment>
  );
};
export default DeleteUser;
