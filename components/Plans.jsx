import React from "react";
import { Plan } from "../components/index";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "0 1.11vw",
  },
});

const Plans = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Plan />
      <Plan />
    </div>
  );
};

export default Plans;
