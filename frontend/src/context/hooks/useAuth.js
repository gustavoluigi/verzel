import { useEffect, useState } from 'react';
import api from '../../services/api';
import history from '../../services/history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;

      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(data) {
    const { data: { token } } = await api.post('/auth', {
      email: data.email,
      password: data.password,
    });

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    // history.push('/dashboard');
    window.location = '/dashboard';
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    // history.push('/login');
    window.location = '/';
  }

  return {
    authenticated, loading, handleLogin, handleLogout,
  };
}
