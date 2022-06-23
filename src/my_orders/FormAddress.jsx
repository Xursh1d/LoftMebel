import React, { useContext, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
      
    },
  },
  row: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "120px",
    margin: "10px 0",
    marginBottom: "40px",
    [theme.breakpoints.down("sm")]: {
    marginBottom: "20px",      
    },
  },
  Input: {
    marginBottom: "40px",
    margin: theme.spacing(0),
    width: "48%",
    [theme.breakpoints.down("lg")]: {
      height: "40px",
      width: "100%",
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      width: "100%",
      fontSize: "14px",
      marginBottom:"30px"
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
  addressInput: {
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
  formControl: {
    width: "100%",
    height: "40px",
    borderRadius: "0px",
    marginBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      marginBottom:"30px"
    },
  },
  Select: {
    [theme.breakpoints.down("lg")]: {
      height: "40px",
      fontSize: "15px",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    width: "100%",
    padding: "0px",
  },
  selectLabel: {
    lineHeight: 0.6,
    backgroundColor: "white",
    padding: "0px 3px",
    "&.Mui-focused": {
      color: theme.palette.secondary.main,
    },
  },
  submit: {
    margin: "25px auto",
    width: "200px",
    display: "flex",
    alignItems: "center",
  },
}));
export default function FormAddress({
  handleChangeRegions,
  regions,
  district,
  cartStorage,
  handleNext,
}) {
  console.log(cartStorage);
  const [selectedRegions, setSelectedRegions] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const classes = useStyles();
  const handleSubmit = () => {};
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box className={classes.row}>
        <TextField
          type="text"
          className={classes.Input}
          id="outlined-basic"
          label="First name"
          variant="outlined"
          InputLabelProps={{
            style: {
              lineHeight: 0.5,
              padding: "0 3px",
              backgroundColor: "white",
            },
          }}
          size="small"
        />
        <TextField
          type="text"
          className={classes.Input}
          id="outlined-basic"
          label="Last name"
          InputLabelProps={{
            style: {
              lineHeight: 0.5,
              padding: "0 3px",
              backgroundColor: "white",
            },
          }}
          variant="outlined"
          size="small"
        />
      </Box>
      <Box className={classes.row}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          size="small"
        >
          <InputLabel
            className={classes.selectLabel}
            id="demo-simple-select-outlined-label"
          >
            Your region
          </InputLabel>
          <Select
            className={classes.Select}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selectedRegions}
            inputProps={{
              classes: {
                icon: classes.icon,
                root: classes.root,
              },
            }}
            onChange={(e) => {
              setSelectedRegions(e.target.value);
              handleChangeRegions(e.target.value);
            }}
            label="Your region"
            size="small"
          >
            {regions.map((reg) => {
              return (
                <MenuItem key={reg} value={reg}>
                  {reg}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl
          size="small"
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel
            className={classes.selectLabel}
            id="demo-simple-select-outlined-label"
          >
            Your district
          </InputLabel>
          <Select
            disabled={!district.length ? true : false}
            size="small"
            className={classes.Select}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            label="Your district"
          >
              {district.map((dis) => {
                return (
                  <MenuItem key={dis} value={dis}>
                    {dis}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Box>
      <TextField
        type="text"
        className={classes.addressInput}
        id="outlined-basic"
        label="Street address"
        variant="outlined"
        InputLabelProps={{
          style: {
            lineHeight: 0.5,
            padding: "0 3px",
            backgroundColor: "white",
          },
        }}
        size="small"
      />
      <Box className={classes.row} style={{ marginTop: 32 }}>
        <TextField
          className={classes.Input}
          type="tel"
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
          InputLabelProps={{
            style: {
              lineHeight: 0.5,
              padding: "0 3px",
              backgroundColor: "white",
            },
          }}
          size="small"
        />
        <TextField
          className={classes.Input}
          id="outlined-basic"
          label="Postal code"
          InputLabelProps={{
            style: {
              lineHeight: 0.5,
              padding: "0 3px",
              backgroundColor: "white",
            },
          }}
          variant="outlined"
          size="small"
        />
      </Box>
      <Button
        className={classes.submit}
        type="submit"
        variant="contained"
        color="primary"
        disabled={!cartStorage.length}
        onClick={handleNext}
      >
        Go to paymant
      </Button>
    </form>
  );
}
