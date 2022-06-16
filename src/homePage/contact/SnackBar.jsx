import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  snackbar: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default function CustomizedSnackbars({
  open,
  openError,
  setOpen,
  setOpenError,
}) {
  const classes = useStyles();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };
  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          className={classes.snackbar}
        >
          Successfully submitted!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          className={classes.snackbar}
        >
          Somthing error, please try again!
        </Alert>
      </Snackbar>
    </div>
  );
}
