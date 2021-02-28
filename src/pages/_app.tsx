import { useState } from 'react'

import '../styles/global.css'

{/* Tudo que for de uso completo da aplicação será posto aqui */ }

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
