import { Box, makeStyles, Typography } from "@material-ui/core";
import { ImportantDevices } from "@material-ui/icons";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#D7E8ED",
    padding: theme.spacing(10, 5),
    margin: "20px 0",
  },
  rootItem: {
    width: "55%",
    margin: "40px auto",
    textAlign: "center",
  },
  title: {
    // position: "relative",
    fontSize: "18px",
    margin: "20px 0",
    color: "#414141",
    fontWeight: "400",
    width: "100%",
    "& :before": {
      position: "absolute",
      content: " ",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      height: "100%",
      background: "red",
      zIndex:"101 !important"
    },
  },
  text: {
    fontSize: "14px",
  },
}));
export default function Section() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.rootItem}>
        <Typography variant="body2" className={classes.title}>
          The most "delicious" offers
        </Typography>
        <Typography variant="body1" className={classes.text}>
          We do everything necessary for customers to have access to the latest
          news that represents the Russian furniture market. Get to know each
          model compare prices for analogues and choose the best you can right
          now. Want to be the first to know about the best deals? Then subscribe
          to newsletter!
        </Typography>
      </Box>
      <Box className={classes.rootItem}>
        <Typography variant="body2" className={classes.title}>
          Guaranteed quality
        </Typography>
        <Typography variant="body1" className={classes.text}>
          All products are accompanied manufacturer's warranty. The catalogs
          contain only certified furniture. In-house quality control checks
          every sample carefully before sending to the customer. Buyers receive
          the necessary documents - warranty card and check.
        </Typography>
      </Box>
      <Box className={classes.rootItem}>
        <Typography variant="body2" className={classes.title}>
          Impressive range
        </Typography>
        <Typography variant="body1" className={classes.text}>
          Every day we choose our catalogs are ideal samples from the product
          matrix of manufacturers throughout Russia. Fashionable colors,
          environmentally friendly materials, reliable accessories - here you
          will find the furniture of your dreams!
        </Typography>
      </Box>
    </div>
  );
}
