import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ContextProvider } from './utils/useContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
