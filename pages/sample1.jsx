import React from "react";
import { Hero, Footer } from "../components/index";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import {
  MyContainer,
  MyContentTitle,
  MyContentContainer,
  MyButton,
} from "../components/UIkit/index";

import { getRandomCoffee } from "../lib/test";

// 1440 * 900
// #28282A
// #06C8A1
// 3blocks(6.6667%) & 1block(3.23%)
// 2 blocks * 1block
// right: 32 * 16 = 512

const useStyles = makeStyles({
  paragraph: {
    width: "calc(100% - 4.44vw)",
    padding: "0 2.22vw",
    lineHeight: "135%",
    fontSize: "130%",
    color: "#28282A",

    ["@media (max-width: 375px)"]: {
      padding: "0 4vw",
    },
  },

  temporary: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "42.2vw",
    height: "30.9vw",
    backgroundColor: "#06C8A1"
  }
});

const SamplePage1 = (props) => {
  const classes = useStyles();

  return (
    <MyContainer>
      <Hero />
      <MyContentContainer>
        <MyContentTitle title={"TITLE (proxima nova medium)"} />
        <Typography className={classes.paragraph} variant="subtitle2">
          sParagraoh (Open Sans Regular) Our mission is to provide high-quality
          computer science education that lasts forever. We truly believe that
          everyone in the world will have the opportunity to attain an excellent
          education that every top 1% software engineer needs to know for their
          life-long career. We do understand that there are tons of online
          tutorials about "Coding". Here in DPCode Academy, we do not offer any
          type of "get-skilled-quick" schemes which ultimately waste your time.
          We are here to train the next top 1% software engineers.
        </Typography>
        {/* <div style={{ color: "orange" }}>{props.blend_name}</div> */}
      </MyContentContainer>
      {/* <Footer /> */}
      <div className={classes.temporary}>
        <MyButton label={"sample"} isContained={false} isExLarge={true} />
      </div>
    </MyContainer>
  );
};

// export const getStaticProps = async () => {
//   const coffee = await getRandomCoffee();

//   return {
//     props: {
//       ...coffee,
//     },
//   }
// };

export default SamplePage1;