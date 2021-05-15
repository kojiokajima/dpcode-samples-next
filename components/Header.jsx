import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import WhiteLogo from "../assets/white_logo.svg";
import { AccountCircle, Menu } from "@material-ui/icons";
import Image from "next/image";
// 1440 * 900
// #28282A
// #06C8A1

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#28282A",
    height: "6.67vw",
    width: "100%",
    padding: "2.22vw 4.44vw",

    // [theme.breakpoints.down("sm")]: {
    [theme.breakpoints.down("xs")]: {
      padding: "4vw",
      height: "20vw",
    },
  },
  container: {
    maxWidth: "unset",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
    margin: 0,

    "& .header-left": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "26vw",
      color: "#06C8A1",

      "& h5": {
        fontSize: "2vw",
      },
      "& img": {
        width: "4.72vw",
      },
      // [theme.breakpoints.down("sm")]: {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        justifyContent: "space-between",
        "& h5": {
          fontSize: "4vw",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        "& img": {
          width: "16vw",
        },
      },
    },

    "& .header-right": {
      display: "flex",
      alignItems: "center",
      "& li": {
        listStyle: "none",
        fontSize: "1.6vw",
        "& + li": {
          paddingLeft: "1.2vw",
        },
      },
      "& svg": {
        paddingLeft: "1.2vw",
      },

      // [theme.breakpoints.down("sm")]: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  },
  btn: {
    fontSize: "110%",
    color: "#06C8A1",
  },
  menu: {
    display: "none",
    fontSize: "10vw",
    // [theme.breakpoints.down("sm")]: {
    [theme.breakpoints.down("xs")]: {
      display: "inherit",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static" color="primary">
      <Container className={classes.container}>
        <div className="header-left">
          <img src={WhiteLogo} alt="" />
          <Typography variant="h5">DP CODE ACADEMY</Typography>
          <Menu className={classes.menu} />
        </div>
        <ul className="header-right">
          <li>
            {/* <Link href="/about"> */}
            {/* <Button className={classes.btn} style={{ color: "#FFF" }}> */}
            ABOUT
            {/* </Button> */}
            {/* </Link> */}
          </li>
          <li>
            {/* <Link href="/courses"> */}
            {/* <Button className={classes.btn} style={{ color: "#FFF" }}> */}
            COURSES
            {/* </Button> */}
            {/* </Link> */}
          </li>
          <li>
            {/* <Button className={classes.btn}> */}
            MY PAGE
            {/* </Button> */}
          </li>
          {/* <li> */}
          {/* <Button className={classes.btn}> */}
          <AccountCircle />
          {/* </Button> */}
          {/* </li> */}
        </ul>
        {/* <ul className={classes.buttonBlockFight}>{listItems}</ul> */}
        {/* </div> */}
      </Container>
    </AppBar>
  );
};

export default Header;
