import React from "react";
import { Card, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import BlackLogo from "../assets/black_logo.svg";
// import BlackLogo from "../assets/black_logo.svg";
// import Facebook from "../assets/facebook.svg";
// import Youtube from "../assets/youtube.svg";
// import Instagram from "../assets/instagram.svg";
import Image from "next/image";
import BlackLogo from "../assets/black_logo.svg";
import Facebook from "../assets/facebook.svg";
import Youtube from "../assets/youtube.svg";
import Instagram from "../assets/instagram.svg";

// 1440 * 900
// #28282A
// #06C8A1
// 3blocks(6.6667%) &

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D9FCF3",
    height: "calc(15.83vw - 4.44vw)",
    padding: "2.22vw 6.67vw",
    ["@media (max-width: 375px)"]: {
      height: "124.53vw",
      justifyContent: "space-betwwen",
      flexDirection: "column-reverse",
      padding: "0 8vw 4vw 8vw",
    },
  },
  footerLeft: {
    width: "8.89%",
    padding: 0,
    margin: 0,

    ["@media (max-width: 375px)"]: {
      width: "25.6vw",
      display: "flex",
      flexDirection: "column",
      fontSize: "3vw",
    },
  },
  footerRight: {
    width: "35.5%",
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    margin: 0,

    "& ul": {
      textAlign: "left",
      "& li": {
        listStyle: "none",
        fontSize: "12px",
        "& + li": {
          marginTop: "14%",
        },
      },

      "& + ul": {
        paddingLeft: "4.44%",
      },
      "& ul": {
        display: "flex",
        "& li": {
          marginTop: "0 !important",
          "& + li": {
            marginLeft: "15%",
          },
        },
      },
    },
    ["@media (max-width: 375px)"]: {
      flexDirection: "column",
      width: "calc(100vw - 16vw)",
      "& ul": {
        "& li": {
          fontSize: "12px",
          "& + li": {
            marginTop: "2vw !important",
          },
        },
        "& + ul": {
          paddingLeft: "0 !important",
        },
        "& ul": {
          "& li": {
            marginTop: "0 !important",
            "& + li": {
              marginLeft: "4vw !important",
            },
          },
        },
      },
    },
  },
  listTitle: {
    "&:after": {
      content: "''",
      display: "inline-block",
      width: "50px",
      height: "2px",
      transform: "translateY(-16px)",
      backgroundColor: "#06C8A1",
    },
    ["@media (max-width: 375px)"]: {
      fontSize: "4vw",
      margin: "8vw 0 4vw 0",
      "&:after": {
        display: "block",
        width: "25px",
        transform: "none",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Container className={classes.footerLeft}>
        <img src={BlackLogo} alt="" />
        &copy; DPCode Inc.
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
