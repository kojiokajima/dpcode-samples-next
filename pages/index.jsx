import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import {MyButton, SignUpButton} from '../components/UIkit/index'

export default function Home() {
  const [session, loading] = useSession()

  return (
    <div className={styles.container}>
        <MyButton
          label={"GOOGLE"}
          isContained={true}
          isExLarge={true}
          onClick={() => signIn(
            'cognito',
            {callbackUrl: "http://localhost:3000"},
            {identity_provider: "Google"}
          )}
        />
        <br /><br />
        <MyButton
          label={"LINE"}
          isContained={true}
          isExLarge={true}
          onClick={() => signIn(
            'cognito',
            {callbackUrl: "http://localhost:3000"},
            {identity_provider: "LINE"}
          )}
        />
        <br /><br />
        <MyButton
          label={"Facebook"}
          isContained={true}
          isExLarge={true}
          onClick={() => signIn(
            'cognito',
            {callbackUrl: "http://localhost:3000"},
            {identity_provider: "Facebook"}
          )}
        />
        <br /><br />
        <SignUpButton label={"Facebook"} />
    </div>
  )
}
