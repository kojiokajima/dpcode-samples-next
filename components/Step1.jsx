import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card, FormControl, FormControlLabel, Checkbox} from '@material-ui/core'
import {SignUpCardContainer, SignUpContentContainer, MyButton} from './UIkit/index'

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#F8F8F8",
    // width: "40vw",
    // width: "100%",
    height: "37.78vw",
    color: "#69696a",
    // margin: "2.22vw auto",
    marginBottom: "2.22vw",
    overflow: "scroll",
    padding: "2.22vw",
    fontSize: "1.4vw",
  },

  agreement: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // margin: "0 2.22vw",
  },

  checkboxAndText: {
    "& span:nth-child(2)": {
      fontSize: "1.3vw",
    }
  }
}))

const Step1 = () => {
  const classes = useStyles()

  return (
    <SignUpCardContainer className={classes.root}  title={"PRIVACY POLICY"}>
      <SignUpContentContainer>
        <Card className={classes.card}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel sequi architecto, magnam sapiente dolorem distinctio nobis iusto vero, perspiciatis, provident odit voluptatum sunt nostrum repudiandae molestias excepturi deleniti blanditiis.
          Accusantium saepe debitis deleniti iste dolorum ullam omnis error enim animi natus ad aut maiores excepturi eius, reprehenderit tenetur nam laboriosam dolore qui distinctio voluptas eligendi assumenda impedit! Magnam, ipsum?
          Et, culpa. Maiores, laboriosam? Autem veritatis esse soluta, sequi sapiente aliquam, reiciendis provident sint possimus quia natus voluptas. Soluta odit rem natus repellendus exercitationem illo recusandae facilis hic velit voluptatibus?
          Sapiente natus iure atque, nemo est maiores libero blanditiis praesentium ut quae sequi expedita perspiciatis dicta unde illo ducimus qui ullam? Commodi dolorem corporis vel consequuntur inventore nemo quasi officia.
          Ipsa autem pariatur assumenda labore libero nam tenetur similique nihil ex velit perferendis impedit itaque cupiditate, deleniti incidunt dolorem quasi necessitatibus. Consectetur, provident repellendus eius voluptatum expedita architecto veritatis tempore!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, iure? Pariatur expedita esse dolorum vero culpa illo consequatur fugit a aperiam, debitis ratione laboriosam ea excepturi assumenda rerum, in quidem.
          Ipsum reiciendis iste, odio quisquam, inventore ratione harum vitae quis repellat quibusdam, commodi ad! Dignissimos, veniam iure molestiae voluptate minus ipsa facilis aspernatur quidem illo excepturi voluptatibus? Magni, blanditiis pariatur.
          Nam laboriosam culpa maxime fugit tempore, aperiam ipsum fuga odio, provident saepe nulla ducimus quibusdam. Molestias odit laudantium excepturi fugit unde, debitis, laboriosam error sapiente reiciendis ipsa accusamus repellendus ex!
        </Card>
        <FormControl className={classes.agreement}>
          <FormControlLabel
              className={classes.checkboxAndText}
              value="end"
              control={<Checkbox color="primary" />}
              label="I have read and accepted the provacy policy"
              labelPlacement="end"
          />
          <MyButton label={"Next"} isContained={false} isLarge={false} />
        </FormControl>
      </SignUpContentContainer>

    </SignUpCardContainer>
  )
}

export default Step1
