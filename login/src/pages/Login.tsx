import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate('/dashboard', { replace: true });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;