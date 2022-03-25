import { SkeletonTheme } from 'react-loading-skeleton'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <SkeletonTheme highlightColor="#d5d5d5">
        <Component {...pageProps} />
    </SkeletonTheme>
  </>
}

export default MyApp
