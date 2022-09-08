import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {MirrorWorldProvider} from "../hooks/useMirrorWorld";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MirrorWorldProvider>
      <Component {...pageProps} />
    </MirrorWorldProvider>
  )
}

export default MyApp
