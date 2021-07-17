import { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
} from "@material-ui/core";
import LockOutlined from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import InputField from "./InputField";
import GoogleLoginButton from "./GoogleLoginButton";

const Auth = () => {
  const classes = useStyles();
  const [isShowPassword, setShowPassword] = useState(true);
  const [isSignup, setisSignup] = useState(false);

  const handleChange = () => {};

  const handleSubmit = () => {};

  const handleIsShowPassword = () => {
    setShowPassword(!isShowPassword);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5"> {isSignup ? "Sign Up" : "Login"} </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <InputField
                  name="firstName"
                  label="First Name"
                  type="text"
                  half
                  handleChange={handleChange}
                />
                <InputField
                  name="lastName"
                  label="Last Name"
                  type="text"
                  half
                  handleChange={handleChange}
                />
              </>
            )}
            <InputField
              name="email"
              label="Email"
              type="email"
              handleChange={handleChange}
            />
            <InputField
              name="password"
              label="Password"
              type={isShowPassword ? "password" : "text"}
              handleShowPassword={handleIsShowPassword}
              handleChange={handleChange}
            />
            {isSignup && (
              <InputField
                name="password"
                label="Confirm Password"
                type={isShowPassword ? "password" : "text"}
                handleShowPassword={handleIsShowPassword}
                handleChange={handleChange}
              />
            )}
          </Grid>
          <Button
            type="submit"
            className={classes.submit}
            fullWidth
            variant="contained"
            color="primary"
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Button
                style={{ textTransform: "none" }}
                onClick={() => {
                  setisSignup(!isSignup);
                }}
              >
                {isSignup
                  ? "Already have an account? Login"
                  : "New User? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <GoogleLoginButton isSignup={isSignup} />
    </Container>
  );
};

export default Auth;
