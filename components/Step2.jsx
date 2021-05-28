import React, {useEffect} from 'react'
import {SignUpCardContainer, SignUpContentContainer, SignUpButton} from "./UIkit/index"
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    "& button + button": {
      marginTop: "2.22vw",
    }
  },
}))


function Step2() {

  const classes = useStyles()
  return (
    <SignUpCardContainer title={"SIGN UP WITH SOCIAL MEDIA"}>
      <SignUpContentContainer>
        <div  className={classes.container}>
          <SignUpButton label={"Facebook"} />
          <SignUpButton label={"Google"} />
          <SignUpButton label={"LINE"} />
          <SignUpButton label={"KAKAO"} />
        </div>
      </SignUpContentContainer>
    </SignUpCardContainer>
  )
}

export default Step2
