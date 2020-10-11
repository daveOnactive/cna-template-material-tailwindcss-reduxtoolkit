/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from '../context/auth';

const withAuthentication = (Component) => {
  return () => {
    const { user, isAuthenticated, loading } = useAuth();
    const Router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) Router.push('/login');
    }, [loading, isAuthenticated]);

    return (<Component {...arguments} />);
  };
};

export default withAuthentication;
