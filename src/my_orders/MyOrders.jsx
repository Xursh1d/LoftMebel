import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { getRegions } from "../api/UrlApi";
import "./Order.css";
import ReactLoading from "react-loading";
import { StorageContext, TokensContext } from "../context/Context";
import { CategoriesContext } from "../context/Context";
import FormAddress from "./FormAddress";
import { makeStyles } from "@material-ui/core/styles";
import emptyIcon from "../LoftMebelPhoto/page-empty-page.jpg";
import ProductList from "./ProductList";
import HorizontalLinearStepper from "./Stepper";
import { Redirect } from "react-router";

const useStyles = makeStyles((theme) => ({
  typography: {
    color: theme.palette.secondary.main,
  },
  typographyIndex: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "80px",
    },
  },
  positionStep: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      position: "absolute",
      top: "0px",
    },
  },
  products: {
    minHeight: "0",
    margin: "auto",
    marginBottom: "50px !important",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      marginTop: "0px",
    },
  },
  productsList: {
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.2)",
      borderRadius: "2px",
    },
    [theme.breakpoints.down("md")]: {
      boxShadow: "none",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "0",
      width: "100% !important",
      margin: "0 !important",
      minHeight: "50px",
      maxHeight: "none",
    },
    [theme.breakpoints.up("lg")]: {
      transition: "max-height 0.5s ease-in",
      maxHeight: "440px",
      minHeight: "50px",
      overflow: "hidden",
      overflowY: "auto",
      borderRadius: "5px",
      padding: "10px 0",
    },
  },
  totalCost: {
    width: "100%",
    height: "180px",
    padding: "15px 20px",
    borderRadius: "5px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  section: {
    [theme.breakpoints.up("sm")]: {
      padding: "30px",
      borderRadius: "10px",
      width: "90%",
      margin: "auto",
      marginTop: "30px",
      marginBottom: "70px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "20px 0",
      boxShadow: "none",
    },
  },
  productSum: {
    display: "flex",
    justifyContent: "space-between",
    height: "30px",
    width: "100%",
    alignItems: "center",
    borderRadius: "0",
  },
  stepper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "150px",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
  },
  orderTitle: {
    textAlign: "center",
    lineHeight: "40px",
    fontSize: "17px",
    marginBottom: "10px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "17px",
    },
  },
  cost: {
    fontSize: "13px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "13px",
    },
  },
  orderTotal: {
    fontSize: "17px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "17px",
    },
  },
  emptyImg:{
    width:"100%"
  }
}));

export default function MyOrders() {
  const classes = useStyles();
  const [refreshToken] = useContext(TokensContext);
  const { loading, setLoading } = useContext(CategoriesContext);
  const [regions, setRegions] = useState([]);
  const [changeRegions, setChangeRegions] = useState();
  const [district, setDistrict] = useState([]);
  const [allSum, setAllSum] = useState("");
  const { cartStorage, removeLocalStorage } = useContext(StorageContext);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  useEffect(() => {
    setLoading(true);
    getRegions().then((response) => {
      setChangeRegions(response.data);
      setRegions(Object.keys(response.data));
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    let allSum = 0;
    cartStorage.forEach((element) => {
      const productprice = element.quantity * element.productPrice;
      allSum += productprice;
    });
    setAllSum(allSum);
  }, [cartStorage]);
  const handleChangeRegions = (e) => {
    setDistrict(changeRegions[e]);
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  if (refreshToken) {
    return <Redirect to="/user/sign_in" />;
  }
  return loading ? (
    <div className="loader">
      <h6>Loading</h6>
      <ReactLoading
        className="loading"
        type={"spinningBubbles"}
        color={"#245462"}
        height={"50px"}
        width={"50px"}
      />
    </div>
  ) : (
    <Box>
      <Box className={classes.section} boxShadow={1}>
        <div className={classes.stepper}>
          <div className={classes.typographyIndex}>
            <Typography className={classes.typography} variant="caption">
              Shipping Address
            </Typography>
            <p className="product-adress" style={{ marginTop: 10 }}>
              Home / Basket / Shipping address
            </p>
          </div>
          <HorizontalLinearStepper
            isStepSkipped={isStepSkipped}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            skipped={skipped}
            setSkipped={setSkipped}
            className={classes.positionStep}
          />
        </div>
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          <Grid className={classes.formaddress} item xs={12} md={12} lg={7}>
            <FormAddress
              cartStorage={cartStorage}
              regions={regions}
              district={district}
              handleChangeRegions={handleChangeRegions}
              handleNext={handleNext}
            />
          </Grid>
          <Grid item className={classes.products} xs={12} md={10} lg={5}>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="subtitle2"
                style={{
                  fontSize: "17px",
                  textAlign: "center",
                  marginBottom: "15px",
                }}
              >
                Your order
              </Typography>
              <Box className={classes.productsList} boxShadow={1}>
                {cartStorage.length ? (
                  <ProductList
                    cartStorage={cartStorage}
                    removeLocalStorage={removeLocalStorage}
                  />
                ) : (
                  <img className={classes.emptyImg} src={emptyIcon} alt="" />
                )}
              </Box>
            </Box>
            <Box>
              <Box className={classes.totalCost} boxShadow={1}>
                <Typography variant="subtitle2" className={classes.orderTitle}>
                  Order Summary
                </Typography>
                <Box className={classes.productSum} borderBottom={0}>
                  <Typography className={classes.cost}>Subtotal</Typography>
                  <Typography className={classes.cost}>{allSum} $</Typography>
                </Box>
                <Box className={classes.productSum} borderBottom={0}>
                  <Typography className={classes.cost}>Shipping</Typography>
                  <Typography className={classes.cost}>0 $</Typography>
                </Box>
                <Box
                  borderTop={1}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "40px",
                    width: "100%",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    className={classes.orderTotal}
                  >
                    Order total
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={classes.orderTotal}
                  >
                    {allSum} $
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
