import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import PrivateRoute from './componets/PrivetRoute';
import Dashboard from './pages/Dashboard';
import Home from './componets/Home';
import './App.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard onLogout={handleLogout} />
            </PrivateRoute>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
