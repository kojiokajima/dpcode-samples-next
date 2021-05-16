import styles from '../styles/Home.module.css'
import { signOut, useSession, getSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession()
  console.log("SESSION: ", session);
  console.log("LOADING: ", loading);

  return (
    <div className={styles.container}>
    </div>
  )
}
