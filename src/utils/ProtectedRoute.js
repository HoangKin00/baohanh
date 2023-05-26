import React from 'react';
import { Navigate } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';

const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useLocalStorage('token', null);
  if (!token) {
    return <Navigate to={`/login`} replace />;
  }
  return children;
};

export default ProtectedRoute;
