import { useNavigate } from 'react-router-dom';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/', { replace: true });
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Dashboard;