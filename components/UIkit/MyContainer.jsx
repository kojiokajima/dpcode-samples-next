import React from 'react'
import {Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    maxWidth: "unset",
  }
})

const MyContainer = ({children}) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      {children}
    </Container>
  )
}

export default MyContainer
