import React from 'react'
import {SignUpCardContainer, SignUpContentContainer, SignUpButton, MyTextInput} from "./UIkit/index"
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
  name: {
    display: "flex",
    justifyContent: "space-between"
  }
}))

function Step3() {
  const classes = useStyles()
  return (
    <SignUpCardContainer title={"SIGN UP WITH SOCIAL MEDIA"}>
      <SignUpContentContainer>
        <div className={classes.name}>
          <MyTextInput label={"Your First Name"} name={"yoyo"} defaultValue={""} isWide={false} />
          <MyTextInput label={"Your Last Name"} name={"yoyo"} defaultValue={""} isWide={false} />
        </div>
        <MyTextInput label={"Your Email"} name={"yoyo"} defaultValue={""} type={"email"} required />
        <MyTextInput label={"Phone Number"} name={"yoyo"} defaultValue={""} type={"tell"} required />
        <MyTextInput label={"Date of Birth"} name={"yoyo"} defaultValue={""} type={"date"} required />
        <div className={classes.name}>
          <MyTextInput label={"Your Parent First Name"} name={"yoyo"} defaultValue={""} isWide={false} isRequired={false} />
          <MyTextInput label={"Your Parent Last Name"} name={"yoyo"} defaultValue={""} isWide={false} isRequired={false} />
        </div>
        <MyTextInput label={"Your Parent Email"} name={"yoyo"} defaultValue={""} type={"email"} isRequired={false} />
        <MyTextInput label={"Your Parent Phone Number"} name={"yoyo"} defaultValue={""} type={"date"} isRequired={false} />
      </SignUpContentContainer>
    </SignUpCardContainer>
  )
}

export default Step3
