import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import img from "../LoftMebelPhoto/image 1.png";
import img1 from "../LoftMebelPhoto/profit.png";
import img2 from "../LoftMebelPhoto/car.png";
import img3 from "../LoftMebelPhoto/time.png";
import img4 from "../LoftMebelPhoto/production.png";
import Section from "./Section";

const useStyles = makeStyles((theme) => ({
  aboutHeader: {
    width: "100%",
    height: "100%",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      height: "auto",
      paddingBottom: "200px !important",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      height: "auto",
      paddingBottom: "300px",
    },
  },
  aboutStoreGrid1: {
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3, 0),
      position: "relative",
      top: "200px !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3, 0),
      position: "relative",
      top: "300px",
    },
  },
  aboutImage: {
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      minHeight: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "300px",
      width: "100%",
      left: "0",
      top: "0",
      position: "absolute",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "200px",
      width: "100%",
      left: "0",
      top: "0",
      position: "absolute",
    },
  },
  backcolor: {
    width: "60%",
    background: "#D7E8ED",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "65%",
    },
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },

  basicImg: {
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  BuyProfitably: {
    textAlign: "center",
    margin: theme.spacing(5),
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "28px",
    letterSpacing: "0.015em",
    color: "#414141",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(5),
      fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(4),
      fontSize: "18px",
    },
  },
  profitably: {
    width: "100%",
  },
  profitablyItem: {
    height: "150px",
  },
  imgGrid: {
    padding: theme.spacing(5, 0),
    height: "100% !important",
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3, 0),
    },
  },
  profitablyImg: {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  bestPrice: {
    padding: theme.spacing(2, 3),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  text: {
    fontSize: "14px",
    color: "#686868",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  headerText: {
    [theme.breakpoints.down("md")]: {
      fontSize: "17px",
    },
  },
  profitablybody2: {
    fontSize: "14px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  profitItemTitle: {
    fontSize: "18px",
    margin: theme.spacing(0.5, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
}));
export default function About() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.aboutHeader} spacing={0}>
        <Grid item lg={6} md={6} xs={12} className={classes.aboutStoreGrid1}>
          <Typography
            variant="body1"
            style={{ color: "#245462", fontSize: "12px" }}
          >
            About Store
          </Typography>
          <Typography
            variant="h6"
            className={classes.headerText}
            style={{ margin: "10px 0" }}
          >
            Online store "Loft Furniture": buy a good one furniture in one
            click!
          </Typography>
          <Typography variant="body2" className={classes.text}>
            The unique format of the online store will allow you to buy the best
            furniture of the largest Russian factories as quickly and as
            possible favorable price!
            <br />
            <br />
            We thank for the trust of more than a dozen manufacturers who gave
            us the opportunity to present the best samples of their products in
            Russian Internet space. Direct supply contracts furniture from
            factories provide the most attractive conditions for our buyers.
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} xs={12} className={classes.aboutImage}>
          <Box className={classes.backcolor}></Box>
          <Box className={classes.image}>
            <img src={img} className={classes.basicImg} alt="" />
          </Box>
        </Grid>
      </Grid>
      <Typography variant="h6" className={classes.BuyProfitably}>
        Buy profitably!
      </Typography>
      <Grid container className={classes.profitably}>
        <Grid
          item
          container
          className={classes.profitablyItem}
          lg={6}
          xs={12}
          sm={12}
          md={6}
        >
          <Grid item xs={2} className={classes.imgGrid}>
            <img className={classes.profitablyImg} src={img1} alt="" />
          </Grid>
          <Grid item xs={10} className={classes.bestPrice}>
            <Typography variant="subtitle2" className={classes.profitItemTitle}>
              Best price
            </Typography>
            <Typography variant="body2" className={classes.profitablybody2}>
              We offer prices close to wholesale, which make it possible to
              purchase furniture cheaper than in retail stores and showrooms.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.profitablyItem}
          lg={6}
          xs={12}
          sm={12}
          md={6}
        >
          <Grid item xs={2} className={classes.imgGrid}>
            <img
              width="70px"
              className={classes.profitablyImg}
              src={img2}
              alt=""
            />
          </Grid>
          <Grid item xs={10} className={classes.bestPrice}>
            <Typography variant="subtitle2" className={classes.profitItemTitle}>
              Direct deliveries
            </Typography>
            <Typography variant="body2" className={classes.profitablybody2}>
              From leading furniture factories reduce the time fulfillment of
              your order, even if we are talking about the manufacture of items
              according to individual project.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.profitablyItem}
          lg={6}
          xs={12}
          sm={12}
          md={6}
        >
          <Grid item xs={2} className={classes.imgGrid}>
            <img className={classes.profitablyImg} src={img3} alt="" />
          </Grid>
          <Grid item xs={10} className={classes.bestPrice}>
            <Typography variant="subtitle2" className={classes.profitItemTitle}>
              Time saving
            </Typography>
            <Typography variant="body2" className={classes.profitablybody2}>
              Did not find the best option or not time to search? Leave an
              online application with the criteria and we will offer you some
              decent examples.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.profitablyItem}
          lg={6}
          xs={12}
          sm={12}
          md={6}
        >
          <Grid item xs={2} className={classes.imgGrid}>
            <img
              width="70px"
              className={classes.profitablyImg}
              src={img4}
              alt=""
            />
          </Grid>
          <Grid item xs={10} className={classes.bestPrice}>
            <Typography variant="subtitle2" className={classes.profitItemTitle}>
              Customization
            </Typography>
            <Typography variant="body2" className={classes.profitablybody2}>
              We accept orders for production furniture according to a personal
              design project from buyers from anywhere in Russia. Please be
              prepared to pay in advance for personal orders.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Section />
    </div>
  );
}
