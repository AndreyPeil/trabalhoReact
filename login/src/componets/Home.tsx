import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Página Inicial</h2>
      <nav>
        <Link to="/login">Login</Link> |{' '}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
};

export default Home;