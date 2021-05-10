import React from 'react'
import {Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
// 2 * 3 * 2 * 3

const useStyles = makeStyles({
  root: {
    margin: "4.44vw 6.67vw",
    padding: 0,
    maxWidth: "unset",
    textAlign: "left",
    width: "calc(100% - 13.34vw)",

    ['@media (max-width: 375px)']: {
      margin: "4vw 8vw",
    }
  }
})

const MyContentContainer = ({children}) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      {children}
    </Container>
  )
}

export default MyContentContainer
