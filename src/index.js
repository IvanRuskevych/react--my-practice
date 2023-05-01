import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'components/App/App';

import { ThemeProvider } from '@emotion/react';
import { theme } from './constants';

// var01 const theme
// const theme = {
//   colors: {
//     white: '#ffffff',
//     black: '#010101',
//     green: '#4caf50',
//     red: '#f44336',
//     blue: '#2196f3',
//     primaryText: '#212121',
//     secondaryText: '#757575',
//   },
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
