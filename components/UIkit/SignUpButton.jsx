import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { signIn } from "next-auth/client";
import Google from "../../assets/login/google.svg";
import Facebook from "../../assets/login/facebook.svg";
import LINE from "../../assets/login/line.svg";
import KAKAO from "../../assets/login/kakao_talk.svg";
// 26.67vw * 4.44vw
// label, socialService(Google, Facebook, LINE, Kakao)

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "26.67vw",
    height: "4.44vw",
    fontSize: "1.2vw", // --> check
    color: "#06C8A1",
    backgroundColor: "#FFF",
    border: "1px solid #06C8A1",
    padding: "1.11vw",
    "&:hover ": {
      // color: "#FFF",
      border: "none",
      // backgroundColor: "#06C8A1",
      backgroundColor: "rgba(6, 200, 161, .2)",
    },
  },
  logo: {
    height: "2.22vw",
  },
  text: {
    fontFamily: "proxima-nova, sans-serif",
    // fontWeight: "300",
    display: "flex",
    // width: "20vw",
    width: "100%",
    justifyContent: "center",
  },
}));

const SignUpButton = (props) => {
  const classes = useStyles();
  let logo;
  switch (props.label) {
    case "Google":
      logo = Google;
      break;
    case "Facebook":
      logo = Facebook;
      break;
    case "LINE":
      logo = LINE;
      break;
    case "KAKAO":
      logo = KAKAO;
      break;
    default:
      logo = "";
      break;
  }

  return (
    <Button
      className={classes.root}
      onClick={() => {
        signIn(
          "cognito",
          // {callbackUrl: "http://localhost:3000/"},
          {},
          { identity_provider: props.label }
        );
        // signIn()
      }}
    >
      <img className={classes.logo} src={logo} alt="" />
      <div className={classes.text}>SIGN UP WITH {props.label}</div>
    </Button>
  );
};

export default SignUpButton;
