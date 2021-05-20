import React from 'react'
import {Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
// 2 * 3 * 2 * 3

const useStyles = makeStyles({
  root: {
    padding: "4.44vw",
    margin: 0,
    maxWidth: "unset",
    // textAlign: "left",
    width: "100%",
    height: "100%",

    ['@media (max-width: 375px)']: {
      margin: "4vw 8vw",
    }
  }
})

const SignUpContentContainer = ({children}) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      {children}
    </Container>
  )
}

export default SignUpContentContainer
