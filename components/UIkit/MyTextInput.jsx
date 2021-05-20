import React, { useState, useEffect } from "react";
import { TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// #28282A
// #54D2BC

const useStyles = makeStyles((theme) => ({
  // root: (isWide) => {
    // return {
      // backgroundColor: "orange",
      // "& div": {
      root: (isWide) =>  {
        return {
          width: isWide ? "100%" : "45%",
          marginBottom: "2.22vw",
          "& label": {
            fontSize: "80%",
            "& span": {
              color: "#54D2BC",
            },
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#54D2BC",
          },
          "& div": {
            // "& input": {
              // borderBottom: "2px solid #d2a708",
            // },
            "&:hover:not(.Mui-disabled)::before ": {
              borderBottom: "2px solid #54D2BC",
            },
            "&:after": {
              borderBottom: "2px solid #54D2BC",
    
            },
            // "&:before": {
            // },
          },
        }
      },

    // }
  // },
}));

const PrimaryTextInput = ({ label, name, defaultValue = "", isWide=true, isRequired=true, type }) => {
  const classes = useStyles(isWide);

  return (
    <>
    {
      isRequired ?
        <TextField className={classes.root} label={label} name={name} defaultValue={defaultValue} InputLabelProps={{shrink: true}} type={type} required />
      :
        <TextField className={classes.root} label={label} name={name} defaultValue={defaultValue} InputLabelProps={{shrink: true}} type={type} />
    }
    </>
  );
};

export default PrimaryTextInput;

// const MyTextField = styled(TextField)`
//   width: 100%;
//   & .MuiFormLabel-root.Mui-focused {
//     color: #d2a708;
//   }
//   & > .MuiInput-underline {
//     &:after {
//       border-bottom: 2px solid #d2a708;
//     }
//     &:hover:not(.Mui-disabled)::before {
//       border-bottom: 2px solid #d2a708;
//     }
//     &::before {
//       border-bottom: 1px solid #d2a708;
//     }
//     & > input {
//     }
//   }
// `;
