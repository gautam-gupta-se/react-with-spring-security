import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Cart from './components/Cart';
import Profile from './components/Profile';
function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/register"  element={<RegisterForm/>} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} /> 
        <Route path="/profile" element={token ? <Profile token={token} /> : <Navigate replace to="/login" />}/>
        <Route path="/cart" element={token ? <Cart token={token} /> : <Navigate replace to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
