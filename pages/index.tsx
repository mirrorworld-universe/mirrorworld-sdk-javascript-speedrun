import type { NextPage } from 'next'
import {MirrorWorld, ClusterEnvironment, IUser} from "@mirrorworld/web3.js"
import styles from '../styles/Home.module.css'
import {useState} from "react";

const Home: NextPage = () => {
  
  
  const mirrorworld = new MirrorWorld({
    apiKey: "mw_xOwpwglSoZiLGgCAYt1OHzPz7H3iFtU1Kt0",
    env: ClusterEnvironment.testnet, // Can be ClusterEnvionment.mainnet for mainnet
  })
  
  const [user, setUser] = useState<IUser>()
  
  async function login() {
    const result = await mirrorworld.login()
    console.log("result", result)
    if (result.user) {
      setUser(result.user)
    }
  }
  return (
    <div className={styles.container}>
      <button onClick={login}>Login :)</button>
      <div>
        {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : null}
      </div>
    </div>
  )
}

export default Home
