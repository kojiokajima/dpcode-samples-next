import React from "react";
import { Paper } from "@material-ui/core";
import ColorLogo from "../assets/color_logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";

// 1440 * 900
// #28282A
// #06C8A1

const useStyles = makeStyles({
  root: {
    height: "17.78vw",
    ["@media (max-width: 375px)"]: {
      height: "50vw",
    },
  },
  paper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#06C8A1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "17.71vw",
    ["@media (max-width: 375px)"]: {
      width: "32vw",
    },
  },
});

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <img src={ColorLogo} alt="" className={classes.logo} />
      </Paper>
    </div>
  );
};

export default Hero;
