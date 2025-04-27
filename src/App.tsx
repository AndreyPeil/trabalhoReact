import { useState } from 'react'

import './App.css'
import Welcome from './Components/Welcome'
import TrocarTitulo from './Components/TrocarTitulo'
import Temporizador from './Components/Temporizador'
import Usuaris from './Components/Usuarios'
import BotaoCondicional from './Components/BotaoCondicional'

function App() {
  return (
    <>
      <Welcome/>
      <TrocarTitulo/>
      <Temporizador/>
      <Usuaris/>
      <BotaoCondicional/>
    </>
  )
  
}

export default App
