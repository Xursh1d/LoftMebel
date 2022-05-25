import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import phone from "../../LoftMebelPhoto/phone.svg";
import inst from "../../LoftMebelPhoto/inst.svg";
import mail from "../../LoftMebelPhoto/mail.svg";
import YandexMap from "./YandexMap";
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
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  row2: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-28px",
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
    // border: "1px solid red",
  },
  Input: {
    margin: theme.spacing(0),
    width: "48%",
    [theme.breakpoints.down("lg")]: {
      height: "40px",
      width: "47%",
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
    marginTop: "50px",
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
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "40px",
    marginLeft: "40px",
    "& a": {
      textDecoration: "none",
      marginBottom: "20px",
      " & :hover": {
        color: "#245456",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0",
      "& a": {
        " & :hover": {
          color: "#245456",
        },
        textDecoration: "none",
        marginBottom: "10px",
        marginRight: "30px",
        "& img": {
          width: "19px",
        },
      },
    },
  },
  span: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "126.69%",
    color: "#414141",
    marginLeft: "10px",
    marginRight: "30px",
    [theme.breakpoints.down("sm")]: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "15px",
      lineHeight: "126.69%",
      color: "#414141",
      marginLeft: "10px",
      marginRight: "30px",
    },
  },
  anapa: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "15px",
      lineHeight: "126.69%",
      color: "#414141",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      marginTop: "5px",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "0px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "40px",
    },
  },
  contactItem: {
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0",
      width: "100%",
    },
  },
  yandexmap: {
    marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
  },
}));
export default function Contact() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} lg={6} md={6} className={classes.inputSpace}>
          <Typography className={classes.title}>Contact us</Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.row1} style={{ marginBottom: "30px" }}>
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
            <div className={classes.row2}>
              <TextField
                className={classes.massage}
                id="outlined-multiline-static"
                label="Massage"
                multiline
                rows={6}
                variant="outlined"
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
              <Button
                type="file"
                variant="contained"
                style={{ marginRight: "20px" }}
              >
                Attach file
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Send
              </Button>
            </div>
          </form>
        </Grid>
        <Grid item xs={12} lg={6} md={6} className={classes.contactItem}>
          <div className={classes.contactWith}>
            <a href="tel:+998911705909">
              <img src={phone} alt="" />
              <span className={classes.span}>+998 91 170 59 09</span>
            </a>
            <a href="mailto:xurshidforjob@gmail.com">
              <img src={mail} alt="" />
              <span className={classes.span}>xurshidforjob@gmail.com</span>
            </a>
            <a href="https://instagram.com/frontend15">
              <img src={inst} alt="" />
              <span className={classes.span}>INSTAGRAM</span>
            </a>
          </div>
          <span className={classes.anapa}>
            Anapa, Anapa highway, 30 L/C Black Sea
          </span>
        </Grid>
      </Grid>
      <Box className={classes.yandexmap}>
        <Typography className={classes.title}>Our company address</Typography>
        <YandexMap />
      </Box>
    </>
  );
}
