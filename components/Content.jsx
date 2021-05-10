import React from 'react'
import {Card, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {MyContentTitle} from '../components/UIkit/index'

// 1440 * 900
// #28282A
// #06C8A1
// 3blocks(6.6667%) & 24.88889%

const useStyles = makeStyles({
  root: {
    height: "24.889vh",
    padding: "2.22% 6.667% 4.44% 6.667%",
    textAlign: "left",
  },
})

const Content = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <MyContentTitle title={"TITLE (proxima nova medium)"} />
      <Typography className={classes.paragraph} variant="subtitle2" gutterBottom>
        sParagraoh (Open Sans Regular) Our mission is to provide high-quality computer science education that lasts forever. We truly believe that everyone in the world will have the opportunity to attain an excellent education that every top 1% software engineer needs to know for their life-long career. We do understand that there are tons of online tutorials about "Coding". Here in DPCode Academy, we do not offer any type of "get-skilled-quick" schemes which ultimately waste your time. We are here to train the next top 1% software engineers.
      </Typography>
    </Card>
  )
}

export default Content
