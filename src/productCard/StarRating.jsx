import React, { useState } from "react";
import "./Card.css";
import { FaStar } from "react-icons/fa";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
  rating: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
      fontSize: "18px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "23px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
    },
  },
}));
export default function StarRating() {
  const [rating, setRating] = useState(1);
  const classes = useStyles();
  console.log(rating);
  return (
    <div className={classes.root}>
      <Rating
        name="size-medium"
        defaultValue={1}
        className={classes.rating}
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
    </div>
  );
}
