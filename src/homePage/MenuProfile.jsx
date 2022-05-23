import React, { useContext } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
import { WishlistContext, TokensContext } from "../context/Context";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import StorageIcon from "@material-ui/icons/Storage";
import { Link } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      main: "#245462",
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
  menuItem: {
    fontFamily: "Poppins",
    [theme.breakpoints.down("sm")]: {
      minHeight: "40px",
      fontFamily: "Poppins",
      fontSize: "14px",
    },
  },
  icons: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
    },
  },
});
export default function SimpleMenu({ setRefreshToken }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { activeProfile } = useContext(WishlistContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const removeStorage = () => {
    setRefreshToken(true);
    setAnchorEl(null);
    localStorage.removeItem("refresh", "");
    localStorage.removeItem("access", "");
  };
  return (
    <div>
      <div onClick={handleClick} className="cart_link_contact">
        <IoPersonOutline
          className={
            activeProfile
              ? `contact_icon_outline active_page`
              : `contact_icon_outline`
          }
        />
        <IoPerson className="contact_icon" />
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link
          style={{ textDecoration: "none", color: "#414141" }}
          to="/profile"
        >
          <MenuItem className={classes.menuItem} onClick={handleClose}>
            <ListItemIcon style={{ minWidth: "0px", marginRight: "10px" }}>
              <PersonIcon className={classes.icons} />
            </ListItemIcon>
            Profile
          </MenuItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#414141" }}
          to="/profile"
        >
          <MenuItem className={classes.menuItem} onClick={handleClose}>
            <ListItemIcon style={{ minWidth: "0px", marginRight: "10px" }}>
              <StorageIcon className={classes.icons} />
            </ListItemIcon>
            My orders
          </MenuItem>
        </Link>
        <MenuItem className={classes.menuItem} onClick={removeStorage}>
          <ListItemIcon style={{ minWidth: "0px", marginRight: "10px" }}>
            <ExitToAppIcon className={classes.icons} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
