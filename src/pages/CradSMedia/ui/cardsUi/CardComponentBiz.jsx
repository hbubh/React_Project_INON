import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandMore } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import IconsCardsBiz from "./IconCardComponentBiz";
import { toast } from "react-toastify";
import NewYorkMap from "../../../../components/Location";

const CardComponentBiz = ({
  _id,
  date,
  title,
  description,
  like,
  subTitle,
  phone,
  address,
  img,
  alt,
  onDeleteCard,
  onEditCard,
  onLikeCard,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState(3);
  const [status, setStatus] = useState("none");
  const [isStatus, setIsStatus] = useState("block");
  const [thisOP, setOP] = useState("1");

  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  useEffect(() => {
    if (loggedIn) {
      setStatus("block");
      setIsStatus("none");
    }
  }, [loggedIn]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
    if (thisOP === "0.6") {
      setOP("1");
    } else {
      setOP("0.6");
    }
  };

  const handleDeleteCardClick = (e) => {
    onDeleteCard(_id, e);
  };
  const handleClickEditCard = (e) => {
    onEditCard(_id, e);
  };
  const handleLikeCardClick = (e) => {
    onLikeCard(_id, e);
  };
  return (
    <Card
      sx={{
        borderRadius: "10px",
        bgcolor: "rgb(0, 0, 0,0.8)",
        color: "white",
        display: "flex",
        justifyContent: "space-evenly",
        border: "2px solid darkgray",
      }}
    >
      <CardActionArea onDoubleClick={handleLikeCardClick}>
        <CardMedia
          component="img"
          image={img}
          alt={alt}
          sx={{ height: "100%" }}
        />
      </CardActionArea>
      <CardContent sx={{ color: "white", width: "100%" }}>
        <CardHeader
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            textAlign: "center",
            border: "2px solid white",
            borderRadius: "10px 10px 15px 15px",
            borderBottom: "none",
            color: "white",
            textShadow: "2px 2px 8px",
          }}
          title={"-" + " " + title + " " + "-"}
        />
        <Typography
          sx={{
            textAlign: "center",
            padding: "5px",
            width: "50%",
            marginLeft: "25%",
            border: "3px solid white",
            borderRight: "none",
            borderLeft: "none",
            borderBottom: "none",
          }}
        >
          {subTitle}
        </Typography>

        <Divider />
        <Box sx={{ mt: 1, marginBottom: "15px" }}>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Phone:{" "}
            </Typography>
            {phone}
          </Typography>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Address:{" "}
            </Typography>
            {address}
          </Typography>
        </Box>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{
            bgcolor: "navy",
            color: "white",
            border: "1px solid black",
            borderRadius: "20px",
            width: "20%",
          }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Typography sx={{ width: "60%" }} variant="subtitle2">
          ( More Deatils)
        </Typography>
        <Divider />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph sx={{ fontWeight: "bold" }}>
              Card Date Created: <br />
              <span style={{ fontWeight: "300" }}>{date} </span>
            </Typography>
            <Typography paragraph sx={{ fontWeight: "bold" }}>
              Line of Business: <br />
              <span style={{ fontWeight: "300" }}>{description} </span>
            </Typography>
            <Typography paragraph sx={{ fontWeight: "bold" }}>
              Location: <br />
              <NewYorkMap />
              <span style={{ fontWeight: "300" }}>{address}</span>
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              Rating: <br />
              <span style={{ fontWeight: "300", display: status }}>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </span>
              <span style={{ fontWeight: "300", display: isStatus }}>
                to watch and give a rating you must to log-in first
              </span>
            </Typography>
          </CardContent>
        </Collapse>
        <IconsCardsBiz
          handleClickEditCard={handleClickEditCard}
          handleDeleteCardClick={handleDeleteCardClick}
          handleLikeCardClick={handleLikeCardClick}
          like={like}
        />
      </CardContent>
    </Card>
  );
};

export default CardComponentBiz;
