import React from 'react'
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {signIn} from 'next-auth/client'
// 26.67vw * 4.44vw
// label, socialService(Google, Facebook, LINE)

const useStyles = makeStyles((theme) => ({
  root: {
    width: "24.44vw",
    height: "4.44vw",
    fontSize: "1.5vw", // --> check
    color: "#06C8A1",
    backgroundColor: "#FFF",
    border: "1px solid #06C8A1",
    padding: 0,
  }
}))

const SignUpButton = (props) => {
  const classes = useStyles()

  return (
    <Button
      className={classes.root}
      onClick={() => signIn(
        'cognito',
        {callbackUrl: "http://localhost:3000"},
        {identity_provider: props.label}
      )}
    >
      SIGN UP WITH {props.label}
    </Button>
  )
}

export default SignUpButton
