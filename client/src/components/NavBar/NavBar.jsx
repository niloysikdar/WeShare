import { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import { actionTypes } from "../../constants/actionTypes";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [userdata, setUserdata] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );

  const logout = () => {
    dispatch({
      type: actionTypes.LOGOUT,
    });
    history.replace("/auth");
    setUserdata(null);
  };

  useEffect(() => {
    setUserdata(JSON.parse(localStorage.getItem("userdata")));
    if (userdata) {
      const decodedToken = decode(userdata.token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    // eslint-disable-next-line
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          className={classes.heading}
          variant="h3"
          align="center"
          component={Link}
          to="/"
        >
          WeShare
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {userdata ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={userdata.result.name}
              src={userdata.result.imageUrl}
            >
              {userdata.result.name.charAt(0)}
            </Avatar>
            <Typography variant="h6" className={classes.userName}>
              {userdata.result.name}
            </Typography>
            <Button variant="contained" color="secondary" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/auth"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
