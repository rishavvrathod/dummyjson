// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './pages/components/store';
import Login from './pages/login';
import Home from './pages/home';

const App = () => {
  const [token, setToken] = useState('');

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/"
            element={token ? <Home token={token} /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
