import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { Button } from "@material-ui/core";
import dotenv from "dotenv";
import useStyles from "./styles";

dotenv.config();
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleLoginButton = ({ isSignup }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const googleSuccess = async (res) => {
    const tokenId = res?.tokenId;
    const result = res?.profileObj;
    try {
      dispatch({
        type: "AUTH",
        payload: { result, tokenId },
      });
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log("Failure");
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      render={(renderProps) => (
        <Button
          className={classes.googleButton}
          variant="contained"
          color="secondary"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          {isSignup ? "Sign Up with Google" : "Login with Google"}
        </Button>
      )}
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy="single_host_origin"
    ></GoogleLogin>
  );
};

export default GoogleLoginButton;
