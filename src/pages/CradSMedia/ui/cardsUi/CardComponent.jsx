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
import IconsCards from "./IconsCardComponent";
import { toast } from "react-toastify";
import NewYorkMap from "../../../../components/Location";
const CardComponent = ({
  _id,
  date,
  title,
  subTitle,
  description,
  like,
  phone,
  address,
  img,
  alt,
  onEditCard,
  onLikeCard,
}) => {
  const [expanded, setExpanded] = useState(false); // הסטייט שמשנה מפתוח לסגור ולההפך
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

  const handlePhoneClick = () => {
    toast.info(`Phone Num:${phone}. Call Him Today!`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const handleClickEditCard = () => {
    onEditCard(_id);
  };
  const handleLikeCardClick = (e) => {
    onLikeCard(_id, e);
  };
  return (
    <Card
      sx={{
        borderRadius: "10px",
        bgcolor: "rgb(4, 92, 147)",
        color: "black",
        display: "flex",
        justifyContent: "space-evenly",
        boxShadow: "5px 5px 10px",
      }}
    >
      <CardActionArea onDoubleClick={handleLikeCardClick}>
        <CardMedia
          component="img"
          image={img}
          alt={alt}
          sx={{
            height: "100%",
            transition: "all 1s",
            opacity: thisOP,
            boxShadow: "-2px -5px 10px",
          }}
        />
      </CardActionArea>
      <CardContent sx={{ color: "black", width: "100%" }}>
        <CardHeader
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            textAlign: "center",
            border: "4px solid black",
            borderRadius: "10px 10px 15px 15px",
            borderBottom: "none",
            color: "black",
            textShadow: "3px 10px 8px",
          }}
          title={"-" + " " + title + " " + "-"}
        />
        <Typography
          sx={{
            textAlign: "center",
            padding: "5px",
            width: "50%",
            marginLeft: "25%",
            border: "3px solid black",
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
        <ExpandMore //פונקציה ואייקון שמבצעים פתיחה וסגירה לעוד מידע
          onClick={handleExpandClick}
          aria-label="show more"
          sx={{
            bgcolor: "navy",
            color: "white",
            border: "1px solid black",
            borderRadius: "20px",
            width: "20%",
          }}
        >
          {/*  האייקון עצמו */}
          <ExpandMoreIcon />
        </ExpandMore>
        <Typography sx={{ width: "60%" }} variant="subtitle2">
          ( More Deatils)
        </Typography>
        <Divider />
        {/*  זה האזור שנפתח ונסגר ומציג מידע נוסף */}
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
            <Typography sx={{ fontWeight: "bold", mt: "3%" }}>
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
        <IconsCards
          handlePhoneClick={handlePhoneClick}
          handleClickEditCard={handleClickEditCard}
          handleLikeCardClick={handleLikeCardClick}
          like={like}
        />
      </CardContent>
    </Card>
  );
};

export default CardComponent;
