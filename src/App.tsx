import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Pokemons from './Pages/pokemons'
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPagr'
import PokemonDetails from './Pages/PokeDetalhes'
import PesquisarNome from './Pages/PesquisarNome'

function App() {
//rotas
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<PokemonDetails />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path='/pesquisarPorNome/' element={<PesquisarNome/>}/>
      </Routes>
    </Router>
  )
}

export default App
