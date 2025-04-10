import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { REACT_APP_ROOT } from './config.js';
import App from './App.jsx';

createRoot(document.getElementById(`${REACT_APP_ROOT}`)).render(
  <StrictMode>
    <App />
  </StrictMode>
);
