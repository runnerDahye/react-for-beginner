import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter> {/* React.StrictMode를 제거하고 HashRouter만 사용 */}
    <App />
  </HashRouter>
);

reportWebVitals();
