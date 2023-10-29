import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    wite: '#fafafa',
    grey: '#E6E6FA',
    blue: '#6495ED',
    titleTextColor: '#2e2f42',
    mainTextColor: '#434455',
    thirdTextColor: '#ffffff',
    lightColor: '#f4f4fd',
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
  },
  spacing: value => `${value * 4}px`,
  shadow: {
    main: '0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.08)',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
