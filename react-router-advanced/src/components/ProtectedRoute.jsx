import React from 'react';
import { Navigate } from 'react-router-dom';


const useAuth = () => {
  
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return isAuthenticated;
};

const ProtectedRoute = ({ component: Component }) => {
  const auth = useAuth();

  return auth ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
