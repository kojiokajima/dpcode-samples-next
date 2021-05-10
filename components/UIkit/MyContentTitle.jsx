import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "inline-block",
    color: "#06C8A1",
    borderBottom: "2px solid #06C8A1",
    padding: 0,
    marginBottom: "2.22vw",
    fontSize: "2vw",

    ["@media (max-width: 375px)"]: {
      marginBottom: "4vw",
      fontSize: "6vw",
    },
  },
}));

const MyContentTitle = ({ title }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.root} variant="h4">
      {title}
    </Typography>
  );
};

export default MyContentTitle;
