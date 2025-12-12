import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import { ROUTES } from './routes';
import './App.css';
import Register from './components/Register';


function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };
 const handleRegister = (userData) => {
    setUser(userData);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path={ROUTES.HOME}
          element={user ? <Navigate to={ROUTES.PROFILE} replace /> : <Login onLogin={handleLogin} />} 
        />
        <Route 
          path={ROUTES.PROFILE}
          element={user ? <Profile user={user} /> : <Navigate to={ROUTES.HOME} replace />} 
        />
        <Route path={ROUTES.REGISTER}
          element= {user ? <Navigate to={ROUTES.PROFILE} replace /> : <Register onRegister={handleRegister} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
