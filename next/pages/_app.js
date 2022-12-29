import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import UpperBanner from '../components/UpperBanner'
import useGithubRepoStarsCount from '../hooks/github-stars'
import '../styles/globals.scss'
import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {

  return(
    <main className={inter.className}>
      <UpperBanner />
      <Navbar />
      <Component {...pageProps} />
    </main>
    )
}

export default MyApp
