import React from "react";
import {MyButton} from './UIkit/index'
import { Card, CardMedia, CardContent, Typography, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// 11 * 9.5 --> 4.5 + 5
// 24.44% * 21.11% --> 10% + 11.11%
// #69696A
// #06C8A1

const useStyles = makeStyles((theme) => ({
  root: {
    width: "24.44vw",
    height: "21.11vw",
    margin: "0 2.22vw 3.33vw 2.22vw",
    "& card-media": {},
    "& cart-content": {},
    "& card-actions": {},

    ['@media (max-width: 375px)']: {
      width: "76vw",
      height: "65vw",
      margin: "0 4vw 6vw 4vw",
    }
  },
  imageArea: {
    height: "47.36%",
  },
  contentArea: {
    paddingBottom: "unset",
    padding: "1.11vw",

    ['@media (max-width: 375px)']: {
      padding: '2vw',
    }
  },
  title: {
    borderBottom: "2px solid #06C8A1",
    marginBottom: "4%",
    fontSize: "1.2vw",
    ['@media (max-width: 375px)']: {
      fontSize: "4vw",
    }
  },
  startDate: {
    fontSize: "1.0vw",
    ['@media (max-width: 375px)']: {
      fontSize: "3.2vw",
    }
  },
  description: {
    fontSize: "0.8vw",
    ['@media (max-width: 375px)']: {
      fontSize: "3vw",
    }
  },
  btnArea: {
    padding: 0,
    paddingTop: "2.5%",
  },
}));

const MyCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Some Image"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
        style={{ backgroundColor: "#06C8A1" }}
        className={classes.imageArea}
      />
      <CardContent className={classes.contentArea}>
        <Typography className={classes.title} gutterBottom component="h4">
          Intro to Computer Science(DPCS)
        </Typography>
        <Typography
          className={classes.startDate}
          variant="body2"
          color="textSecondary"
          component="h4"
        >
          START DATE: CONTACT US!
        </Typography>
        <Typography
          className={classes.description}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          An introduction to the fundamentals of computer science and the art of
          programming
        </Typography>
        <CardActions className={classes.btnArea}>
          {/* <MyButton label={"Learn More"} isContained={false} isLarge={false} /> */}
          <MyButton label={"Learn More"} isContained={false} />
          <MyButton label={"Apply Now"} isContained={true} />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default MyCard;
