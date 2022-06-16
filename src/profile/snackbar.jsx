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

export default function CustomizedSnackbars({ open, setOpen }) {
  const classes = useStyles();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const vertical = "bottom";
  const horizontal = "right";
  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          className={classes.snackbar}
          onClose={handleClose}
          severity="success"
        >
          Successful registration!
        </Alert>
      </Snackbar>
    </div>
  );
}
