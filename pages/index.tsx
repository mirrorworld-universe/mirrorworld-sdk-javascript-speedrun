import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useMirrorWorld } from "../hooks/useMirrorWorld";

const Home: NextPage = () => {
  
  const { user, mirrorworld, login } = useMirrorWorld()
  
  async function fetchNFTs() {
    try {
      const nfts = await mirrorworld.getNFTs({
        limit: 10,
        offset: 0
      })
      console.log("nfts", nfts)
    } catch (e) {
      console.error("Couldn't fetch NFTs", e)
    }
  }
  
  async function fetchSPLTokens() {
    try {
      const tokens = await mirrorworld.getTokens()
      console.log("tokens", tokens)
    } catch (e) {
      console.error("Couldn't fetch user tokens", e)
    }
  }
  
  async function fetchTransactions() {
    try {
      const trasnactions = await mirrorworld.getTransactions()
      console.log("trasnactions", trasnactions)
    } catch (e) {
      console.error("Couldn't fetch user trasnactions", e)
    }
  }
  
  return (
    <div className={styles.container}>
      <button onClick={login}>Login :)</button>
      <div>
        {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : null}
      </div>
      <div>
        <button onClick={fetchNFTs}>
          Get NFTs
        </button>
        <br/><br/>
        <button onClick={fetchSPLTokens}>
          Get my tokens
        </button>
        <br/><br/>
        <button onClick={fetchTransactions}>
          Get my transactions
        </button>
        <br/><br/>
      </div>
    </div>
  )
}

export default Home
