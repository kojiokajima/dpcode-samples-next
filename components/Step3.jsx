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

function Step3({userInfo}) {
  const classes = useStyles()
  return (
    <SignUpCardContainer title={"SIGN UP WITH SOCIAL MEDIA"}>
      <SignUpContentContainer>
        <div className={classes.name}>
          <MyTextInput label={"Your First Name"} name={"yoyo"} defaultValue={userInfo.given_name ? userInfo.given_name : ""} isWide={false} />
          <MyTextInput label={"Your Last Name"} name={"yoyo"} defaultValue={userInfo.family_name ? userInfo.family_name : ""} isWide={false} />
          {/* <MyTextInput label={"Your First Name"} name={"yoyo"} defaultValue={props.given_name ? props.given_name : ""} isWide={false} />
          <MyTextInput label={"Your Last Name"} name={"yoyo"} defaultValue={props.family_name ? props.family_name : ""} isWide={false} /> */}
        </div>
        <MyTextInput label={"Your Email"} name={"yoyo"} defaultValue={userInfo.email ? userInfo.email : ""} type={"email"} required />
        <MyTextInput label={"Phone Number"} name={"yoyo"} defaultValue={userInfo.phone_number ? userInfo.phone_number : ""} type={"tell"} required />
        <MyTextInput label={"Date of Birth"} name={"yoyo"} defaultValue={userInfo.birthdate ? userInfo.birthdate : ""} type={"date"} required />
        {/* <MyTextInput label={"Date of Birth"} name={"yoyo"} defaultValue={"1997-01-24"} type={"date"} required /> */}
        {/* <MyTextInput label={"Your Email"} name={"yoyo"} defaultValue={props.email ? props.email : ""} type={"email"} required />
        <MyTextInput label={"Phone Number"} name={"yoyo"} defaultValue={props.phone_number ? props.phone_number : ""} type={"tell"} required />
        <MyTextInput label={"Date of Birth"} name={"yoyo"} defaultValue={props.birthdate ? props.birthdate : ""} type={"date"} required /> */}
        <div className={classes.name}>
          <MyTextInput label={"Your Parent First Name"} name={"yoyo"} defaultValue={""} isWide={false} isRequired={false} />
          <MyTextInput label={"Your Parent Last Name"} name={"yoyo"} defaultValue={""} isWide={false} isRequired={false} />
        </div>
        <MyTextInput label={"Your Parent Email"} name={"yoyo"} defaultValue={""} type={"email"} isRequired={false} />
        <MyTextInput label={"Date of Birth"} name={"yoyo"} defaultValue={""} type={"tell"} />
        <MyTextInput label={"Your Parent Phone Number"} name={"yoyo"} defaultValue={""} type={"date"} isRequired={false} />
      </SignUpContentContainer>
    </SignUpCardContainer>
  )
}


export default Step3
