import { Box, Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { Fragment, useState } from "react";
import PopUpEdit from "./PopUpEdit";

const EditProfile = ({ thisId }) => {
  const [thisDisplay, setDisplay] = useState("none");
  const [thisOp, setOp] = useState("1");
  const handleDeleteClick = () => {
    setDisplay("block");
    setOp("0");
  };

  const handleCancelEdit = () => {
    setDisplay("none");
    setOp("1");
  };
  const handleEditDone = async (request) => {
    try {
      let { data } = await axios.put(`/users/${thisId}`, request);
      toast("Your Update to Your User Done successfully", {
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
      }, 2500);
    } catch (err) {
      toast(err.response.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <Fragment>
      <Box sx={{ display: thisDisplay }}>
        <PopUpEdit createEdit={handleEditDone} cancelEdit={handleCancelEdit} />
      </Box>
      <Button
        variant="contained"
        sx={{
          opacity: thisOp,
          transition: "all 0.5s",
        }}
        onClick={handleDeleteClick}
      >
        Edit User
      </Button>
    </Fragment>
  );
};
export default EditProfile;