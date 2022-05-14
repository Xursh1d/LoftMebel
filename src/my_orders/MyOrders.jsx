import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, Typography, Paper } from "@material-ui/core";
import { getRegions } from "../api/UrlApi";
import "./Order.css";
import ReactLoading from "react-loading";
import { StorageContext } from "../context/Context";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { CategoriesContext } from "../context/Context";
import FormAddress from "./FormAddress";
import { makeStyles } from "@material-ui/core/styles";
import ProductList from "./ProductList";
import HorizontalLinearStepper from "./Stepper";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(3, 64, 119)",
    },
    secondary: {
      main: "rgb(2, 91, 130)",
    },
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});
const useStyles = makeStyles({
  typography: {
    color: theme.palette.secondary.main,
  },
  products: {
    minHeight: "0",
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
    transition: "max-height 0.5s ease-in",
    maxHeight: "440px",
    minHeight: "50px",
    overflow: "hidden",
    overflowY: "auto",
    borderRadius: "5px",
  },
  totalCost: {
    height: "180px",
    padding: "15px 20px",
    borderRadius: "5px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  section: {
    padding: "30px",
    borderRadius: "10px",
    width: "90%",
    margin: "auto",
    marginTop: "30px",
    marginBottom: "70px",
  },
  productSum: {
    display: "flex",
    justifyContent: "space-between",
    height: "30px",
    width: "100%",
    alignItems: "center",
    borderRadius: "0",
  },
});
export default function MyOrders() {
  const classes = useStyles();
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
  return (
    <MuiThemeProvider theme={theme}>
      <Box>
        <Box className={classes.section} boxShadow={2}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
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
            />
          </div>
          <Grid container spacing={3} style={{ marginTop: "20px" }}>
            <Grid className={classes.formaddress} item lg={7}>
              <FormAddress
                cartStorage={cartStorage}
                regions={regions}
                district={district}
                handleChangeRegions={handleChangeRegions}
                handleNext={handleNext}
              />
            </Grid>
            <Grid item className={classes.products} lg={5}>
              <Typography
                variant="subtitle2"
                style={{
                  fontSize: "17px",
                  textAlign: "center",
                  marginBottom: "20px",
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
                  <Typography
                    variant="h6"
                    style={{
                      display: "flex",
                      lineHeight: "40px",
                      justifyContent: "center",
                      height: "100%",
                      width: "100%",
                      color: theme.palette.error.main,
                    }}
                  >
                    Not found !
                  </Typography>
                )}
              </Box>
              <Box>
                <Box className={classes.totalCost} boxShadow={1}>
                  <Typography
                    variant="subtitle2"
                    style={{
                      textAlign: "center",
                      lineHeight: "40px",
                      fontSize: "17px",
                      marginBottom: "10px",
                      borderBottom: "1px solid black",
                    }}
                  >
                    Order Summary
                  </Typography>
                  <Box className={classes.productSum} borderBottom={0}>
                    <Typography style={{ fontSize: "13px" }}>
                      Subtotal
                    </Typography>
                    <Typography style={{ fontSize: "13px" }}>
                      {allSum} $
                    </Typography>
                  </Box>
                  <Box className={classes.productSum} borderBottom={0}>
                    <Typography style={{ fontSize: "13px" }}>
                      Shipping
                    </Typography>
                    <Typography style={{ fontSize: "13px" }}>0 $</Typography>
                  </Box>
                  <Box
                    borderTop={1}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "35px",
                      width: "100%",
                      marginTop: "15px",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      style={{
                        fontSize: "17px",
                      }}
                    >
                      Order total
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      style={{
                        fontSize: "17px",
                      }}
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
    </MuiThemeProvider>
  );
}
