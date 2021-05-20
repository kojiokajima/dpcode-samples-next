import React from 'react'
import { Card, CardContent, Typography, CardActions } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MyButton } from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "48.89vw",
    // height: "41.11vw",
    border: "1px solid #C5C5C5",
    margin: "0 calc(3.33vw - 1px) 3vh calc(3.33vw - 1px)",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",

    ["@media (max-width: 375px)"]: {
      width: "76vw",
      height: "87vw",
      margin: "0 calc(4vw - 1px) 12vw calc(4vw - 1px)",
    },
  },
  content: {
    padding: 0,
    margin: 0,
    height: "100%",
    width: "100%",
    "&:last-child": {
      padding: 0
    }
  },
  title: {
    padding: 0,
    margin: 0,
    color: "#FFF",
    height: "4.44vw",
    background: "#06C8A1",
    verticalAlign: "middle",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5vw",

    ["@media (max-width: 375px)"]: {
      fontSize: "4vw",
    },
  },
  price: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#06C8A1",
    height: "20%",
    fontWeight: "bold",
    fontSize: "4vw",
    "& > *": {
      marginTop: "2.22vh",
      borderBottom: "2px solid #06C8A1",
    },
    ["@media (max-width: 375px)"]: {
      fontSize: "10vw",
    },
  },
  doller: {
    verticalAlign: "70%",
    fontSize: "40%",
  },

  list: {
    width: "26.61vw",
    backgroundColor: theme.palette.background.paper,
    padding: 0,
    paddingTop: "2.22vw",
    margin: "0 auto",
    "& li": {
      listStyle: "none",
      fontSize: "1.4vw",
      display: "flex",
      alignItems: "center",

      "& + li": {
        marginTop: "2.22vw",
      },
    },
    ["@media (max-width: 375px)"]: {
      width: "56vw",
      padding: "8vw 0 6vw 0",
      "& li": {
        fontSize: "2.6vw",
        "& + li": {
          marginTop: "4vw !important",
        },

        "& img": {
          width: "5vw",
        },
      },
    },
  },
  icon: {
    ["@media (max-width: 375px)"]: {
      justifyContent: "space-around",
    },
  },
  buttonArea: {
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SignUpCardContainer = ({title, children}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography
          className={classes.title}
          color="textSecondary"
          variant="h5"
          gutterBottom
        >
          {title}
        </Typography>
        {children}
      </CardContent>
      {/* <CardActions className={classes.buttonArea}> */}
        {/* <MyButton label={"Select"} isContained={true} isLarge={true} /> */}
      {/* </CardActions> */}
    </Card>
  )
}

export default SignUpCardContainer
