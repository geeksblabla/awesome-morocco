import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import UpperBanner from '../components/UpperBanner'
import useGithubRepoStarsCount from '../hooks/github-stars'
import '../styles/globals.css'
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {



  return(
    <div className={styles.main}>
    <UpperBanner />
    <Navbar />
    <Component {...pageProps} />
    </div>
    )
}

export default MyApp
