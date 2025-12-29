import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

const rootElement = document.getElementById('root') as HTMLElement;

if (typeof window !== 'undefined') {
  const storedTheme = window.localStorage?.getItem('theme') ?? 'dark';
  document.documentElement.classList.toggle('theme-light', storedTheme === 'light');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
