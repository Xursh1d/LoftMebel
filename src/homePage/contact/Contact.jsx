import React, { useReducer, useRef, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import phone from "../../LoftMebelPhoto/phone.svg";
import inst from "../../LoftMebelPhoto/inst.svg";
import mail from "../../LoftMebelPhoto/mail.svg";
import YandexMap from "./YandexMap";
import ReactLoading from "react-loading";
import { feedback } from "../../api/UrlApi";
import * as Yup from "yup";
import { useFormik } from "formik";
import CustomizedSnackbars from "./SnackBar";

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
  inputSpace: {},
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
  required: {
    position: "absolute",
    right: "130px",
    minWidth: "200px",
    height: "100%",
    display: "flex",
    textTransform: "none",
    alignItems: "center",
    justifyContent: "end",
    color: theme.palette.error.main,
    fontSize: "12px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "135px",
      maxWidth: "300px",
      fontSize: "10px",
    },
  },
  file_name: {
    position: "absolute",
    right: "130px",
    minWidth: "200px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    textTransform: "none",
    justifyContent: "end",
    color: theme.palette.primary.main,
    opacity: "0.8",
    fontSize: "12px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "135px",
      maxWidth: "300px",
      fontSize: "10px",
    },
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
  uploadFile: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: "0",
    cursor: "pointer",
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

export const reducer = (state, action) => {
  switch (action.type) {
    case "start_loading":
      return { loading: true };
    case "finish_loading":
      return { loading: false };
  }
};

export default function Contact() {
  const classes = useStyles();
  const inputElement1 = useRef();
  const inputElement2 = useRef();
  const inputElement3 = useRef();
  const inputElement4 = useRef();

  const initialValue = {
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const { loading } = state;

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
      file: {},
    },

    onSubmit: (values) => {
      dispatch({ type: "start_loading" });
      const data = new FormData();

      data.append("fullname", values.fullname);
      data.append("email", values.email);
      data.append("message", values.message);
      data.append("file", values.file);
      feedback(data)
        .then((response) => {
          if (response.status == 201) {
            setOpen(true);
            values.fullname = "";
            values.email = "";
            values.message = "";
            values.file = "";
          }
          dispatch({ type: "finish_loading" });
        })
        .catch((error) => {
          if (error.response) {
            setOpenError(true);
            dispatch({ type: "finish_loading" });
          }
        });
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .required("Enter Full Name")
        .max(255, "Must be less then 255 characters "),
      email: Yup.string()
        .email("Invalid email")
        .max(125, "Must be less then 125 charcters")
        .required("Enter email"),
      message: Yup.string().required("Enter message"),
      file: Yup.mixed()
        .required("You need to provide a file !")
        .test("fileSize", "File is too large !", (value) => {
          return value && value.size <= 5024000;
        }),
    }),
  });

  return (
    <>
      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        openError={openError}
        setOpenError={setOpenError}
      />
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} lg={6} md={6} className={classes.inputSpace}>
          <Typography className={classes.title}>Contact us</Typography>
          <form
            className={classes.root}
            onSubmit={formik.handleSubmit}
            autoComplete="off"
          >
            <div className={classes.row1} style={{ marginBottom: "30px" }}>
              <TextField
                disabled={loading}
                inputRef={inputElement1}
                className={classes.Input}
                id="outlined-basic"
                label="Your fullname"
                variant="outlined"
                size="small"
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                error={
                  formik.touched.fullname && Boolean(formik.errors.fullname)
                }
                helperText={formik.touched.fullname && formik.errors.fullname}
                InputLabelProps={{
                  style: {
                    lineHeight: 0.5,
                    padding: "0 3px",
                    backgroundColor: "white",
                  },
                }}
              />
              <TextField
                inputRef={inputElement2}
                disabled={loading}
                className={classes.Input}
                id="outlined-basic"
                label="Your email"
                variant="outlined"
                size="small"
                name="email"
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                value={formik.values.email}
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
                disabled={loading}
                inputRef={inputElement3}
                className={classes.massage}
                id="outlined-multiline-static"
                label="Massage"
                multiline
                rows={6}
                variant="outlined"
                name="message"
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                value={formik.values.message}
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
                variant="contained"
                style={{ position: "relative", marginRight: "20px" }}
              >
                Attach file
                <input
                  inputRef={inputElement4}
                  className={classes.uploadFile}
                  type="file"
                  name="file"
                  disabled={loading}
                  onChange={(e) => {
                    formik.setFieldValue("file", e.target.files[0]);
                  }}
                />
                {formik.errors.file && formik.touched.file ? (
                  <p className={classes.required}>{formik.errors.file}</p>
                ) : (
                  <p className={classes.file_name}>
                    {formik.values.file ? formik.values.file.name : null}
                  </p>
                )}
              </Button>
              {loading ? (
                <Button
                  style={{ width: "100px" }}
                  variant="contained"
                  color="primary"
                >
                  <ReactLoading
                    className={classes.loader_spin_auth}
                    type={"spin"}
                    color={"#ffffff"}
                    height={"100%"}
                    width={"20px"}
                  />
                </Button>
              ) : (
                <Button
                  disabled={!formik.isValid}
                  style={{ width: "100px" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Send
                </Button>
              )}
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
