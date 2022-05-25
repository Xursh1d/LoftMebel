import React from "react";
import { photoUrl } from "../helpers/photo_url_fixer";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import img from "../LoftMebelPhoto/bg-slider(1).png";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "25ch",
    },
  },
  row1: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: "0",
    },
  },
  row2: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-30px",
    },
  },
  massage: {
    width: "100%",
    border: "none",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  },
  inputSpace: {
    //   border: "1px solid red",
  },
  Input: {
    margin: theme.spacing(0),
    width: "48%",
    [theme.breakpoints.down("lg")]: {
      height: "40px",
      width: "48%",
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      width: "100%",
      fontSize: "14px",
      marginBottom: "30px",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    "& .MuiOutlinedInput-input": {
      color: "#414141",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: theme.palette.secondary.main,
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#000",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: theme.palette.secondary.main,
    },
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "19px",
    color: "#414141",
    marginBottom: "30px",
    color: "#414141",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      lineHeight: "16px",
      color: "#414141",
      marginBottom: "30px",
    },
  },
  container: {
    marginTop: "40px",
    marginBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  btns: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },
  contactWith: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "-5px",
    "& a": {
      textDecoration: "none",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      // display: "none",
    },
  },
  row3: {
    marginTop: "30px",
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
    },
  },
  row4: {
    marginTop: "30px",
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
    },
  },
  addressInput: {
    width: "25%",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  },
  flatInput: {
    width: "20%",
    marginLeft: "20px",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  },
  tr: {
    border: "1px solid #F3F3F3",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "147.69%",
    color: "#686868",
    height: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  td: {
    width: "15%",
    border: "1px solid #F3F3F3",
    textAlign: "center",
  },
  th: {
    width: "50%",
    padding: "0 20px",
  },
  productTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "147.69%",
    color: "#686868",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  imgRow: {
    width: "100%",
    height: "100%",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "50px",
    height: "70px",
    marginRight: "15px",
  },
  img: {
    width: "100%",
    objectFit: "scale-down",
  },
  showmore: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "14px",
    color: "#245462",
    marginTop: "15px",
    width: "100%",
    cursor: "pointer",
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]:{
    fontSize: "12px",
      
    }
  },
}));
const product = JSON.parse(localStorage.getItem("product"));
export default function MyProfile() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} lg={6} md={6} className={classes.inputSpace}>
          <Typography className={classes.title}>Personal data</Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.row1}>
              <TextField
                className={classes.Input}
                id="outlined-basic"
                label="Your name"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: {
                    lineHeight: 0.5,
                    padding: "0 3px",
                    backgroundColor: "white",
                  },
                }}
              />
              <TextField
                className={classes.Input}
                id="outlined-basic"
                label="Your email"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: {
                    lineHeight: 0.5,
                    padding: "0 3px",
                    backgroundColor: "white",
                  },
                }}
              />
            </div>
            <div className={classes.row1} style={{ marginBottom: "30px" }}>
              <TextField
                className={classes.Input}
                id="outlined-basic"
                label="Your surname"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: {
                    lineHeight: 0.5,
                    padding: "0 3px",
                    backgroundColor: "white",
                  },
                }}
              />
              <TextField
                type="phone"
                className={classes.Input}
                id="outlined-basic"
                label="Your number"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: {
                    lineHeight: 0.5,
                    padding: "0 3px",
                    backgroundColor: "white",
                  },
                }}
              />
            </div>
            <div className={classes.row2}>
              <TextField
                className={classes.Input}
                id="outlined-basic"
                label="City"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: {
                    lineHeight: 0.5,
                    padding: "0 3px",
                    backgroundColor: "white",
                  },
                }}
              />
            </div>
            <div className={classes.row3}>
              <TextField
                className={classes.massage}
                id="outlined-basic"
                label="Street"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: {
                    lineHeight: 0.5,
                    padding: "0 3px",
                    backgroundColor: "white",
                  },
                }}
              />
            </div>
            <div className={classes.row4}>
              <TextField
                className={classes.addressInput}
                id="outlined-basic"
                label="House"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: {
                    lineHeight: 0.5,
                    padding: "0 3px",
                    backgroundColor: "white",
                  },
                }}
              />
              <TextField
                className={classes.flatInput}
                id="outlined-basic"
                label="Flat"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: {
                    lineHeight: 0.5,
                    padding: "0 3px",
                    backgroundColor: "white",
                  },
                }}
              />
            </div>
            <div className={classes.btns}>
              <Button type="submit" variant="contained" color="primary">
                Change
              </Button>
            </div>
          </form>
        </Grid>
        <Grid item xs={12} lg={6} md={6} className={classes.contactItem}>
          <Typography className={classes.title}>My order</Typography>
          <div className={classes.contactWith}>
            <table style={{ width: "100%" }}>
              <tr className={classes.tr}>
                <td className={classes.th}>Product</td>
                <td className={classes.td}>Price</td>
                <td className={classes.td}>Date</td>
                <td className={classes.td}>Status</td>
              </tr>
              <tr className={classes.tr}>
                <td className={classes.imgRow}>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={photoUrl(product[0].product_photo)}
                    />
                  </ButtonBase>
                  <Typography className={classes.productTitle}>
                    {product[0].product_title}
                  </Typography>
                </td>
                <td className={classes.td}>1234</td>
                <td className={classes.td}>12/02/2022</td>
                <td className={classes.td}>Paid 50%</td>
              </tr>
              <tr className={classes.tr}>
                <td className={classes.imgRow}>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={photoUrl(product[0].product_photo)}
                    />
                  </ButtonBase>
                  <Typography className={classes.productTitle}>
                    {product[0].product_title}
                  </Typography>
                </td>
                <td className={classes.td}>1234</td>
                <td className={classes.td}>12/02/2022</td>
                <td className={classes.td}>Paid 50%</td>
              </tr>
              <tr className={classes.tr}>
                <td className={classes.imgRow}>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={photoUrl(product[0].product_photo)}
                    />
                  </ButtonBase>
                  <Typography className={classes.productTitle}>
                    {product[0].product_title}
                  </Typography>
                </td>
                <td className={classes.td}>1234</td>
                <td className={classes.td}>12/02/2022</td>
                <td className={classes.td}>Paid 50%</td>
              </tr>
              <tr className={classes.tr}>
                <td className={classes.imgRow}>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={photoUrl(product[0].product_photo)}
                    />
                  </ButtonBase>
                  <Typography className={classes.productTitle}>
                    {product[0].product_title}
                  </Typography>
                </td>
                <td className={classes.td}>1234</td>
                <td className={classes.td}>12/02/2022</td>
                <td className={classes.td}>To'lov qilingan</td>
              </tr>
            </table>
            <Typography variant="subtitle1" className={classes.showmore}>
              Show more
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
