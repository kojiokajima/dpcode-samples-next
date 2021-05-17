import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import {MyButton, SignUpButton} from '../components/UIkit/index'

export default function Home() {
  const [session, loading] = useSession()
  console.log("SESSION: ", session);

  return (
    <div className={styles.container}>
        <SignUpButton label={"Facebook"} />
        <br /><br />
        <SignUpButton label={"Google"} />
        <br /><br />
        <SignUpButton label={"LINE"} />
    </div>
  )
}

// getStaticProps = async () => {
  //   const coffee = await getRandomCoffee();
  
  //   return {
  //     props: {
  //       ...coffee,
  //     },
  //   }
  // };


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