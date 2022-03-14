import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();
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
    history.push('/dashboard');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }

  return {
    authenticated, loading, handleLogin, handleLogout,
  };
}
