import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Box, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import { photoUrl } from "../helpers/photo_url_fixer";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: " 20px 15px",
  },
  paper: {
    position: "relative",
    padding: theme.spacing(1),
    margin: "auto",
    marginTop: "2px",
    marginBottom: "10px !important",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.07)",
    width: "98%",
    maxWidth: 500,
  },
  image: {
    width: "100%",
    height: "100%",
    margin: "0",
  },
  img: {
    display: "block",
    objectFit: "scale-down",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: "14px",
  },
  size: {
    fontSize: "9px",
    marginBottom: "10px",
  },
  quantity: {
    width: "30px",
    fontSize: "12px",
    fontFamily: "Kanit",
    display: "flex",
    justifyContent: "center",
  },
  remove: {
    padding: "0",
  },
  button: {
    position: "absolute",
    width: "30px",
    right: "0",
    top: "0px",
    minWidth: "0",
    height: "100%",
    boxShadow: "none",
    borderRadius: "0px",
    background: "#f7f6f6",
    "& .MuiButton-iconSizeMedium > *:first-child": {
      marginLeft: "12px",
    },
    "&:hover": {
      borderRadius: "0 !important",
      boxShadow: "none !important",
    },
    padding: "0",
  },
}));
export default function ProductList({ cartStorage, removeLocalStorage }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {cartStorage.map((item) => {
        const {
          id,
          color_id,
          color_hex_code,
          color_title,
          discount,
          discounted_price,
          productId,
          productPrice,
          product_photo,
          product_title,
          quantity,
          selectSize,
        } = item;
        return (
          <Grid container key={id} spacing={2} className={classes.paper}>
            <Grid xs={4} style={{ paddingRight: "3px" }} item>
              <Link to={`/product_card/${productId}`}>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={photoUrl(product_photo)}
                  />
                </ButtonBase>
              </Link>
            </Grid>
            <Grid
              xs={8}
              item
              container
              style={{
                padding: "2px",
              }}
            >
              <Grid
                item
                xs={10}
                container
                direction="column"
                style={{ marginright: "0" }}
              >
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    className={classes.title}
                  >
                    {product_title}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.size}
                  >
                    {selectSize}
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Paper className={classes.quantity}>{quantity}</Paper>
                    <Paper
                      variant="outlined"
                      style={{
                        borderRadius: "0",
                        width: "12px",
                        height: "12px",
                        marginLeft: "10px",
                        background: color_hex_code,
                      }}
                    />
                    <Typography style={{ fontSize: "12px", marginLeft: "8px" }}>
                      {color_title}
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "5px 0 0 0",
                  }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    {productPrice} $
                  </Typography>
                  {discounted_price > 0 && (
                    <Typography
                      style={{
                        textDecoration: "line-through",
                        color: "firebrick",
                        fontFamily: "Poppins",
                        fontSize: "13px",
                      }}
                      variant="body2"
                    >
                      {discounted_price} $
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Grid
                item
                xs={0}
                className={classes.remove}
                onClick={() =>
                  removeLocalStorage(productId, color_id, selectSize)
                }
              >
                <Button
                  variant="contained"
                  className={classes.button}
                  startIcon={<ClearRoundedIcon style={{ fontSize: "16px" }} />}
                />
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}
