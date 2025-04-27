import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contato from './pages/Contato';
import { NotFound } from './pages/404';
import { use } from 'react';
import Detalhes from './pages/Datalhes';

// faz os links, quando aperta faz o redirect pra pag certa
export default function App() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };
  return (
    <div>
      <nav>
        <Link to="/">Início</Link> | <Link to="/about">Sobre</Link>|<Link to='/contato'>Contato</Link>
      </nav>
      <button onClick={handleClick}>sobre com o use state</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/detalhes/:id" element={<Detalhes/>} />
      </Routes>
    </div>
  );
}