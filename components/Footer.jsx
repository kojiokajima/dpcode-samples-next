import React from "react";
import { Card, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BlackLogo from "../assets/black_logo.svg";
import Facebook from "../assets/facebook.svg";
import Youtube from "../assets/youtube.svg";
import Instagram from "../assets/instagram.svg";

// 1440 * 900
// #28282A
// #06C8A1
// 3blocks(6.6667%) &

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D9FCF3",
    // height: "calc(15.83vw - 4.44vw)",
    height: "calc(15.56vw - 4.44vw)",
    padding: "2.22vw 6.67vw",
    // ["@media (max-width: 375px)"]: {
    [theme.breakpoints.down("xs")]: {
      height: "124.53vw",
      justifyContent: "space-betwwen",
      flexDirection: "column-reverse",
      padding: "0 8vw 4vw 8vw",
    },
  },
  footerLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "11.1vw",
    height: "11.1vw",
    padding: 0,
    margin: 0,

    "& img": {
      height: "6.04vw",
    },
    "& span": {
      fontSize: "1vw",
    },

    // ["@media (max-width: 375px)"]: {
    [theme.breakpoints.down("xs")]: {
      width: "25.6vw",
      height: "24vw",
      display: "flex",
      flexDirection: "column",
      fontSize: "3vw",

      "& img": {
        height: "16vw",
      },
      "& span": {
        fontSize: "2.6vw",
      },
    },
  },
  footerRight: {
    width: "35.5vw",
    height: "11.1vw",
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    margin: 0,

    "& ul": {
      textAlign: "left",
      "& li": {
        listStyle: "none",
        // fontSize: "12px",
        fontSize: "1vw",
        "& + li": {
          marginTop: "0.8vw",
        },
      },

      "& + ul": {
        paddingLeft: "4.44%",
      },
      "& ul": {
        display: "flex",
        "& li": {
          marginTop: "0 !important",
          height: "2.22vw",
          display: "flex",
          alignItems: "center",
          "& img": {
            width: "1.8vw",
          },
          "& + li": {
            marginLeft: "15%",
          },
        },
      },
    },
    // ["@media (max-width: 375px)"]: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      width: "calc(100vw - 16vw)",
      // height: "82vw",
      "& ul": {
        textAlign: "center",
        "& li": {
          fontSize: "3vw !important",
          // backgroundColor: "red",
          "& + li": {
            marginTop: "3vw !important",
          },
        },
        "& + ul": {
          paddingLeft: "0 !important",
        },
        "& ul": {
          justifyContent: "center",
          "& li": {
            height: "8vw !important",
            marginTop: "0 !important",
            "& img": {
              width: "6vw !important",
            },
            "& + li": {
              marginLeft: "4vw !important",
            },
          },
        },
      },
    },
  },
  listTitle: {
    height: "3vw",
    fontSize: "1.2vw",
    "&:before": {
      content: "''",
      display: "block",
      width: "3.33vw",
      height: "2px",
      transform: "translateY(1.8vw)",
      backgroundColor: "#06C8A1",
    },
    // ["@media (max-width: 375px)"]: {
    [theme.breakpoints.down("xs")]: {
      display: "inline-block",
      fontSize: "4vw",
      margin: "8vw 0 4vw 0",
      "&:before": {
        width: "8vw",
        transform: "translate(0, 5vw)",
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Container className={classes.footerLeft}>
        <img src={BlackLogo} alt="" />
        <span>&copy;2021 DPCode Inc.</span>
        {/* &copy; DPCode Inc. */}
      </Container>
      <Container className={classes.footerRight}>
        <ul>
          <Typography className={classes.listTitle} variant="h6" gutterBottom>
            RESOURCES
          </Typography>
          <li>Application Process</li>
          <li>Apply Now</li>
          <li>Help & FAQ</li>
          <li>PrivacyPolicy</li>
        </ul>
        <ul>
          <Typography className={classes.listTitle} variant="h6" gutterBottom>
            COMPANY
          </Typography>
          <li>About DP Code</li>
          <li>Available Courses</li>
        </ul>
        <ul>
          <Typography className={classes.listTitle} variant="h6" gutterBottom>
            COMMUNITY
          </Typography>
          <ul>
            <li>
              <img src={Facebook} alt="" />
            </li>
            <li>
              <img src={Youtube} alt="" />
            </li>
            <li>
              <img src={Instagram} alt="" />
            </li>
          </ul>
        </ul>
      </Container>
    </Card>
  );
};

export default Footer;
