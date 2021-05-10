import React from "react";
import { MyCard } from "../components/index";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
});

const Cards = () => {
  const classes = useStyles();
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={classes.root}>
      {arr.map((item, idx) => {
        return <MyCard key={idx} />;
      })}
    </div>
  );
};

export default Cards;