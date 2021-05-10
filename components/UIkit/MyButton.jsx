import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// props: label, isContained, isLarge
// 96 * 32 & 192 * 48

const useStyles = makeStyles(() => ({
  root: (props) => ({
    width: props.isLarge ? "13.33vw" : "6.67vw",
    height: props.isLarge ? "3.33vw" : "2.22vw",
    fontSize: props.isLarge ? "1.2vw" : "0.7vw",
    color: props.isContained ? "#FFF" : "#06C8A1",
    border: props.isContained ? "none" : "1px solid #06C8A1",
    backgroundColor: props.isContained ? "#06C8A1" : "#FFF",

    ['@media (max-width: 375px)']: {
      width: props.isLarge ? "25vw" : "23vw",
      height: props.isLarge ? "6vw" : "6vw",
      fontSize: props.isLarge ? "2.2vw" : "2vw",
      padding: "2vw 3vw"
    }
  }),
}));

const MyButton = (props) => {
  const classes = useStyles(props);

  return <Button className={classes.root}>{props.label}</Button>;
};

export default MyButton;
