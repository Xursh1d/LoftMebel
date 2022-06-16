import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactLoading from "react-loading";

const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
  },

}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ReactLoading
        className="loading"
        type={"spinningBubbles"}
        color={"#245462"}
        height={"50px"}
        width={"50px"}
      />
    </div>
  );
}
