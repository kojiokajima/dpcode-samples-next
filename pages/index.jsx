import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession, getSession } from "next-auth/client";
import { MyButton, SignUpButton } from "../components/UIkit/index";
import { getProfileInfo } from "../lib/test";
import { useEffect } from "react";
import axios from "axios";

export default function Home(props) {
  const [session, loading] = useSession();
  console.log("INDEX.JS  SESSION: ", session);

  useEffect(() => {
    console.log("HELLO PROFILEDATA IS ", props)
    // if(profileData){
    //   console.log("INDEX.JS  PROFILE DATA: ", profileData);
    // } else {
    //   console.log("INDEX.JS  NONE");
    // }
  }, [session])

  // const getProfileData = async() => {
  //   const response = await axios.get(
  //     "https://dp-test.auth.us-east-2.amazoncognito.com/oauth2/userInfo",
  //     {
  //       headers: {
  //         Authorization: "Bearer " + session.accessToken,
  //       },
  //     }
  //   );
  //   console.log("RESPONSE: ", response.data);
  // }

  // useEffect(() => {
  //   console.log("USE EFFECT!");
  //   if (session) {
  //     console.log("IN IF");
  //     console.log("SESSION IS: ", session);
      
  //     // const data = getProfileData()
  //     getProfileData()
  //   }
  // }, [session]);

  return (
    <div className={styles.container}>
      <SignUpButton label={"Facebook"} />
      <br />
      <br />
      <SignUpButton label={"Google"} />
      <br />
      <br />
      <SignUpButton label={"LINE"} />
      {
        props.username ? (
          <div>HELLO {props.given_name}</div>
          // <span>KNOWN</span>
          ) : (
          // <div>HELLO {props.?.family_name}</div>
          <div>UNKNOWN</div>
        )
      }
    </div>
  );
}

export const getServerSideProps = async (context) => {
// export async function getServerSideProps(){
  // console.log("INDEX.JS  HI THIS IS GETSERVERSIDEPROPS");
  // console.log("SESSION??: ", session)
  // const session = await getSession()

  const profileData = await getProfileInfo(context)
  console.log("PROFILE DATA: ", profileData)

  return {
    props: {
      ...profileData,
    },
  };
};

// {user: {…}, expires: "2021-06-16T00:01:04.213Z"}
// expires: "2021-06-16T00:01:04.213Z"
// user:
// email: "okka01240110@gmail.com"
// image: null
// name: "facebook_5460859367319278"

// {user: {…}, expires: "2021-06-16T00:08:58.219Z"}
// expires: "2021-06-16T00:08:58.219Z"
// user:
// email: "okka01240110@gmail.com"
// image: null
// name: "google_101670120447530563356"
