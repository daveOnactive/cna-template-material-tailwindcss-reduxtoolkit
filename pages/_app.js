import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import PropTypes from 'prop-types';
import theme from '../themes/theme';
import store from '../store';
import { AuthProvider } from '../context/auth';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <AuthProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </AuthProvider>
    </>
  );
}

MyApp.prototype = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.node,
};

export default MyApp;
