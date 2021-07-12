import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();
  const user = null;
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
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography variant="h6" className={classes.userName}>
              {user.result.name}
            </Typography>
            <Button variant="contained" color="secondary" onClick={() => {}}>
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
