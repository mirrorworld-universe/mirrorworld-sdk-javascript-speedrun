import type { NextPage } from 'next'
import {MirrorWorld, ClusterEnvironment, IUser} from "@mirrorworld/web3.js"
import styles from '../styles/Home.module.css'
import {useState} from "react";
import {useMirrorWorld} from "../hooks/useMirrorWorld";

const Home: NextPage = () => {
  
  
  const { user, login } = useMirrorWorld()
  
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
