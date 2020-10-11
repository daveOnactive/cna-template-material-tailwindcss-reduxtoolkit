import React, {
  createContext, useState, useContext, useEffect,
} from 'react';
import Cookies from 'js-cookie';
import Router, { useRouter } from 'next/router';

// api here is an axios instance
import api from '../services/Api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'hello' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        // console.log("Got a token in the cookies, let's see if it is valid");
        // api.defaults.headers.Authorization = `Bearer ${token}`;
        // const { data: user } = await api.get('users/me');
        // if (user) setUser(user);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (email, password) => {
    // login authentication here
    // const { data: token } = await api.post('auth/login', { email, password });
    // if (token) {
    //   console.log('Got token');
    //   Cookies.set('token', token, { expires: 60 });
    //   api.defaults.headers.Authorization = `Bearer ${token.token}`;
    // }
  };

  const logout = (email, password) => {
    Cookies.remove('token');
    setUser(null);
    window.location.pathname = '/login';
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!user, user, login, loading, logout,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
