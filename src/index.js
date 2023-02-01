import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserAuthContextProvider } from './context/userAuthContext';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserAuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserAuthContextProvider>
);
