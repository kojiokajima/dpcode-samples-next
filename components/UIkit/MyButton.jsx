import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// props: label, isContained, isLarge, isExLarge
// 96 * 32 & 192 * 48
// #06C8A1
// #54D2BC
//  #D0FFF6
// width*3,

const dependencyStyle = {};

const useStyles = makeStyles((theme) => ({
  root: ({ isLarge = false, isContained, isExLarge = false }) => {
    // console.log("isLarge: ", isLarge);
    // console.log("isContained: ", isContained);
    // console.log("isExLarge: ", isExLarge);

    return {
      // width: isLarge ? "13.33vw" : "6.67vw",
      width: isExLarge ? "24.44vw" : isLarge ? "13.33vw" : "6.67vw",
      // height: isLarge ? "3.33vw" : "2.22vw",
      height: isExLarge ? "4.44vw" : isLarge ? "3.33vw" : "2.22vw",
      // fontSize: isLarge ? "1.2vw" : "0.7vw",
      fontSize: isExLarge ? "1.5vw" : isLarge ? "1.2vw" : "0.7vw", // --> check
      color: isContained ? "#FFF" : "#06C8A1",
      // backgroundColor: isContained ? "#06C8A1" : "#FFF",
      backgroundColor: isContained ? "#06C8A1" : isExLarge ? "#D0FFF6" : "#FFF",
      border: isContained ? "none" : isExLarge ? "none" : "1px solid #06C8A1",

      padding: 0,
      "&:hover ": {
        // color: isContained ? "#06C8A1" : "#FFF",
        // border: isContained ? "1px solid #06C8A1" : "none",
        // backgroundColor: isContained ? "#FFF" : "#06C8A1",

        // oprion1
        color: isContained ? "#06C8A1" : isExLarge ? "#06C8A1" : "#FFF",
        border: isContained ? "1px solid #06C8A1" : "none",
        backgroundColor: isContained ? "#FFF" : isExLarge ? "#FFF" : "#06C8A1",

        // option2
        // color: isContained ? "#06C8A1" : "#FFF",
        // border: isContained ? "1px solid #06C8A1" : isExLarge ? "1px solid #FFF" : "none",
        // backgroundColor: isContained ? "#FFF" : "#06C8A1",
      },

      ["@media (max-width: 375px)"]: {
        // [theme.breakpoints.down('sm')]: {
        width: isLarge ? "25vw" : "23vw",
        height: isLarge ? "6vw" : "6vw",
        fontSize: isLarge ? "2.2vw" : "2vw",
        padding: "2vw 3vw",
      },
    };
  },
}));

const MyButton = (props) => {
  const classes = useStyles(props);

  return <Button className={classes.root} onClick={props.onClick}>{props.label}</Button>;
};

export default MyButton;
